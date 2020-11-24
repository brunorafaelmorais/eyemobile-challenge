import styled from 'styled-components'

const HEADER_HEIGHT = 80
const HEADER_HEIGHT_MOBILE = 56
const ASIDE_WIDTH = 100

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > header {
    width: 100%;
    height: ${HEADER_HEIGHT_MOBILE}px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #f5f7fa;
    border-bottom: 1px solid #ddd;
    z-index: 9;
    display: flex;
    align-items: center;
  }

  > aside {
    width: ${ASIDE_WIDTH}px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #09cfa3;
    z-index: 10;
    transition: all 0.2s;
  }

  > section {
    padding-top: ${HEADER_HEIGHT_MOBILE}px;
  }

  > header > div {
    display: flex;
    align-items: center;
    padding: 10px 16px;

    > .icon {
      display: inline-flex;
      margin-right: 10px;
      cursor: pointer;
    }
  }

  > section > div {
    padding: 16px;
  }

  header nav > a,
  header nav > span {
    font-size: 13px;
    text-transform: uppercase;
    color: #737689;
    font-family: 'Avenir Heavy';
    position: relative;

    &:not(:last-child)::before {
      content: '';
      width: 1px;
      height: 14px;
      background-color: #737689;
      position: absolute;
      top: -1px;
      right: -1px;
      bottom: 0;
      margin: auto;
    }

    &:not(:last-child) {
      padding-right: 20px;
      margin-right: 20px;
    }
  }

  > .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 9;
    position: fixed;
    top: 0;
    left: 0;
    transition: all 0.2s;
  }

  @media screen and (min-width: 992px) {
    > section > div {
      padding: 32px 40px;
    }

    > header > div {
      padding: 16px 40px;
    }
  }

  @media screen and (min-width: 768px) {
    > header {
      height: ${HEADER_HEIGHT}px;
      padding-left: ${ASIDE_WIDTH}px;
    }

    > section {
      padding-left: ${ASIDE_WIDTH}px;
      padding-top: ${ASIDE_WIDTH}px;
    }

    > header > div > .icon {
      display: none;
    }

    > .overlay {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    &:not(.menuOpened) {
      > aside {
        visibility: hidden;
        transform: translateX(-${ASIDE_WIDTH}px);
      }

      > .overlay {
        opacity: 0;
        visibility: hidden;
      }
    }
  }
`

export const PetLogo = styled.figure`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  padding: 16px;
  color: #fff;
`

export const AsideNav = styled.nav`
  &,
  > a {
    display: flex;
    flex-direction: column;
  }

  > a {
    align-items: center;
    text-align: center;
    color: #049c7a;
    padding: 16px 10px;
    font-size: 12px;
    font-weight: 500;
  }

  > a > span {
    margin-top: 10px;
  }

  > a.active {
    color: #fff;
  }
`
