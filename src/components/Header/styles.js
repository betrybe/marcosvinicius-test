import styled from 'styled-components';

const Container = styled.header`
  background: ${props => props.theme.colors.white};
  width: 100%;
  position: relative;
  display: flex;
  height: 70px;
  padding: 0 35px;
  align-items: center;
  justify-content: space-between;
`;

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
`;

const Logo = styled.img`
  position: relative;
  width: 100px;
  height: max-content;
`;

const Div = styled.div``;

export {
  Container,
  Block,
  Label,
  Logo,
  Div
}
