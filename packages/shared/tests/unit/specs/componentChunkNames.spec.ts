import { COMPONENT_TAG_NAMES_WITH_CHUNK } from '../../../src';

it('should match snapshot', () => {
  expect(COMPONENT_TAG_NAMES_WITH_CHUNK).toMatchSnapshot();
});
