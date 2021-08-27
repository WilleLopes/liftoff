import { useState } from 'react';
import styled from 'styled-components';

export function Button() {

    const [valor, setValor] = useState(0)




function Adiciona() {
  let contador = valor + 1  
return (
    setValor(contador)
);}


    return (
        <Botao onClick={Adiciona}>{valor}</Botao>
    )
}

const Botao = styled.button`
width: 100px;
height: 50px;
`;