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
    display: flex;
    padding: 10px 15px;
    width: 100%;
    justify-content: space-around;

    td {
      text-aling: center;
    }
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
      text-aling: center;
    }
  }
`;

export {
  Container,
  Thead,
  Tbody,
}
