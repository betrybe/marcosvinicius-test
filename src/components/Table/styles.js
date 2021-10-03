import styled from 'styled-components';

const Container = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #fff;
`;

const Thead = styled.thead`
  display: inherit;
  width: 100%;
  background: #333;
  color: #fff;

  tr {
    display: grid;
    grid-template-columns: repeat(9,1fr);
    font-family:'Roboto Condensed', sans-serif;
    margin: 0;
    padding: 10px 0;
    font-size: 14px;
    width: 100%;
  }
`;

const Tbody = styled.tbody`
  margin-top: 2rem;
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
    margin: 0px 8px;
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
    background: linear-gradient(120deg,#F0E68C,#252525,#F0E68C);
    background-size:200%;
    &:hover {
      cursor: pointer;
      background-position:right;
    }
  }
`;

export {
  Container,
  Thead,
  Tbody,
}
