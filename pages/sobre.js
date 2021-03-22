import React from 'react';
import PropTypes from 'prop-types';
import Text from '../src/components/foundation/Text';

import WebsitePageWrapper from '../src/components/wrappers/WebsitePage';

// eslint-disable-next-line react/prop-types
export default function PageSobre({ isDarkMode, changeMode }) {
  return (
    <>
      <WebsitePageWrapper
        seoProps={{
          headTitle: 'Sobre',
        }}
        isDarkMode={isDarkMode}
        changeMode={changeMode}
      >
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
      </WebsitePageWrapper>
    </>
  );
}

PageSobre.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  changeMode: PropTypes.func.isRequired,
};
