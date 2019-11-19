import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="app">
      <p-text>
        <b id="human-readable-browser-name"></b>
        <br>
        <span id="system-log"></span>
      </p-text>
      <hr>
      <p-headline variant="headline-2" tag="h2">Basic</p-headline>
      <hr>
      <p-grid>
        <p-grid-item size="2">
          <p-headline variant="headline-4" tag="h4">&lt;p-marque&gt;</p-headline>
        </p-grid-item>
        <p-grid-item size="10">
          <div class="playground light spacing-block">
            <p-marque></p-marque>
            <p-marque trademark="false"></p-marque>
          </div>
          <hr>
        </p-grid-item>
      </p-grid>
      <p-grid>
        <p-grid-item size="2">
          <p-headline variant="headline-4" tag="h4">&lt;p-headline&gt;</p-headline>
        </p-grid-item>
        <p-grid-item size="10">
          <div class="playground light spacing-block">
            <p-headline variant="large-title" tag="h1">The quick brown fox jumps over the lazy dog</p-headline>
            <p-headline variant="headline-1" tag="h1">The quick brown fox jumps over the lazy dog</p-headline>
            <p-headline variant="headline-2" tag="h2">The quick brown fox jumps over the lazy dog</p-headline>
            <p-headline variant="headline-3" tag="h3">The quick brown fox jumps over the lazy dog</p-headline>
            <p-headline variant="headline-4" tag="h4">The quick brown fox jumps over the lazy dog</p-headline>
            <p-headline variant="headline-5" tag="h5">The quick brown fox jumps over the lazy dog</p-headline>
            <p-headline variant="headline-6" tag="h6">The quick brown fox jumps over the lazy dog</p-headline>
          </div>
          <hr>
        </p-grid-item>
      </p-grid>
      <p-grid>
        <p-grid-item size="2">
          <p-headline variant="headline-4" tag="h4">&lt;p-text&gt;</p-headline>
        </p-grid-item>
        <p-grid-item size="10">
          <div class="playground light spacing-block">
            <p-text>The quick brown fox jumps over the lazy dog</p-text>
            <p-text variant="x-small">The quick brown fox jumps over the lazy dog</p-text>
          </div>
          <div class="playground light spacing-block">
            <p-text color="porsche-black">Porsche Black</p-text>
            <p-text color="porsche-light" style="background: black; display: block;">Porsche Light</p-text>
            <p-text color="inherit" style="color: deeppink;">Inherited custom color</p-text>
          </div>
          <div class="playground light spacing-block">
            <p-text ellipsis="true">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p-text>
          </div>
          <div class="playground light spacing-block">
            <p-text>Lorem ipsum dolor sit amet <a href="#">linked text</a> et, <b>bold text</b> &amp; <strong>strong
              text</strong></p-text>
          </div>
          <hr>
        </p-grid-item>
      </p-grid>
      <p-headline variant="headline-2">Action</p-headline>
      <hr>
      <p-grid>
        <p-grid-item size="2">
          <p-headline variant="headline-4" tag="h4">&lt;p-button-regular&gt;</p-headline>
        </p-grid-item>
        <p-grid-item size="5">
          <div class="playground light spacing-inline">
            <p-button-regular variant="highlight">Some label</p-button-regular>
            <p-button-regular variant="highlight" disabled="true">Some label</p-button-regular>
            <p-button-regular variant="highlight" loading="true">Some label</p-button-regular>
          </div>
          <div class="playground light spacing-inline">
            <p-button-regular>Some label</p-button-regular>
            <p-button-regular disabled="true">Some label</p-button-regular>
            <p-button-regular loading="true">Some label</p-button-regular>
          </div>
          <div class="playground light spacing-inline">
            <p-button-regular variant="ghost">Some label</p-button-regular>
            <p-button-regular variant="ghost" disabled="true">Some label</p-button-regular>
            <p-button-regular variant="ghost" loading="true">Some label</p-button-regular>
          </div>
          <div class="playground light spacing-inline">
            <p-button-regular icon="phone">Some label</p-button-regular>
          </div>
          <div class="playground light spacing-inline">
            <p-button-regular small="true">Some label</p-button-regular>
            <p-button-regular small="true" variant="ghost">Some label</p-button-regular>
            <p-button-regular small="true" variant="highlight">Some label</p-button-regular>
          </div>
          <hr>
        </p-grid-item>
        <p-grid-item size="5">
          <div class="playground dark spacing-inline">
            <p-button-regular theme="dark" variant="highlight">Some label</p-button-regular>
            <p-button-regular theme="dark" variant="highlight" disabled="true">Some label</p-button-regular>
            <p-button-regular theme="dark" variant="highlight" loading="true">Some label</p-button-regular>
          </div>
          <div class="playground dark spacing-inline">
            <p-button-regular theme="dark">Some label</p-button-regular>
            <p-button-regular theme="dark" disabled="true">Some label</p-button-regular>
            <p-button-regular theme="dark" loading="true">Some label</p-button-regular>
          </div>
          <div class="playground dark spacing-inline">
            <p-button-regular theme="dark" variant="ghost">Some label</p-button-regular>
            <p-button-regular theme="dark" variant="ghost" disabled="true">Some label</p-button-regular>
            <p-button-regular theme="dark" variant="ghost" loading="true">Some label</p-button-regular>
          </div>
          <div class="playground dark spacing-inline">
            <p-button-regular theme="dark" icon="phone">Some label</p-button-regular>
          </div>
          <div class="playground dark spacing-inline">
            <p-button-regular theme="dark" small="true">Some label</p-button-regular>
            <p-button-regular theme="dark" small="true" variant="ghost">Some label</p-button-regular>
            <p-button-regular theme="dark" small="true" variant="highlight">Some label</p-button-regular>
          </div>
          <hr>
        </p-grid-item>
      </p-grid>
      <p-grid>
        <p-grid-item size="2">
          <p-headline variant="headline-4" tag="h4">&lt;p-button-icon&gt;</p-headline>
        </p-grid-item>
        <p-grid-item size="5">
          <div class="playground light spacing-inline">
            <p-button-icon></p-button-icon>
            <p-button-icon disabled="true"></p-button-icon>
            <p-button-icon loading="true"></p-button-icon>
          </div>
          <div class="playground light spacing-inline">
            <p-button-icon variant="ghost"></p-button-icon>
            <p-button-icon variant="ghost" disabled="true"></p-button-icon>
            <p-button-icon variant="ghost" loading="true"></p-button-icon>
          </div>
          <div class="playground light spacing-inline">
            <p-button-icon variant="transparent"></p-button-icon>
            <p-button-icon variant="transparent" disabled="true"></p-button-icon>
            <p-button-icon variant="transparent" loading="true"></p-button-icon>
          </div>
          <div class="playground light spacing-inline">
            <p-button-icon icon="phone"></p-button-icon>
          </div>
          <hr>
        </p-grid-item>
        <p-grid-item size="5">
          <div class="playground dark spacing-inline">
            <p-button-icon theme="dark"></p-button-icon>
            <p-button-icon theme="dark" disabled="true"></p-button-icon>
            <p-button-icon theme="dark" loading="true"></p-button-icon>
          </div>
          <div class="playground dark spacing-inline">
            <p-button-icon theme="dark" variant="ghost"></p-button-icon>
            <p-button-icon theme="dark" variant="ghost" disabled="true"></p-button-icon>
            <p-button-icon theme="dark" variant="ghost" loading="true"></p-button-icon>
          </div>
          <div class="playground dark spacing-inline">
            <p-button-icon theme="dark" variant="transparent"></p-button-icon>
            <p-button-icon theme="dark" variant="transparent" disabled="true"></p-button-icon>
            <p-button-icon theme="dark" variant="transparent" loading="true"></p-button-icon>
          </div>
          <div class="playground dark spacing-inline">
            <p-button-icon theme="dark" icon="phone"></p-button-icon>
          </div>
          <hr>
        </p-grid-item>
      </p-grid>
      <p-grid>
        <p-grid-item size="2">
          <p-headline variant="headline-4" tag="h4">&lt;p-text-link&gt;</p-headline>
        </p-grid-item>
        <p-grid-item size="10">
          <div class="playground light spacing-inline">
            <p-text-link href="https://ui.porsche.com">Some link with default icon</p-text-link>
          </div>
          <div class="playground light spacing-inline">
            <p-text-link href="https://ui.porsche.com" color="porsche-black">Porsche Black</p-text-link>
            <p-text-link href="https://ui.porsche.com" color="porsche-light" style="background: black;">Porsche Light
            </p-text-link>
            <p-text-link href="https://ui.porsche.com" color="inherit" style="color: deeppink;">Inherited custom color
            </p-text-link>
          </div>
          <div class="playground light spacing-inline">
            <p-text-link href="https://ui.porsche.com" icon="delete">Some link with a custom icon</p-text-link>
          </div>
          <hr>
        </p-grid-item>
      </p-grid>
      <p-headline variant="headline-2">Content</p-headline>
      <hr>
      <p-grid>
        <p-grid-item size="2">
          <p-headline variant="headline-4" tag="h4">
            &lt;p-text-list&gt;<br>
            &lt;p-text-list-item&gt;
          </p-headline>
        </p-grid-item>
        <p-grid-item size="5">
          <div class="playground light spacing-block">
            <p-text-list>
              <p-text-list-item>First level - Lorem ipsum dolor sit amet</p-text-list-item>
              <p-text-list-item>
                Lorem ipsum dolor sit amet <a href="#">linked text</a> et, <b>bold text</b> &amp; <strong>strong
                text</strong>
                <p-text-list>
                  <p-text-list-item>Second level - Lorem ipsum dolor sit amet</p-text-list-item>
                  <p-text-list-item>Lorem ipsum</p-text-list-item>
                </p-text-list>
              </p-text-list-item>
              <p-text-list-item>First level - Lorem ipsum dolor sit amet</p-text-list-item>
            </p-text-list>
          </div>
          <div class="playground light spacing-block">
            <p-text-list listType="ordered">
              <p-text-list-item>First level - Lorem ipsum dolor sit amet</p-text-list-item>
              <p-text-list-item>
                Lorem ipsum dolor sit amet <a href="#">linked text</a> et, <b>bold text</b> &amp; <strong>strong
                text</strong>
                <p-text-list listType="ordered">
                  <p-text-list-item>Second level - Lorem ipsum dolor sit amet</p-text-list-item>
                  <p-text-list-item>Lorem ipsum</p-text-list-item>
                </p-text-list>
              </p-text-list-item>
              <p-text-list-item>First level - Lorem ipsum dolor sit amet</p-text-list-item>
            </p-text-list>
          </div>
          <hr>
        </p-grid-item>
        <p-grid-item size="5">
          <div class="playground dark spacing-block">
            <p-text-list color="porsche-light">
              <p-text-list-item>First level - Lorem ipsum dolor sit amet</p-text-list-item>
              <p-text-list-item>
                Lorem ipsum dolor sit amet <a href="#">linked text</a> et, <b>bold text</b> &amp; <strong>strong
                text</strong>
                <p-text-list>
                  <p-text-list-item>Second level - Lorem ipsum dolor sit amet</p-text-list-item>
                  <p-text-list-item>Lorem ipsum</p-text-list-item>
                </p-text-list>
              </p-text-list-item>
              <p-text-list-item>First level - Lorem ipsum dolor sit amet</p-text-list-item>
            </p-text-list>
          </div>
          <div class="playground dark spacing-block">
            <p-text-list listType="ordered" color="inherit" style="color: deeppink;">
              <p-text-list-item>First level - Lorem ipsum dolor sit amet</p-text-list-item>
              <p-text-list-item>
                Lorem ipsum dolor sit amet <a href="#">linked text</a> et, <b>bold text</b> &amp; <strong>strong
                text</strong>
                <p-text-list>
                  <p-text-list-item>Second level - Lorem ipsum dolor sit amet</p-text-list-item>
                  <p-text-list-item>Lorem ipsum</p-text-list-item>
                </p-text-list>
              </p-text-list-item>
              <p-text-list-item>First level - Lorem ipsum dolor sit amet</p-text-list-item>
            </p-text-list>
          </div>
          <hr>
        </p-grid-item>
      </p-grid>
      <p-headline variant="headline-2">Feedback</p-headline>
      <hr>
      <p-grid>
        <p-grid-item size="2">
          <p-headline variant="headline-4" tag="h4">&lt;p-spinner&gt;</p-headline>
        </p-grid-item>
        <p-grid-item size="5">
          <div class="playground light spacing-inline">
            <p-spinner size="x-small" allyLabel="Loading"></p-spinner>
            <p-spinner size="small" allyLabel="Loading"></p-spinner>
            <p-spinner size="medium" allyLabel="Loading"></p-spinner>
            <p-spinner size="large" allyLabel="Loading"></p-spinner>
          </div>
          <hr>
        </p-grid-item>
        <p-grid-item size="5">
          <div class="playground dark spacing-inline">
            <p-spinner theme="dark" size="x-small" allyLabel="Loading"></p-spinner>
            <p-spinner theme="dark" size="small" allyLabel="Loading"></p-spinner>
            <p-spinner theme="dark" size="medium" allyLabel="Loading"></p-spinner>
            <p-spinner theme="dark" size="large" allyLabel="Loading"></p-spinner>
          </div>
          <hr>
        </p-grid-item>
      </p-grid>
      <p-headline variant="headline-2">Icon</p-headline>
      <hr>
      <p-grid>
        <p-grid-item size="2">
          <p-headline variant="headline-4" tag="h4">&lt;p-icon&gt;</p-headline>
        </p-grid-item>
        <p-grid-item size="10">
          <div class="playground light spacing-inline">
            <p-icon name="car-next" aria-label="Car icon"></p-icon>
            <p-icon name="car-next" size="medium" aria-label="Car icon"></p-icon>
            <p-icon name="car-next" size="large" aria-label="Car icon"></p-icon>
            <p-icon name="car-next" size="large" color="porsche-red" aria-label="Car icon"></p-icon>
            <p-icon name="car-next" size="large" color="inherit" aria-label="Car icon" style="color: deeppink;"></p-icon>
            <p-icon name="kaixin" size="large" aria-label="Kaixin icon"></p-icon>
          </div>
          <hr>
        </p-grid-item>
      </p-grid>
      <p-headline variant="headline-2">Layout</p-headline>
      <hr>
      <p-grid>
        <p-grid-item size="2">
          <p-headline variant="headline-4" tag="h4">
            &lt;p-grid&gt;<br>
            &lt;p-grid-item&gt;
          </p-headline>
        </p-grid-item>
        <p-grid-item size="10">
          <div class="playground light spacing-block">
            <p-grid>
              <p-grid-item size="12"></p-grid-item>
            </p-grid>
            <p-grid>
              <p-grid-item size="1"></p-grid-item>
              <p-grid-item size="11"></p-grid-item>
            </p-grid>
            <p-grid>
              <p-grid-item size="2"></p-grid-item>
              <p-grid-item size="10"></p-grid-item>
            </p-grid>
            <p-grid>
              <p-grid-item size="3"></p-grid-item>
              <p-grid-item size="9"></p-grid-item>
            </p-grid>
            <p-grid>
              <p-grid-item size="4"></p-grid-item>
              <p-grid-item size="8"></p-grid-item>
            </p-grid>
            <p-grid>
              <p-grid-item size="5"></p-grid-item>
              <p-grid-item size="7"></p-grid-item>
            </p-grid>
            <p-grid>
              <p-grid-item size="6"></p-grid-item>
              <p-grid-item size="6"></p-grid-item>
            </p-grid>
            <p-grid>
              <p-grid-item size="7"></p-grid-item>
              <p-grid-item size="5"></p-grid-item>
            </p-grid>
            <p-grid>
              <p-grid-item size="8"></p-grid-item>
              <p-grid-item size="4"></p-grid-item>
            </p-grid>
            <p-grid>
              <p-grid-item size="9"></p-grid-item>
              <p-grid-item size="3"></p-grid-item>
            </p-grid>
            <p-grid>
              <p-grid-item size="10"></p-grid-item>
              <p-grid-item size="2"></p-grid-item>
            </p-grid>
            <p-grid>
              <p-grid-item size="11"></p-grid-item>
              <p-grid-item size="1"></p-grid-item>
            </p-grid>
          </div>
          <div class="playground light spacing-block">
            <p-grid>
              <p-grid-item offset="1" size="11"></p-grid-item>
            </p-grid>
            <p-grid>
              <p-grid-item offset="2" size="10"></p-grid-item>
            </p-grid>
            <p-grid>
              <p-grid-item offset="3" size="9"></p-grid-item>
            </p-grid>
            <p-grid>
              <p-grid-item offset="4" size="8"></p-grid-item>
            </p-grid>
            <p-grid>
              <p-grid-item offset="5" size="7"></p-grid-item>
            </p-grid>
            <p-grid>
              <p-grid-item offset="6" size="6"></p-grid-item>
            </p-grid>
            <p-grid>
              <p-grid-item offset="7" size="5"></p-grid-item>
            </p-grid>
            <p-grid>
              <p-grid-item offset="8" size="4"></p-grid-item>
            </p-grid>
            <p-grid>
              <p-grid-item offset="9" size="3"></p-grid-item>
            </p-grid>
            <p-grid>
              <p-grid-item offset="10" size="2"></p-grid-item>
            </p-grid>
            <p-grid>
              <p-grid-item offset="11" size="1"></p-grid-item>
            </p-grid>
          </div>
          <hr>
        </p-grid-item>
      </p-grid>
      <p-grid>
        <p-grid-item size="2">
          <p-headline variant="headline-4" tag="h4">
            &lt;p-flex&gt;<br>
            &lt;p-flex-item&gt;
          </p-headline>
        </p-grid-item>
        <p-grid-item size="10">
          <div class="playground light spacing-block">
            <p-flex>
              <p-flex-item width="one-quarter"></p-flex-item>
              <p-flex-item width="one-quarter"></p-flex-item>
              <p-flex-item width="one-quarter"></p-flex-item>
              <p-flex-item width="one-quarter"></p-flex-item>
            </p-flex>
            <p-flex>
              <p-flex-item width="one-third"></p-flex-item>
              <p-flex-item width="one-third"></p-flex-item>
              <p-flex-item width="one-third"></p-flex-item>
            </p-flex>
            <p-flex>
              <p-flex-item width="half"></p-flex-item>
              <p-flex-item width="half"></p-flex-item>
            </p-flex>
            <p-flex>
              <p-flex-item width="two-thirds"></p-flex-item>
              <p-flex-item width="one-third"></p-flex-item>
            </p-flex>
            <p-flex>
              <p-flex-item width="three-quarters"></p-flex-item>
              <p-flex-item width="one-quarter"></p-flex-item>
            </p-flex>
            <p-flex>
              <p-flex-item width="full"></p-flex-item>
            </p-flex>
          </div>
          <div class="playground light spacing-block">
            <p-flex>
              <p-flex-item offset="one-quarter" width="three-quarters"></p-flex-item>
            </p-flex>
            <p-flex>
              <p-flex-item offset="one-third" width="two-thirds"></p-flex-item>
            </p-flex>
            <p-flex>
              <p-flex-item offset="half" width="half"></p-flex-item>
            </p-flex>
            <p-flex>
              <p-flex-item offset="two-thirds" width="one-third"></p-flex-item>
            </p-flex>
            <p-flex>
              <p-flex-item offset="three-quarters" width="one-quarter"></p-flex-item>
            </p-flex>
          </div>
          <hr>
        </p-grid-item>
      </p-grid>
      <p-grid>
        <p-grid-item size="2">
          <p-headline variant="headline-4" tag="h4">Spacing</p-headline>
        </p-grid-item>
        <p-grid-item size="10">
          <div class="playground light spacing-inline">
            <div class="p-spacing-pt-4 p-spacing-pr-4"></div>
            <div class="p-spacing-pt-8 p-spacing-pr-8"></div>
            <div class="p-spacing-pt-16 p-spacing-pr-16"></div>
            <div class="p-spacing-pt-24 p-spacing-pr-24"></div>
            <div class="p-spacing-pt-32 p-spacing-pr-32"></div>
            <div class="p-spacing-pt-40 p-spacing-pr-40"></div>
            <div class="p-spacing-pt-48 p-spacing-pr-48"></div>
            <div class="p-spacing-pt-56 p-spacing-pr-56"></div>
            <div class="p-spacing-pt-64 p-spacing-pr-64"></div>
            <div class="p-spacing-pt-72 p-spacing-pr-72"></div>
            <div class="p-spacing-pt-80 p-spacing-pr-80"></div>
          </div>
          <hr>
        </p-grid-item>
      </p-grid>
      <p-headline variant="headline-2">Navigation</p-headline>
      <hr>
      <p-grid>
        <p-grid-item size="2">
          <p-headline variant="headline-4" tag="h4">&lt;p-pagination&gt;</p-headline>
        </p-grid-item>
        <p-grid-item size="5">
          <div class="playground light spacing-block">
            <p-pagination totalItemsCount="500" itemsPerPage="25" activePage="1"></p-pagination>
          </div>
          <hr>
        </p-grid-item>
        <p-grid-item size="5">
          <div class="playground dark spacing-block">
            <p-pagination theme="dark" totalItemsCount="500" itemsPerPage="25" activePage="1"></p-pagination>
          </div>
          <hr>
        </p-grid-item>
      </p-grid>
    </div>
  `,
  styles: []
})
export class AppComponent {
}
