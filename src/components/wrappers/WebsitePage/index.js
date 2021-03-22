import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../../foundation/layout/Box';
import Modal from '../../commons/Modal';
import FormCadastro from '../../patterns/FormCadastro';
import Menu from '../../commons/Menu';
import Footer from '../../commons/Footer';
import SEO from '../../commons/SEO';
import DarkMode from '../../commons/DarkMode';

export const WebsitePageContext = React.createContext({
  toggleModalCadastro: () => {},
});

export default function WebsitePageWrapper({
  children,
  seoProps,
  menuProps,
  isDarkMode,
  changeMode,
}) {
  const [isModalOpen, setModalState] = React.useState(false);
  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setModalState(!isModalOpen);
        },
      }}
    >
      <SEO
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...seoProps}
      />
      <DarkMode isDarkMode={isDarkMode} changeMode={changeMode} />

      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        backgroundImage={isDarkMode ? 'url(/images/bubbles-dark.svg)' : 'url(/images/bubbles.svg)'}
        backgroundRepeat="no-repeat"
        backgroundPosition="bottom right"
      >
        <Modal
          flex="1"
          isOpen={isModalOpen}
          onClose={() => {
            setModalState(false);
          }}
        >
          {(propsDoModal) => (
            <FormCadastro propsDoModal={propsDoModal} />
          )}
        </Modal>

        { menuProps.display && (
        <Menu
          onCadastrarClick={() => setModalState(true)}
        />
        )}

        {children}

        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  changeMode: PropTypes.func.isRequired,
};
