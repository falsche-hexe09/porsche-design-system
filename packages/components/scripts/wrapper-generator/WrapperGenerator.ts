import { AngularWrapperGenerator } from './AngularWrapperGenerator';
import { ReactWrapperGenerator } from './ReactWrapperGenerator';
import { NextJsReactWrapperGenerator } from './NextJsReactWrapperGenerator';
import { UXPinReactWrapperGenerator } from './UXPinReactWrapperGenerator';

type Framework = 'angular' | 'react' | 'nextjs' | 'uxpin';

export class WrapperGenerator {
  public generate(framework: Framework): void {
    if (framework === 'angular') {
      new AngularWrapperGenerator().generate();
    } else if (framework === 'react') {
      new ReactWrapperGenerator().generate();
    } else if (framework === 'nextjs') {
      new NextJsReactWrapperGenerator().generate();
    } else if (framework === 'uxpin') {
      new UXPinReactWrapperGenerator().generate();
    } else {
      throw new Error(`Framework ${framework} isn't supported, yet.`);
    }
  }
}
