import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    background-color: blue
}
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.pink};
`;
export const Note = styled.h4`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.pink};
`;
export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;
export const Items = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-around;
  padding: 10px;
`;
