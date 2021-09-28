import styled from 'styled-components';

const FContainer = styled.form`
  width:360px;
  background:#f4f4f4;
  opacity: .8;
  height:400px;
  padding:80px 40px;
  box-sizing: border-box;
  border-radius:10px;
  border: 2px solid ${props => props.theme.colors.gray};
  box-shadow: 1px 1px 15px rgba(0,0,0,.1);
  position: absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
`;

const FLogoContainer = styled.div`

`;

const FLogo = styled.img`
  width: 100%;
  height: 100px;
`;

const FButon = styled.button`
  transition: .5s;
  width:100%;
  font-size:1rem;
  font-family:'Roboto Condensed', sans-serif;
  color:#fff;
  padding:12px 8px;
  border:none;
  outline:none;
  cursor:pointer;
  background:linear-gradient(120deg, #3498db,#8244ad,#3498db);
  background-size:200%;

  && {
    &:hover{
      background-position:right;
    }
  }
`;

const FInput = styled.input`
  font-family: 'Roboto Condensed', sans-serif;
  color:#000;
  font-size:1rem;
  border:none;
  width:100%;
  outline:none;
  background:none;
  padding:0 5px;
  height: 40px;

  && {
    &::placeholder {
      color: #000;
    }
  }
`;

const FBlock = styled.div`
  border-bottom:2px solid #adadad;
  position: relative;
  margin:30px 0;
`;

export {
  FContainer,
  FInput,
  FBlock,
  FLogoContainer,
  FLogo,
  FButon
};
