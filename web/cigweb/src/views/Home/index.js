import React from 'react';
import * as S from './styles';

//  Nossos componentes
import Header from '../../Components/Header';
import styles from '../../global.css';

import fundo from '../../assets/fundo_cortado.png';
import seta from '../../assets/Icon-arrow-right.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <S.Container>
      <Header/>
      <S.Content>
        <S.Left>
          <S.Nome>
            <strong>Capsule Corp</strong>
          </S.Nome>
          <S.Valor>
            <h1>R$ 4.676,58</h1>
          </S.Valor>
          <Link to="/insights">
          <S.Insights>
            <p>INSIGHTS</p>
            <img src={seta}/>
          </S.Insights>
          </Link>
          </S.Left>
          <S.Right>
            <img src={fundo}/>
        </S.Right>
      </S.Content>
    </S.Container> 
  )
}

export default Home;