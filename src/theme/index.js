import { typographyVariants } from './typographyVariants';

export const colors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#F2F2F2',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '#D7385E',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#FB7B6B',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    },
  },
  logo: {
    color: '#070C0E',
  },
  modes: {
    dark: {
      background: {
        light: {
          color: '#fff',
        },
        main: {
          color: '#030506',
        },
      },
      borders: {
        main: {
          color: '#181F22',
        },
      },
      primary: {
        main: {
          color: '#F27895',
          contrastText: '#FFFFFF',
        },
      },
      secondary: {
        main: {
          color: '#FFA59A',
          contrastText: '#000',
        },
      },
      tertiary: {
        main: {
          color: '#D4D4D4',
          contrastText: '#00000',
        },
        light: {
          color: '#88989E',
          contrastText: '#000',
        },
      },
      logo: {
        color: '#FFFFFF',
      },
    },
  },
};

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

export default {
  colors: colors.modes.dark,
  // colors,
  typographyVariants,
  breakpoints,
  borderRadius: '12px',
  transition: '200ms ease-in-out',
  fontFamily: '\'Rubik\', sans-serif',
};
