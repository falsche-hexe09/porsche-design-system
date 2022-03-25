import type { FormState } from '../../../types';
import { pxToRemWithUnit } from '../../../styles';

export const UNIT_POSITIONS = ['prefix', 'suffix'] as const;
export type TextFieldWrapperUnitPosition = typeof UNIT_POSITIONS[number];

export const hasCounter = (el: HTMLTextAreaElement | HTMLInputElement): boolean => el.maxLength >= 0;
export const hasCounterAndIsTypeText = (el: HTMLInputElement): boolean => el.type === 'text' && hasCounter(el);
export const hasUnitAndIsTypeTextOrNumber = (el: HTMLInputElement, unit: string): boolean => {
  const { type } = el;
  return !!unit && (type === 'text' || type === 'number');
};
export const setCounterInnerHtml = (el: HTMLTextAreaElement | HTMLInputElement, counterElement: HTMLElement): void => {
  counterElement.innerText = `${el.value.length}/${el.maxLength}`;
};
export const setAriaElementInnerHtml = (
  el: HTMLTextAreaElement | HTMLInputElement,
  ariaElement: HTMLSpanElement
): void => {
  ariaElement.innerText = `You have ${el.maxLength - el.value.length} out of ${el.maxLength} characters left`;
};

export const getInputPadding = (
  unitElementWidth: number,
  unitPosition: TextFieldWrapperUnitPosition,
  state: FormState
): string => {
  const padding = pxToRemWithUnit(state !== 'none' ? 10 : 11);
  return unitPosition === 'prefix'
    ? `${padding} ${padding} ${padding} ${pxToRemWithUnit(unitElementWidth)}`
    : `${padding} ${pxToRemWithUnit(unitElementWidth)} ${padding} ${padding}`;
};

export const setInputStyles = (
  input: HTMLInputElement,
  unitOrCounterElement: HTMLElement,
  unitPosition: TextFieldWrapperUnitPosition,
  state: FormState
): void => {
  if (unitOrCounterElement) {
    input.style.setProperty(
      'padding',
      getInputPadding(unitOrCounterElement.offsetWidth, unitPosition, state),
      'important'
    );
  }
};

export const throwIfUnitLengthExceeded = (unit: string): void => {
  if (unit.length > 5) {
    throw new RangeError(`Unit: ${unit} passed to 'PTextFieldWrapper' exceeds the maximum length of 5`);
  }
};

export const addInputEventListener = (
  input: HTMLTextAreaElement | HTMLInputElement,
  counterElement: HTMLSpanElement,
  characterCountElement: HTMLSpanElement,
  inputChangeCallback?: () => void
): void => {
  setCounterInnerHtml(input, counterElement); // initial value
  setAriaElementInnerHtml(input, characterCountElement); // initial value

  input.addEventListener('input', (e) => {
    setCounterInnerHtml(e.target as HTMLTextAreaElement | HTMLInputElement, counterElement);
    setAriaElementInnerHtml(e.target as HTMLTextAreaElement | HTMLInputElement, characterCountElement);
    if (inputChangeCallback) {
      inputChangeCallback();
    }
  });
};
