import styled from 'styled-components';

const Container = styled.form`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  background: ${(props) => (props.isUpdate ? '#3FB589' : '#2E2E2E')};
  padding: 25px 15px;
  color: #fff;

  .block {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    label {
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 16px;
      color: #fff;
      text-transform: capitalize;
    }

    input {
      padding: 12px 4px;
      text-align: center;
      width: max-content;
      border-radius: 5px;
      outline: none;
      border: none;
      box-shadow: 1px 2px 5px rgb(0 0 0);
      transition: .25s;

      &:focus {
        box-shadow: 1px 2px 5px #F0E68C;
      }
    }

    .valor {
      width: 100px
    }
  }

  select {
    transition: .25s;
    padding: 12px 4px;
    text-align: center;
    width: max-content;
    border-radius: 5px;
    outline: none;
    border: none;
    box-shadow: 1px 2px 5px rgb(0 0 0);

    &:focus {
      box-shadow: 1px 2px 5px #F0E68C;
    }
  }

  button {
    background: ${(props) => (props.isUpdate
    ? 'linear-gradient(120deg, #000, #252525, #252525)'
    : 'linear-gradient(120deg, #3FB589, #252525, #3FB589)')} ;
    background-size:200%;
    padding: 12px 10px;
    color: #fff;
    text-align: center;
    width: max-content;
    border-radius: 5px;
    border: none;
    box-shadow: 1px 5px 15px rgba(0,0,0.1);
    transition: .25s;

    &:hover {
      cursor: pointer;
      background-position:right;
    }
  }
`;

export {
  Container,
};
