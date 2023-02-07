import styled from "styled-components";

interface ITextDescriptionProps{
  styled: string
}

export const Container = styled.div`
  width: 580px;
  height: 60px;
  background-color: #ffff;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px;
`

export const TextDescription = styled.p<ITextDescriptionProps>`
  text-decoration: ${(props) => 
                   props.styled === 'none' ?
                   'none'
                   : 'line-through'
                   };
`

export const Button = styled.div`
  color: red;
  cursor: pointer;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`