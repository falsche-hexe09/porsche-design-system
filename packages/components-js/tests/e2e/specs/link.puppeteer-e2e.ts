import {
  addEventListener,
  getActiveElementId,
  getIdFromNode, initAddEventListener,
  selectNode,
  setContentWithDesignSystem
} from "../helpers";

describe('link', () => {
  beforeAll(async () => {
    await initAddEventListener(); // needed for setup
  });

  it('should render', async () => {
    await setContentWithDesignSystem(`<p-link href="#">Some label</p-link>`);
    const el = await selectNode('p-link >>> a');
    expect(el).toBeDefined();
  });

  it('should dispatch correct click events', async () => {
    await setContentWithDesignSystem(`<div><p-link href="#testpage" id="hostElement">Some label</p-link></div>`);
    const link = await selectNode('p-link >>> a');
    const host = await selectNode('#hostElement');
    const wrapper = await selectNode('div');

    const events = [];
    await addEventListener(wrapper, 'click', (ev) => events.push(ev));

    await link.click();
    await host.click();
    await page.waitFor(1);

    expect(events.length).toBe(2);
    for (const event of events) {
      expect(event.target.id).toBe(await getIdFromNode(host));
    }
  });

  it(`should trigger focus&blur events at the correct time`, async () => {
    await setContentWithDesignSystem(`
      <div id="wrapper">
        <a href="#" id="before">before</a>
        <p-link href="#" id="link">Some label</p-link>
        <a href="#" id="after">after</a>
      </div>
    `);

    const link = await selectNode('p-link');
    const before = await selectNode('#before');
    const after = await selectNode('#after');
    await before.focus();

    expect(await getActiveElementId()).toEqual(await getIdFromNode(before));

    await page.keyboard.press('Tab');
    expect(await getActiveElementId()).toEqual(await getIdFromNode(link));

    await page.keyboard.press('Tab');
    expect(await getActiveElementId()).toEqual(await getIdFromNode(after));

    // tab back
    await page.keyboard.down('ShiftLeft');
    await page.keyboard.press('Tab');
    expect(await getActiveElementId()).toEqual(await getIdFromNode(link));

    await page.keyboard.down('ShiftLeft');
    await page.keyboard.press('Tab');
    expect(await getActiveElementId()).toEqual(await getIdFromNode(before));
  });

  it(`should provide methods to focus&blur the element`, async () => {
    await setContentWithDesignSystem(`
      <div id="wrapper">
        <a href="#" id="before">before</a>
        <p-link href="#">Some label</p-link>
      </div>
    `);

    // ToDo: Helper function?
    const linkHasFocus = async () => await page.evaluate(() => {
      const linkElement = document.querySelector('p-link');
      return document.activeElement === linkElement;
    });

    const link = await selectNode('p-link');
    const before = await selectNode('#before');
    await before.focus();
    expect(await linkHasFocus()).toBe(false);
    await link.focus();
    expect(await linkHasFocus()).toBe(true);
    await page.evaluate(() => {
      const linkElement: HTMLElement = document.querySelector('p-link');
      linkElement.blur();
    });
    expect(await linkHasFocus()).toBe(false);
  });
});
