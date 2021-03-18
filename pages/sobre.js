import React from 'react';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import { Box } from '../src/components/foundation/layout/Box';
import Text from '../src/components/foundation/Text';
import Modal from '../src/components/commons/Modal';
import FormCadastro from '../src/components/patterns/FormCadastro';

export default function PageSobre() {
  const [isModalOpen, setModalState] = React.useState(false);
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
        />
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
