import React from 'react';
import * as S from './style';

import { Link } from 'react-router-dom';

import logo from'../../assets/logo.png';
import foto from'../../assets/foto.png';

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo"/>
      </S.LeftSide>
      <S.RightSide>
        <Link to="/">Início</Link>
        <span className="dividir"/>
        <Link to="/relatorios">Relatórios</Link>
        <span className="dividir"/>
        <a href="#" id="usuario">
          <span>Usuário</span>
          <img src={foto} alt="Usuário" />
        </a>
      </S.RightSide>
    </S.Container>
  )
}

export default Header;
