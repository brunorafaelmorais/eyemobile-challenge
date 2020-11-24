import styled from 'styled-components'

export const Form = styled.form`
  padding: 32px;
  display: flex;
  flex-direction: column;

  > div {
    label {
      display: block;
      color: #737689;
      margin-bottom: 5px;
      font-size: 12px;
      font-weight: 500;
    }

    input {
      width: 100%;
      height: 38px;
      outline: none;
      border: 1px solid #ccc;
      border-radius: 6px;
      padding: 0 10px;
      color: #737689;
    }

    button {
      height: 38px;
      font-size: 16px;
      background-color: #09d0a3;
      color: #fff;
      font-family: 'DIN Condensed';
      text-transform: uppercase;
      border-radius: 6px;
      outline: none;
      display: block;
      border: 0;
      padding: 0 16px;
      width: 100%;
      line-height: 44px;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`
