import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../../../theme/Logo';
import { Button } from '../Button';
import { MenuWrapper } from './styles/MenuWrapper';
import Link from '../Link';

export default function Menu({ onCadastrarClick }) {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide as="ul">
        {[
          { url: '/', name: 'Home' },
          { url: '/faq', name: 'Perguntas Frequentes' },
          { url: '/sobre', name: 'Sobre' },
        ].map((link) => (
          <li key={link.url}>
            <Link variant="smallestException" tag="a" href={link.url}>
              {link.name}
            </Link>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button type="button" ghost variant="secondary.main" href="/app/login">
          Entrar
        </Button>
        <Button type="button" variant="primary.main" onClick={onCadastrarClick}>
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
};
