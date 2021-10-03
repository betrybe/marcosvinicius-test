import styled from 'styled-components';

const Container = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  aling-items: center;
  color: #fff;
`;

const Thead = styled.thead`
  background: #333;
  color: #fff;

  tr {
    font-size: 14px;
    font-family:'Roboto Condensed', sans-serif;
    text-aling: center;
    display: flex;
    padding: 10px 15px;
    width: 100%;
    justify-content: space-around;
  }
`;

const Tbody = styled.tbody`
  background: #fff;
  color: #000;

  tr {
    display: flex;
    padding: 10px 15px;
    width: 100%;
    justify-content: space-around;

    td {
      font-size: 14px;
      font-family:'Roboto Condensed', sans-serif;
    }
  }

  button {
    padding: 12px 20px;
    color: #fff;
    text-align: center;
    width: max-content;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 2px 10px rgba(0,0,0.2);
    transition: .25s;
    margin: 0 8px;
  }

  button:nth-child(1) {
    background: linear-gradient(120deg,#C25C79,#252525,#C25C79);
    background-size:200%;
    &:hover {
      cursor: pointer;
      background-position:right;
    }
  }

  button:nth-child(2) {
    background: gray;
    cursor: not-allowed;
  }
`;

export {
  Container,
  Thead,
  Tbody,
}
