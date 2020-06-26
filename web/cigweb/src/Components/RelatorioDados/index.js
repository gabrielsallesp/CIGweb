import React from 'react';
import * as S from './styles';


function Relatorio({data, operadora, bandeira, transacao, valor, estabelecimento}) {

  return (
    <S.Container>
      <S.Content>
        <S.Data><span>{data}</span></S.Data>
        <S.Operadora><span>{operadora}</span></S.Operadora>
        <S.Bandeira><span>{bandeira}</span></S.Bandeira>
        <S.Transacao><span>{transacao}</span></S.Transacao>
        <S.Valor><span>R${valor}</span></S.Valor>
        <S.Estabelecimento><span>{estabelecimento}</span></S.Estabelecimento>




      </S.Content>
    </S.Container>
  )
}

export default Relatorio;


        
        
        
        
        
        