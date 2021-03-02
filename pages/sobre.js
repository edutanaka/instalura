import React from 'react';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import { Box } from '../src/components/foundation/layout/Box';
import { Text } from '../src/components/foundation/Text';

export default function PageSobre() {
  return (
    <>
      <Box>
        <Menu />
        <Text 
          tag="h1"
          textAlign={{md: 'center'}}
        >
          sobre
        </Text>
        <Footer />
      </Box>

    </>
  );
}
