import styled from 'styled-components'

export const TotalBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
  margin: 32px 0;

  > .title {
    font-family: 'DIN Condensed';
    font-size: 25px;
    color: #737689;
    text-transform: uppercase;
  }

  > .value {
    font-weight: 500;
    font-size: 40px;
    color: #09d0a3;

    small {
      font-size: 50%;
      vertical-align: super;
    }
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 40px;

    > .value {
      font-size: 70px;
    }
  }
`

export const ContentAll = styled.div`
  width: 100%;
  max-width: 768px;
  display: block;
  margin: auto;
`

export const FilterBox = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;

  > button {
    justify-content: center;
    align-items: center;
    display: inline-flex;
    height: 38px;
    border: 0;
    outline: none;
    font-size: 16px;
    background-color: #09d0a3;
    color: #fff;
    font-family: 'DIN Condensed';
    text-transform: uppercase;
    border-radius: 20px;
    padding: 0 16px;
    min-width: 64px;
    transition: all 0.2s;
    white-space: nowrap;
    flex-shrink: 0;

    > span {
      position: relative;
      top: 3px;
    }

    &:not(:last-child) {
      margin-right: 10px;
    }

    &:not(.active) {
      opacity: 0.5;
    }

    &:not(.active):hover {
      opacity: 1;
    }
  }
`

export const ChartTitle = styled.h2`
  font-family: 'DIN Condensed';
  font-size: 25px;
  color: #737689;
  text-transform: uppercase;
  margin-bottom: 16px;
  text-align: center;
`

export const ChartsContainer = styled.h2`
  display: grid;
  grid-gap: 64px;
  grid-template-columns: repeat(1, 1fr);
  justify-items: stretch;
  align-items: stretch;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
