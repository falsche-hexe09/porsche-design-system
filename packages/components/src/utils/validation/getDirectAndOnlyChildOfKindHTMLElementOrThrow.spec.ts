import { getDirectAndOnlyChildOfKindHTMLElementOrThrow } from './getDirectAndOnlyChildOfKindHTMLElementOrThrow';
import * as getDirectChildHTMLElementUtils from '../dom/getDirectChildHTMLElement';

it('should call getDirectChildHTMLElement() with correct parameters and return its result', () => {
  const parent = document.createElement('div');
  const child = document.createElement('a');
  parent.append(child);

  const spy = jest.spyOn(getDirectChildHTMLElementUtils, 'getDirectChildHTMLElement').mockReturnValue(child);
  const selector = 'a,button';

  const result = getDirectAndOnlyChildOfKindHTMLElementOrThrow(parent, selector);
  expect(result).toBe(child);
  expect(spy).toBeCalledWith(parent, selector);
});

const errorMessage = '"div has to contain a single direct child of: a"';

it('should throw error if there is more than 1 child same kind', () => {
  const parent = document.createElement('div');
  const child1 = document.createElement('a');
  const child2 = document.createElement('a');
  parent.append(child1, child2);

  expect(() => getDirectAndOnlyChildOfKindHTMLElementOrThrow(parent, 'a')).toThrowErrorMatchingInlineSnapshot(
    errorMessage
  );
});

it('should throw error if there is more than 1 child of other kind', () => {
  const parent = document.createElement('div');
  const child1 = document.createElement('a');
  const child2 = document.createElement('span');
  parent.append(child1, child2);

  expect(() => getDirectAndOnlyChildOfKindHTMLElementOrThrow(parent, 'a')).toThrowErrorMatchingInlineSnapshot(
    errorMessage
  );
});

it('should throw error if there is no child', () => {
  const parent = document.createElement('div');

  expect(() => getDirectAndOnlyChildOfKindHTMLElementOrThrow(parent, 'a')).toThrowErrorMatchingInlineSnapshot(
    errorMessage
  );
});

it('should throw error if there is a nested child', () => {
  const parent = document.createElement('div');
  const child = document.createElement('div');
  const nestedChild = document.createElement('a');
  child.append(nestedChild);
  parent.append(child);

  // TODO: workaround until jsdom actually returns null for this case
  // https://github.com/jsdom/jsdom/issues/2998
  jest.spyOn(parent, 'querySelector').mockReturnValue(null);

  expect(() => getDirectAndOnlyChildOfKindHTMLElementOrThrow(parent, 'a')).toThrowErrorMatchingInlineSnapshot(
    errorMessage
  );
});
