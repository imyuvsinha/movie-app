import {DefaultTheme, Theme} from '@react-navigation/native';

//UPDATE ALL COLOR CODES
interface ExtendedTheme extends Theme {
  colors: Theme['colors'] & {
    background: string;
    primary: string;
    secondary: string;
    surface: string;
    blue: string;
    violet: string;
    text: string;
    white: string;
    sky: string;
    gray: string;
  };
}

const commonColor = {
  colors: {
    commonWhite: '#FFFFFF',
    commonBlack: '#000000',
  },
};

const singlularTheme: ExtendedTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...commonColor,
    ...DefaultTheme.colors,
    background: '#130c20',
    primary: '#9253ff',
    secondary: '#111928',
    surface: '#00000',
    blue: '#5433ff',
    violet: '#9253ff',
    text: '#111928',
    white: '#F8F8F8',
    sky: '#DE5E69',
    gray: '#808080',
  },
};

declare module '@react-navigation/native' {
  export function useTheme(): ExtendedTheme;
}

export default {
  singlularTheme,
};
