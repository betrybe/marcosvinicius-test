import styled from 'styled-components';

const FContainer = styled.form`
  width:360px;
  background: ${props => props.theme.colors.white};
  opacity: .8;
  height: max-content;
  padding: 80px 40px 70px 40px;
  box-sizing: border-box;
  border-radius:10px;
  border: 2px solid ${props => props.theme.colors.gray};
  box-shadow: 1px 1px 12px rgba(0,0,0,.1);
  position: absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
`;

const FLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
`;

const FLogo = styled.img`
  width: 100%;
  height: 100%;
`;

const FBlock = styled.div`
  transition: .25s linear;
  position: relative;
  margin: 0px 0;
  height: 40px;
  border-radius: 5px;
`;

const FInput = styled.input`
  transition: .1s all linear;
  border: 0;
  outline: none;
  font-family: 'Roboto Condensed', sans-serif;
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: inherit;

  border: 1.8px solid ${props => props.theme.colors.gray};
  &:focus {
    border-color: ${p => p.theme.colors.primary};
    border-width: 2px;
    box-shadow: 10px 2px 35px rgba(255,255,255,.5)
  }
`;

const FButon = styled.button`
  transition: .5s;
  width:100%;
  font-size: 14px;
  font-family:'Roboto Condensed', sans-serif;
  color: ${p => p.theme.colors.textButton};
  padding: 12px 8px;
  margin-top: 10px;
  border:none;
  border-radius: 4px;
  outline:none;
  cursor:pointer;
  background:linear-gradient(120deg, ${p => p.theme.colors.primary},${p => p.theme.colors.textPrimary},${p => p.theme.colors.primary});
  background-size:200%;

  &:hover{
    background-position:right;
  }
`;


export {
  FContainer,
  FInput,
  FBlock,
  FLogoContainer,
  FLogo,
  FButon
};
