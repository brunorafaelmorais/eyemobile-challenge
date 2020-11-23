import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > nav {
    display: flex;
    flex-shrink: 0;
    margin-right: 16px;
    flex-direction: row;
  }

  > nav > a {
    display: flex;
    align-items: center;
    font-size: 14px;
    text-transform: uppercase;
    font-family: 'Avenir Heavy';
    color: #737689;

    &:not(:last-child) {
      margin-right: 16px;
      margin-bottom: 0;
    }

    &:not(.active) {
      opacity: 0.5;
    }

    > span {
      margin-left: 10px;
      position: relative;
      top: 2px;
    }
  }

  > section {
    flex: 1 1;
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;

    > nav {
      margin-right: 40px;
      flex-direction: column;
    }

    > nav > a {
      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: 20px;
      }
    }
  }
`
