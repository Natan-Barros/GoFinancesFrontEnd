import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Alert } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  alert?: string;
}

const Header: React.FC<HeaderProps> = ({ size = 'large', alert }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      {alert != "" ? <Alert> {alert} </Alert> : ""}
      <nav>
        <Link to="/">Listagem</Link>
        <Link to="import">Importar</Link>
      </nav>
    </header>
  </Container>
);

export default Header;
