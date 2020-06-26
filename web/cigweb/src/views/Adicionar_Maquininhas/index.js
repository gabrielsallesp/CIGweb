import React, {useState, useEffect} from 'react';
import * as S from './styles';

import {Link, Redirect} from 'react-router-dom';

import api from '../../services/api';

//  Nossos componentes
import Header from '../../Components/Header';
import styles from '../../global.css';

function Adicionar_maquininha({match}) {
  const [redirect, setRedirect] = useState(false);
  const [id, setId] = useState();
  const [nome, setNome] = useState();
  const [usuario, setUsuario] = useState();
  const [senha, setSenha] = useState();

  async function LoadMaquininhaDetails(){
    await api.get(`/maquininhas/${match.params.id}`)
    .then(response => {
      setNome(response.data.nome)
      setUsuario(response.data.usuario)
      setSenha(response.data.senha)
      setId(response.data.id)
    })
  }

  async function Save(){
    // Validação dos dados
    if(!nome)
      return alert("Você precisa informar o nome da maquininha")
    else if(!usuario)
      return alert("Você precisa informar o nome de usuário")
    else if(!senha)
      return alert("Você precisa informar a senha")

    if(match.params.id){
        await api.put(`/maquininhas/${match.params.id}`, {
          nome,
          usuario,
          senha,
          id
        }).then(() =>
          setRedirect(true)
          )
        }else{
          await api.post('/maquininhas', {
            nome,
            usuario,
            senha,
            id
          }).then(() =>
          setRedirect(true)
      )
    }
  }

  useEffect(() => {
    LoadMaquininhaDetails();
  }, [])

  return (
    <S.Container>
      {redirect && <Redirect to="/maquininhas"/>}
      <Header/>
      <S.Form>
        <h2>NOVA MAQUININHA</h2>

        <S.Input>
            <S.Formulario>
            <span>Nome</span>
            <input type="Text" onChange={e => setNome(e.target.value)} value = {nome}/>
            </S.Formulario>
            <S.Formulario>
            <span>Usuário</span>
            <input type="Text" onChange={e => setUsuario(e.target.value)} value = {usuario}/>
            </S.Formulario>
            <S.Formulario>
            <span>Senha</span>
            <input type="Text" onChange={e => setSenha(e.target.value)} value = {senha}/>
            <S.Bottom>
            <S.Adicionar>
                <button type="button" onClick={Save}>SALVAR</button>
            </S.Adicionar>
            <S.Voltar>
            <Link to="/maquininhas">CANCELAR</Link>
            </S.Voltar>
            </S.Bottom>
            </S.Formulario>
        </S.Input>

      </S.Form>
    </S.Container>
    
  )
}

export default Adicionar_maquininha;


