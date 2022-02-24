import { getMinifiedCss } from '@porsche-design-system/shared-src/src/styles/getMinifiedCss';
import {
  BUTTON_LINK_SKELETON_WIDTH,
  ELEMENT_SKELETON_DIMENSION,
  extendPseudoWithTheme,
  getAfterMinHeight,
  getBaseSkeletonStyle,
  getElementBackgroundGradient,
  getSkeletonElementHeight,
  getThemedPseudoStyle,
  LABEL_HEIGHT_SPACING,
  LABEL_HEIGHT_WITH_DESCRIPTION,
  PDS_SKELETON_CLASS_PREFIX,
} from './';
import { pxToRemWithUnit } from '../common-styles';

export const getSelectTextFieldWrapperSkeletonCss = (): string => {
  return getMinifiedCss({
    '@global': {
      'p-select-wrapper, p-text-field-wrapper': {
        '&:not(.hydrated)': {
          ...extendPseudoWithTheme({
            styleFunction: getBaseSkeletonStyle,
            pseudosToExtend: ['&::before', '&::after'],
          }),

          minWidth: pxToRemWithUnit(BUTTON_LINK_SKELETON_WIDTH),
          height: getSkeletonElementHeight(ELEMENT_SKELETON_DIMENSION),

          // TODO: use constants for getComponentMeta for "property" class and values
          [`&[hide-label=true], &.${PDS_SKELETON_CLASS_PREFIX}hide-label`]: {
            height: getSkeletonElementHeight(ELEMENT_SKELETON_DIMENSION, false),
            '&::before': {
              content: 'none',
            },
            '&::after': {
              top: 0,
              minHeight: '100%',
            },
          },
          [`&[description], &.${PDS_SKELETON_CLASS_PREFIX}description`]: {
            height: getSkeletonElementHeight(ELEMENT_SKELETON_DIMENSION, true, true),
            '&::before': {
              height: pxToRemWithUnit(LABEL_HEIGHT_WITH_DESCRIPTION),
              background: getElementBackgroundGradient(LABEL_HEIGHT_WITH_DESCRIPTION, LABEL_HEIGHT_SPACING, true),
            },
            '&::after': {
              top: pxToRemWithUnit(LABEL_HEIGHT_WITH_DESCRIPTION),
              minHeight: getAfterMinHeight(LABEL_HEIGHT_WITH_DESCRIPTION),
            },
          },
          ...getThemedPseudoStyle(true),
        },
      },
    },
  });
};
