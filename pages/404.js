import React from 'react';
import { Box } from '../src/components/foundation/layout/Box';
import Text from '../src/components/foundation/Text';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function Page404() {
  return (
    <Box>
      <Text
        variant="title"
        tag="h2"
        color="tertiary.main"
        textAlign="center"
      >
        página não localizada
      </Text>
    </Box>
  );
}

export default websitePageHOC(Page404, {
  pageWrapperProps: {
    seoProps: {
      headTitle: '404',
    },
    pageBoxProps: {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
      backgroundImage: 'url(/images/bubbles.svg)',
    },
  },
});
