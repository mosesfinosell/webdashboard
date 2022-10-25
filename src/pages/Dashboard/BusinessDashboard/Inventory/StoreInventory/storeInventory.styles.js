import styled from "styled-components";

export const Container = styled.div``;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;

  .top-right {
    height: 5.5rem;
    display: flex;
    gap: 2rem;

    button {
      background: var(--finosellYellowPrimary);
      border-radius: var(--smallBorderRadius);
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
      padding: 1rem 5rem;
      gap: 1rem;
      font-size: 1.8rem;
      line-height: 2.2rem;
      color: #fff;
    }
  }
`;

export const Field = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: var(--smallBorderRadius);
  border: solid 0.2rem var(--finosellGraySecondaryTwo);
  height: 100%;
  width: 40rem;

  svg {
    position: absolute;
    left: 1.5rem;
    margin: auto;
    top: 0;
    bottom: 0;
  }

  input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    padding: 1rem 1rem 1rem 3.4rem;
    font-size: 1.4rem;
  }
`;

export const TableContainer = styled.div`
  background: #fff;
  border-radius: var(--smallBorderRadius);
  border: solid 0.2rem var(--finosellGraySecondaryTwo);
  overflow: hidden;
`;

export const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  color: var(--finosellBluePrimary);

  h2 {
    font-weight: 700;
    font-size: 1.8rem;
  }

  .actions {
    display: flex;
    gap: 2rem;
  }

  svg {
    color: #c5c7cd;
  }

  button {
    font-size: 1.4rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-weight: 700;
  }
`;

export const Table = styled.table`
  width: 100%;
  thead {
    th {
      padding-top: 2rem;
      padding-bottom: 2rem;
      padding-right: 3rem;
    }

    th:first-child {
      padding-left: 3rem;
      padding-right: 0;
    }
  }
  thead,
  tbody {
    width: 100%;
  }
  th {
    color: #9fa2b4;
    font-weight: 700;
    font-size: 1.4rem;
    text-align: left;
  }

  tr {
    border-bottom: solid 0.1rem var(--finosellGraySecondaryTwo);
  }
  td {
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-right: 3rem;
  }

  td:first-child {
    padding-left: 3rem;
    padding-right: 0;
  }
`;

export const TableFoot = styled.div`
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0rem 3rem;
  color: var(--finosellGrayPrimary);
  font-size: 1.4rem;
  font-weight: 500;

  .item-count {
    margin: 0 3rem 0 7rem;
  }

  .arrows {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.3rem;
    font-size: 2rem;
  }
`;
