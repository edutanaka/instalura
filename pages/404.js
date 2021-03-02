import React from 'react';
import { Box } from '../src/components/foundation/layout/Box';
import Menu from '../src/components/commons/Menu';
import { Text } from '../src/components/foundation/Text';
import Footer from '../src/components/commons/Footer';

export default function Page404() {
  return (
    <>
      <Box>
        <Menu />
        <Text 
          tag="h1"
          textAlign={{md: 'center'}}
        >
          404
        </Text>
        <Footer />
      </Box>

    </>
  );
}
