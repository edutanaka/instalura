import { typographyVariants } from './typographyVariants';

export const colors = {
  background: {
    light: {
      color: '#FFFFFF',
      contrastColor: '#000',
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
      contrastText: '#FFFFFF',
    },
  },
  secondary: {
    main: {
      color: '#FB7B6B',
      contrastText: '#FFFFFF',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#FFFFFF',
    },
    light: {
      color: '#88989E',
      contrastText: '#FFFFFF',
    },
  },
  modes: {
    dark: {
      background: {
        light: {
          color: '#000000',
          contrastColor: '#FFFFFF',
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
          color: '#D7385E',
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
          color: '#FFFFFF',
          contrastText: '#FFFFFF',
        },
        light: {
          color: '#88989E',
          contrastText: '#000',
        },
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
  typographyVariants,
  breakpoints,
  borderRadius: '12px',
  transition: '200ms ease-in-out',
  fontFamily: '\'Rubik\', sans-serif',
};
