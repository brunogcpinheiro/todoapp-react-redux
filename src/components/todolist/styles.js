import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
  height: 100vh;
  max-width: 411px;
  margin: 0 auto;
`;

export const Header = styled.header`
  width: 100%;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    opacity: 0.5;
    border-bottom: 1px solid #282828;
  }
`;

export const Content = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  list-style: none;
  font-size: 15px;
  color: #282828;
  flex: 1;
  overflow: auto;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 2px;
    margin: 0 10px;
    border-bottom: 1px solid #b2b2b2;

    div {
      display: flex;
      flex-direction: column;
      margin: 2px;

      small {
        font-size: 11px;
        color: #b1b1b1;
        font-style: italic;
      }
    }

    button {
      border: none;
      font-size: 8px;
      background: #ff7675;
      padding: 3px;
      color: #fff;
    }
  }

  &:first-child {
    margin-top: 15px;
  }
`;

export const AddForm = styled.footer`
  flex-shrink: 0;

  div {
    border-top: 1px solid #b2b2b2;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input {
    border: none;
    padding: 10px;
    margin: 20px;
    flex: 1;
    border-radius: 10px;
  }

  button {
    border: none;
    height: 36px;
    width: 36px;
    background: transparent;
    margin: 10px;
    display: flex;
    justify-content: center;

    img {
      width: 32px;
      height: 32px;
    }
  }
`;
