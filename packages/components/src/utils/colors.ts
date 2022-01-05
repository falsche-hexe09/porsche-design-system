import { color } from '@porsche-design-system/utilities';
import type { FormState, Theme, ThemeExtendedElectric, ThemeExtendedElectricDark } from '../types';
import { isDark, isDarkElectric, isLightElectric } from './theme';
import { TextColor as IconColor } from '../types';

type ColorDarkenTheme = {
  default: string;
  neutralContrast: {
    high: string;
  };
  notification: {
    success: string;
    error: string;
  };
  state: {
    hover: string;
  };
};

const lightThemeDarken: ColorDarkenTheme = {
  default: '#000',
  neutralContrast: {
    high: '#151718',
  },
  notification: {
    success: '#014d0c',
    error: '#a30000',
  },
  state: {
    hover: '#980014',
  },
};

const darkThemeDarken: ColorDarkenTheme = {
  default: '#e0e0e0',
  neutralContrast: {
    high: '#c3c5c8',
  },
  notification: {
    success: '#017d14',
    error: '#d30303',
  },
  state: {
    hover: '#c4001a',
  },
};

const lightElectricThemeDarken: ColorDarkenTheme = {
  ...lightThemeDarken,
  state: {
    hover: '#0084b7',
  },
};

type ColorDarken = ColorDarkenTheme & {
  darkTheme: ColorDarkenTheme;
  lightElectricTheme: ColorDarkenTheme;
};

export const colorDarken: ColorDarken = {
  ...lightThemeDarken,
  darkTheme: darkThemeDarken,
  lightElectricTheme: lightElectricThemeDarken,
};

type ThemedColorsDarken = {
  baseColorDarken: string;
  contrastHighColorDarken: string;
  successColorDarken: string;
  errorColorDarken: string;
  hoverColorDarken: string;
};

const getStaticThemedColorsDarken = (theme: ThemeExtendedElectric): ThemedColorsDarken => {
  const {
    default: baseColorDarken,
    neutralContrast: { high: contrastHighColorDarken },
    state: { hover: hoverColorDarken },
    notification: { error: errorColorDarken, success: successColorDarken },
  } = isDark(theme) ? colorDarken.darkTheme : isLightElectric(theme) ? colorDarken.lightElectricTheme : colorDarken;

  return {
    baseColorDarken,
    contrastHighColorDarken,
    successColorDarken,
    errorColorDarken,
    hoverColorDarken,
  };
};

const themedColorsDarken: { [key in ThemeExtendedElectric]: ThemedColorsDarken } = {
  light: getStaticThemedColorsDarken('light'),
  dark: getStaticThemedColorsDarken('dark'),
  'light-electric': getStaticThemedColorsDarken('light-electric'),
};

export const getThemedColorsDarken = (theme: ThemeExtendedElectric): ThemedColorsDarken => {
  return themedColorsDarken[theme];
};

type ThemedColors = {
  baseColor: string;
  brandColor: string;
  backgroundColor: string;
  backgroundSurfaceColor: string;
  contrastLowColor: string;
  contrastMediumColor: string;
  contrastHighColor: string;
  hoverColor: string;
  activeColor: string;
  focusColor: string;
  disabledColor: string;
  errorColor: string;
  errorSoftColor: string;
  successColor: string;
  successSoftColor: string;
  warningColor: string;
  warningSoftColor: string;
  neutralColor: string;
  neutralSoftColor: string;
};

const getStaticThemedColors = (theme: ThemeExtendedElectricDark): ThemedColors => {
  const {
    default: baseColor,
    brand: brandColor,
    background: { default: backgroundColor, surface: backgroundSurfaceColor },
    neutralContrast: { low: contrastLowColor, medium: contrastMediumColor, high: contrastHighColor },
    state: { hover: hoverColor, active: activeColor, focus: focusColor, disabled: disabledColor },
    notification: {
      error: errorColor,
      errorSoft: errorSoftColor,
      success: successColor,
      successSoft: successSoftColor,
      warning: warningColor,
      warningSoft: warningSoftColor,
      neutral: neutralColor,
      neutralSoft: neutralSoftColor,
    },
  } = isDark(theme)
    ? color.darkTheme
    : isLightElectric(theme)
    ? color.lightElectricTheme
    : isDarkElectric(theme)
    ? color.darkElectricTheme
    : color;

  return {
    baseColor,
    brandColor,
    backgroundColor,
    backgroundSurfaceColor,
    contrastLowColor,
    contrastMediumColor,
    contrastHighColor,
    hoverColor,
    activeColor,
    focusColor,
    disabledColor,
    errorColor,
    errorSoftColor,
    successColor,
    successSoftColor,
    warningColor,
    warningSoftColor,
    neutralColor,
    neutralSoftColor,
  };
};

const themedColors: { [key in ThemeExtendedElectricDark]: ThemedColors } = {
  light: getStaticThemedColors('light'),
  dark: getStaticThemedColors('dark'),
  'light-electric': getStaticThemedColors('light-electric'),
  'dark-electric': getStaticThemedColors('dark-electric'),
};

export const getThemedColors = (theme: ThemeExtendedElectricDark): ThemedColors => {
  return themedColors[theme];
};

type ThemedFormStateColors = {
  stateColor: string;
  stateHoverColor: string;
};

const getStaticThemedFormStateColors = (theme: Theme, state: FormState): ThemedFormStateColors => {
  const isDarkTheme = isDark(theme);

  return {
    stateColor: (isDarkTheme ? color.darkTheme : color).notification[state],
    stateHoverColor: (isDarkTheme ? colorDarken.darkTheme : colorDarken).notification[state],
  };
};

const themedFormStateColorsLight: { [key in FormState]: ThemedFormStateColors } = {
  success: getStaticThemedFormStateColors('light', 'success'),
  error: getStaticThemedFormStateColors('light', 'error'),
  none: getStaticThemedFormStateColors('light', 'none'),
};
const themedFormStateColorsDark: { [key in FormState]: ThemedFormStateColors } = {
  success: getStaticThemedFormStateColors('dark', 'success'),
  error: getStaticThemedFormStateColors('dark', 'error'),
  none: getStaticThemedFormStateColors('dark', 'none'),
};

export const getThemedFormStateColors = (theme: Theme, state: FormState): ThemedFormStateColors => {
  return isDark(theme) ? themedFormStateColorsDark[state] : themedFormStateColorsLight[state];
};

export const getColor = (iconColor: IconColor, theme: ThemeExtendedElectricDark): string => {
  const {
    baseColor,
    brandColor,
    contrastHighColor,
    contrastMediumColor,
    contrastLowColor,
    successColor,
    errorColor,
    warningColor,
    neutralColor,
  } = getThemedColors(theme);

  const colorMap: { [key in IconColor]: string } = {
    brand: brandColor,
    default: baseColor,
    'neutral-contrast-high': contrastHighColor,
    'neutral-contrast-medium': contrastMediumColor,
    'neutral-contrast-low': contrastLowColor,
    'notification-success': successColor,
    'notification-warning': warningColor,
    'notification-error': errorColor,
    'notification-neutral': neutralColor,
    inherit: 'currentColor',
  };
  return colorMap[iconColor];
};
