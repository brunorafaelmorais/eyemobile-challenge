import styled from 'styled-components'

export const SearchBox = styled.label`
  display: inline-flex;
  position: relative;
  width: 100%;
  max-width: 300px;

  > svg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 10px;
    pointer-events: none;
    margin: auto;
    fill: #737689;
  }

  > input {
    background-color: #fff;
    border: 1px solid #ddd;
    height: 38px;
    outline: none;
    border-radius: 20px;
    color: #737689;
    padding: 0 10px;
    text-indent: 32px;
    width: 100%;
    max-width: 400px;
    transition: border-color 0.2s;
    line-height: 1.5;

    &:focus {
      border-color: #09cfa3;
    }
  }
`
