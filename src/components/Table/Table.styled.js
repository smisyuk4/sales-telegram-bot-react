import styled from '@emotion/styled';

export const TableStyled = styled.table`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 700px;

  font-size: 14px;
  color: var(--tg-main-text-color, #000);
  border-bottom: 2px solid var(--tg-main-text-color, #000);

  .number {
    width: 10%;
  }

  .date {
    width: 23%;
  }

  .user {
    width: 22%;
  }

  .title {
    width: 45%;
  }

  thead {
    background-color: #61616170;
  }

  tr {
    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
  }

  tr:hover,
  tr:focus {
    background-color: #61616117;
  }

  td,
  th {
    padding: 5px;
  }
`;
