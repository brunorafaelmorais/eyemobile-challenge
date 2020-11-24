import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 20px;
  }

  > div {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color || '#000'};
    margin-right: 5px;
  }

  > .primaryText,
  > .secondaryText {
    position: relative;
    top: 1px;
  }

  > .primaryText {
    color: #4a4a4a;
    font-size: 10px;
    text-transform: uppercase;
    flex: 1 1;
    font-weight: 400;
  }

  > .secondaryText {
    color: #4a4a4a;
    font-size: 12px;
    text-transform: uppercase;
    flex-shrink: 0;
    font-weight: 900;
  }
`

export const LegendTotal = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  > .primaryText {
    color: #4a4a4a;
    font-size: 10px;
    text-transform: uppercase;
    flex: 1 1;
    font-weight: 700;
  }

  > .secondaryText {
    color: #4a4a4a;
    font-size: 12px;
    text-transform: uppercase;
    flex-shrink: 0;
    font-weight: 900;
  }
`

export const LegendContainer = styled.div`
  margin-top: 20px;
`
