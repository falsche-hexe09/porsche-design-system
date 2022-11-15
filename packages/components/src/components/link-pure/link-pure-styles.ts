import type {
  AlignLabel,
  BreakpointCustomizable,
  LinkButtonPureIconName,
  TextSize,
  TextWeight,
  ThemeExtendedElectricDark,
} from '../../types';
import { getCss, mergeDeep } from '../../utils';
import { getInsetJssStyle } from '../../styles';
import { getLinkButtonPureStyles } from '../../styles/link-button-pure-styles';

export const getComponentCss = (
  icon: LinkButtonPureIconName,
  active: boolean,
  stretch: BreakpointCustomizable<boolean>,
  size: BreakpointCustomizable<TextSize>,
  weight: TextWeight,
  hideLabel: BreakpointCustomizable<boolean>,
  alignLabel: AlignLabel,
  hasSubline: boolean,
  hasSlottedAnchor: boolean,
  theme: ThemeExtendedElectricDark
): string => {
  return getCss(
    mergeDeep(
      getLinkButtonPureStyles(
        icon,
        active,
        false,
        stretch,
        size,
        weight,
        hideLabel,
        alignLabel,
        hasSubline,
        hasSlottedAnchor,
        theme
      ),
      {
        '@global': {
          '::slotted': {
            '&(a)': {
              display: 'block',
              position: 'static',
              textDecoration: 'none',
              font: 'inherit',
              color: 'inherit',
              outline: 0,
            },
            '&(a)::before': {
              content: '""',
              position: 'absolute',
              ...getInsetJssStyle(),
              outline: '1px solid transparent',
              outlineOffset: '1px',
            },
            '&(a:focus)::before': {
              outlineColor: 'currentColor',
            },
            '&(a:focus:not(:focus-visible))::before': {
              outlineColor: 'transparent',
            },
          },
          'slot[name=subline]::slotted(*)': {
            margin: 0,
          },
        },
      }
    )
  );
};
