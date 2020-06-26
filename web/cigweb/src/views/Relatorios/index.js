import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import api from '../../services/api';

//  Nossos componentes
import Header from '../../Components/Header';
import Relatorio from '../../Components/RelatorioDados';
import styles from '../../global.css';

import seta from '../../assets/arrow-right.png';

function Relatorios() {
  const [dados, setDados] = useState([]);

  async function loadDados(){
    await api.get(`/dados/all`)
                .then(response => {
                    setDados(response.data)
                })
  }

  useEffect(() => {
    loadDados();
  })


  return (
    <S.Container>
      <Header/>
      <S.Content>
            <S.Bottom>
            <Link to="/maquininhas">Maquininhas<img src={seta}/></Link>     
            </S.Bottom>
        <S.Title>
            <span>Data</span>
            <span>Operadora</span>
            <span>Bandeira</span>
            <span>Tipo de Transação</span>
            <span>Valor</span>
            <span>Estabelecimento</span>
        </S.Title>
        <S.Data>
            {
              dados.map(aux => (
                  <Relatorio data={aux.data_venda} 
                             operadora={aux.operadora} 
                             bandeira={aux.bandeira_cartao} 
                             transacao={aux.tipo_transacao} 
                             valor={aux.valor_venda}
                             estabelecimento={aux.local_estabelecimento}/>            
              ))   
            }

        </S.Data>
      </S.Content>
    </S.Container>
    
  )
}

export default Relatorios;
