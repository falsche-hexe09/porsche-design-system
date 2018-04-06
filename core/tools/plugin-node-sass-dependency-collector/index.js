let pluginName = 'plugin-node-sass-dependency-collector';

const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');
const sass = require('node-sass');
const PatternScssCollector = require('./src/pattern-scss-collector');

let renderedScssWithSources = [];

function writeConfigToOutput(patternlab, pluginConfig) {
  let pluginConfigPathName = path.resolve(patternlab.config.paths.public.root, 'patternlab-components', 'packages');
  try {
    fs.outputFileSync(pluginConfigPathName + '/' + pluginName + '.json', JSON.stringify(pluginConfig, null, 2));
  } catch (ex) {
    console.trace(pluginName + ': Error occurred while writing pluginFile configuration');
    console.log(ex);
  }
}

function onPatternIterate(patternlab, pattern) {
  let scssImportCollector = new PatternScssCollector(patternlab, pattern, renderedScssWithSources);
}

/**
 * Define what events you wish to listen to here
 * For a full list of events - check out https://github.com/pattern-lab/patternlab-node/wiki/Creating-Plugins#events
 * @param patternlab - global data store which has the handle to the event emitter
   */
function registerEvents(patternlab) {
  //register our handler at the appropriate time of execution
  patternlab.events.on('patternlab-pattern-write-end', onPatternIterate);
}

/**
* A single place to define the frontend configuration
* This configuration is outputted to the frontend explicitly as well as included in the plugins object.
*
*/
function getPluginFrontendConfig() {
  return {
    'name':'pattern-lab\/' + pluginName,
    'templates':[],
    'stylesheets':[],
    'javascripts':['patternlab-components\/pattern-lab\/' + pluginName + '\/js\/' + pluginName + '.js'],
    'onready':'PluginSassDependencyCollector.init()',
    'callback':''
  };
}

/**
 * A function that is able to scan a directory and subdirectories for a specific file type
 *
 */
function getFilesInDirectory(path, suffix, files=[]) {
  fs.readdirSync(path).forEach((file) => {
    let subpath = path + '/' + file;
    if (fs.lstatSync(subpath).isDirectory()) {
      getFilesInDirectory(subpath, suffix, files);
    } else if (subpath.endsWith(suffix)) {
      files.push(subpath);
    }
  });

  return files;
}

/**
 * A function that is able to render scss files and keep the source
 *
 */
function getRenderedScssWithSources(files) {
  let data = [];

  files.forEach((file) => {
    sass.render({ file: file }, (error, result) => {
      if (!error) {
        data.push({
          'source': file,
          'css': result.css.toString()
        });
      } else {
        console.error(error.formatted);
        process.exit(1);
      }
    });
  });

  return data;
}

/**
* The entry point for the plugin. You should not have to alter this code much under many circumstances.
* Instead, alter getPluginFrontendConfig() and registerEvents() methods
  */
function pluginInit(patternlab) {

  if (!patternlab) {
    console.error('patternlab object not provided to plugin-init');
    process.exit(1);
  }

  let files = getFilesInDirectory('./src', '.scss');
  renderedScssWithSources = getRenderedScssWithSources(files);

  //write the plugin json to public/patternlab-components
  let pluginConfig = getPluginFrontendConfig();
  writeConfigToOutput(patternlab, pluginConfig);

  let pluginConfigPathName = path.resolve(patternlab.config.paths.public.root, 'patternlab-components', 'packages');
  try {
    fs.outputFileSync(pluginConfigPathName + '/' + pluginName + '.json', JSON.stringify(pluginConfig, null, 2));
  } catch (ex) {
    console.trace('plugin-node-tab: Error occurred while writing pluginFile configuration');
    console.log(ex);
  }

  //add the plugin config to the patternlab-object
  if (!patternlab.plugins) {
    patternlab.plugins = [];
  }
  patternlab.plugins.push(pluginConfig);

  //write the plugin dist folder to public/pattern-lab
  let pluginFiles = glob.sync(__dirname + '/dist/**/*');

  if (pluginFiles && pluginFiles.length > 0) {

    for (let i = 0; i < pluginFiles.length; i++) {
      try {
        let fileStat = fs.statSync(pluginFiles[i]);
        if (fileStat.isFile()) {
          let relativePath = path.relative(__dirname, pluginFiles[i]).replace('dist', ''); //dist is dropped
          let writePath = path.join(patternlab.config.paths.public.root, 'patternlab-components', 'pattern-lab', pluginName, relativePath);

          //a message to future plugin authors:
          //depending on your plugin's job - you might need to alter the dist file instead of copying.
          //if you are simply copying dist files, you can probably do the below:
          fs.copySync(pluginFiles[i], writePath);
        }
      } catch (ex) {
        console.trace('plugin-node-tab: Error occurred while copying pluginFile', pluginFiles[i]);
        console.log(ex);
      }
    }
  }

  //setup listeners if not already active. we also enable and set the plugin as initialized
  if (!patternlab.config.plugins) {
    patternlab.config.plugins = {};
  }

  //attempt to only register events once
  if (patternlab.config.plugins[pluginName] !== undefined &&
     patternlab.config.plugins[pluginName].enabled &&
     !patternlab.config.plugins[pluginName].initialized) {

    //register events
    registerEvents(patternlab);

    //set the plugin initialized flag to true to indicate it is installed and ready
    patternlab.config.plugins[pluginName].initialized = true;
  }

}

module.exports = pluginInit;
