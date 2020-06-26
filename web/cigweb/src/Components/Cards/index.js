import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import iconDefault from '../../assets/terminal-cartao.png';
import trash from '../../assets/Icon-trash-alt.png';

function Card({nome, usuario, senha, id}) {
  const [maquininhas, setMaquininhas] = useState([]);

  async function loadMaquininhas(){
    await api.get(`/maquininhas/filter/all/true`)
                .then(response => {
                    setMaquininhas(response.data)
                })
  }

  async function Remove(){
    const res = window.confirm('Deseja realmente remover?')
    if(res == true){
      await api.delete(`/maquininhas/${id}`)
    }  
  }

  useEffect(() => {
    loadMaquininhas();
  })

  var teste;
  return (
    <S.Container>
      <S.LeftCard>
        <img src={iconDefault} alt="Icone Maquininha" />
            <Link to={`/maquininhas/${id}`}>
              <h3>{nome}</h3>
            </Link>
      </S.LeftCard>
      <S.CenterCard>
        <p>Usuário:</p>
        <span>{usuario}</span>
        <p>Senha:</p>
        <span>{senha}</span>
      </S.CenterCard>
      <S.RightCard>
        <img onClick={Remove} src={trash} alt="trash" />
      </S.RightCard>
    </S.Container>
  )
}

export default Card;
