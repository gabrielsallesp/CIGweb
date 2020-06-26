import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

//  Nossos componentes
import Header from '../../Components/Header';
import Grafico from '../../Components/Grafico';
import styles from '../../global.css';

function insights() {

  return (
    <S.Container>
      <Header/>
      <S.Content>
        <S.LeftSide>

        </S.LeftSide>
        <S.RightSide>
          <S.Title>
            <h3>TIPO DE TRANSAÇÃO</h3>
          </S.Title>
          <S.GraficoPie>
              <Grafico/>
              <S.Informacao>
              <S.Credito>
                <S.ColorC/>
                <span>Crédito</span>
              </S.Credito>
              <S.Debito>
                <S.ColorD/> 
                <span>Débito</span>
              </S.Debito>
              </S.Informacao>
          </S.GraficoPie>

        </S.RightSide>
      </S.Content>
    </S.Container>
    
  )
}

export default insights;
