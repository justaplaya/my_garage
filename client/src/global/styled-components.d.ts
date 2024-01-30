import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    theme: Theme;
    colors: {
      primary: (alpha?: Alpha) => string;
      primaryLite3: (alpha?: Alpha) => string;
      primaryLite6: (alpha?: Alpha) => string;
      primaryLite12: (alpha?: Alpha) => string;
      primaryLite24: (alpha?: Alpha) => string;
      secondary: (alpha?: Alpha) => string;
      primaryContrast: (alpha?: Alpha) => string;
    };
  }
}
