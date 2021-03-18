import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import { Box } from '../src/components/foundation/layout/Box';
import Text from '../src/components/foundation/Text';
import Modal from '../src/components/commons/Modal';
import FormCadastro from '../src/components/patterns/FormCadastro';

// eslint-disable-next-line react/prop-types
export default function PageSobre({ isDarkMode, changeMode }) {
  const [isModalOpen, setModalState] = React.useState(false);
  return (
    <>
      <Box
        flex="1"
        display="flex"
        flexWrap="wrap"
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

        <Menu
          onCadastrarClick={() => setModalState(true)}
          changeMode={changeMode}
          isDarkMode={isDarkMode}
        />
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
        <Footer />
      </Box>

    </>
  );
}

PageSobre.propTypes = {
  changeMode: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};
