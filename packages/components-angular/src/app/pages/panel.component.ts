import { Component } from '@angular/core';

@Component({
  selector: 'page-panel',
  template: `
    <div class="playground light" title="should render panel on light background">
      <p-panel [heading]="'Some heading'">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </p-panel>
    </div>

    <div class="playground dark" title="should render panel on dark background">
      <p-panel [heading]="'Some heading'" [theme]="'dark'">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </p-panel>
    </div>

    <div class="playground light" title="should render panel with slotted heading on light background">
      <p-panel>
        <span slot="heading">Some heading</span>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </p-panel>
    </div>

    <div class="playground dark" title="should render panel with slotted heading on dark background">
      <p-panel [theme]="'dark'">
        <span slot="heading">Some heading</span>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </p-panel>
    </div>

    <div class="playground light" title="should render panel open on light background">
      <p-panel [heading]="'Some heading'" [open]="true">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </p-panel>
    </div>

    <div class="playground dark" title="should render panel open on dark background">
      <p-panel [heading]="'Some heading'" [theme]="'dark'" [open]="true">
        <p style="color: white">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </p-panel>
    </div>

    <div class="playground light" title="should render panel size medium on light background">
      <p-panel [heading]="'Some heading'" [size]="'medium'">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </p-panel>
    </div>

    <div class="playground dark" title="should render panel size medium on dark background">
      <p-panel [heading]="'Some heading'" [theme]="'dark'" [size]="'medium'">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </p-panel>
    </div>

    <div class="playground light" title="should render panel with breakpoint customizable size on light background">
      <p-panel [heading]="'Some heading'" [size]="{ base: 'small', m: 'medium', l: 'small' }">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </p-panel>
    </div>

    <div class="playground dark" title="should render panel with breakpoint customizable size on dark background">
      <p-panel [heading]="'Some heading'" [theme]="'dark'" [size]="{ base: 'small', m: 'medium', l: 'small' }">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </p-panel>
    </div>

    <div class="playground light" title="should render panel weight regular on light background">
      <p-panel [heading]="'Some heading'" [weight]="'regular'">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </p-panel>
    </div>

    <div class="playground dark" title="should render panel weight regular on dark background">
      <p-panel [heading]="'Some heading'" [theme]="'dark'" [weight]="'regular'">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </p-panel>
    </div>

    <div class="playground light" title="should render panel weight regular and size medium on light background">
      <p-panel [heading]="'Some heading'" [weight]="'regular'" [size]="'medium'">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </p-panel>
    </div>

    <div class="playground dark" title="should render panel weight regular and size medium on dark background">
      <p-panel [heading]="'Some heading'" [theme]="'dark'" [weight]="'regular'" [size]="'medium'">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </p-panel>
    </div>

    <div style="width: 400px">
      <div
        class="playground light"
        title="should render panel with long heading that breaks to second line on light background"
      >
        <p-panel [heading]="'Some extra long heading that should break to the second line'">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          </p>
        </p-panel>
      </div>

      <div
        class="playground dark"
        title="should render panel with long heading that breaks to second line on dark background"
      >
        <p-panel [heading]="'Some extra long heading that should break to the second line'" [theme]="'dark'">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          </p>
        </p-panel>
      </div>
    </div>

    <div class="playground light" title="should render multiple panels with one open on light background">
      <p-panel [heading]="'Some heading'">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </p-panel>
      <p-panel [heading]="'Some heading'" [open]="true">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </p-panel>
      <p-panel [heading]="'Some heading'">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </p-panel>
    </div>

    <div class="playground dark" title="should render multiple panels with one open on dark background">
      <p-panel [heading]="'Some heading'" [theme]="'dark'">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </p-panel>
      <p-panel [heading]="'Some heading'" [theme]="'dark'" [open]="true">
        <p style="color: white">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </p-panel>
      <p-panel [heading]="'Some heading'" [theme]="'dark'">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </p-panel>
    </div>
  `,
})
export class PanelComponent {}
