import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => (props.isRed ? 'red' : 'blue')};
  background: linear-gradient(to right, #458545, #993240);
  small{
    font-size: 12pt;
    margin-left: 15px;
    color: #515

  }
`;

export const Paragrafo = styled.p`
  font-size: 50pt`;
