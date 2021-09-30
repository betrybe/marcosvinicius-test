import styled from 'styled-components';

const FContainer = styled.form`
  width:360px;
  background: #f4f4f4;
  opacity: .8;
  height: max-content;
  padding: 80px 40px 70px 40px;
  box-sizing: border-box;
  border-radius:10px;
  border: 2px solid #adadad;
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

  border: 1.8px solid #adadad;
  &:focus {
    border-color: #3FB589;
    border-width: 2px;
    box-shadow: 10px 2px 35px rgba(255,255,255,.5)
  }
`;

const FButon = styled.button`
  transition: .5s;
  width:100%;
  font-size: 14px;
  font-family:'Roboto Condensed', sans-serif;
  color: #fff;
  padding: 12px 8px;
  margin-top: 10px;
  border:none;
  border-radius: 4px;
  outline:none;
  cursor: ${props => props.isDisabled ? 'not-allowed' : 'pointer'};
  background: ${props => props.isDisabled ? 'gray' : 'linear-gradient(120deg, #3FB589, #000, #3FB589)'};
  background-size:200%;

  &:hover{
    background-position:right;
  }
`;

const FErrorMessage = styled.h4`
  font-size: 10px;
  color: red;
  transition: .25s linear;
`;


export {
  FContainer,
  FInput,
  FBlock,
  FLogoContainer,
  FLogo,
  FButon,
  FErrorMessage
};
