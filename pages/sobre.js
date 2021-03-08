import React from 'react';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import { Box } from '../src/components/foundation/layout/Box';
import Text from '../src/components/foundation/Text';

export default function PageSobre() {
  return (
    <>
      <Box
        flex="1"
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="space-between"
        backgroundImage="url(/images/bubbles.svg)"
        backgroundRepeat="no-repeat"
        backgroundPosition="bottom right"
      >
        <Menu />
        <Text
          tag="h1"
          textAlign={{
            xs: 'center',
            md: 'center',
          }}
        >
          sobre
        </Text>
        <Footer />
      </Box>

    </>
  );
}
