import React from 'react';
import Text from '../src/components/foundation/Text';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

// eslint-disable-next-line react/prop-types
export function PageSobre() {
  return (
    <Text
      tag="h2"
      variant="subTitle"
      color="tertiary.main"
      textAlign={{
        xs: 'center',
        md: 'center',
      }}
    >
      sobre
    </Text>
  );
}

export default websitePageHOC(PageSobre, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre',
    },
    pageBoxProps: {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
      backgroundImage: ('url(/images/bubbles.svg)'),
    },
  },
});
