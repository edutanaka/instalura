import React from 'react';
import { Box } from '../../src/components/foundation/layout/Box';
import Menu from '../../src/components/commons/Menu';
import Text from '../../src/components/foundation/Text';
import Footer from '../../src/components/commons/Footer';

export default function FAQPage() {
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
          FAQ
        </Text>
        <Footer />
      </Box>

    </>
  );
}
