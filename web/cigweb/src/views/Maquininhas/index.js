import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import api from '../../services/api';

//  Nossos componentes
import Header from '../../Components/Header';
import Cards from '../../Components/Cards';
import styles from '../../global.css';

function Maquininhas() {
  const [maquinas, setMaquinas] = useState([]);
  
  async function loadMaquinas(){
    await api.get(`/maquininhas/filter/all/true`)
                .then(response => {
                    setMaquinas(response.data)
                })
  }

  useEffect(() => {
    loadMaquinas();
  })

  return (
    <S.Container>
      <Header/>
      <S.Content>
        {
          maquinas.map(aux => (
              <Cards nome={aux.nome} usuario={aux.usuario} senha={aux.senha} id={aux._id}/>            
          ))   
        }
      </S.Content>
      <S.Bottom>
        <S.Adicionar>
          <Link to="/maquininhas/nova">ADICIONAR</Link>
        </S.Adicionar>
          <S.Voltar>
            <Link to="/relatorios">VOLTAR</Link>
          </S.Voltar>
      </S.Bottom>
    </S.Container>
    
  )
}

export default Maquininhas;
