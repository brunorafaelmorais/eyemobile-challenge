import styled from 'styled-components'

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;

  table {
    min-width: 100%;
    border: 0;
    white-space: nowrap;
    border-collapse: collapse;
    table-layout: fixed;
  }

  table th,
  table td {
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 15px 12px 12px 12px;
  }

  table th {
    text-transform: uppercase;
    font-size: 12px;
    color: #09cfa3;
    font-weight: 900;
    line-height: 1.5;
  }

  table td {
    font-size: 12px;
    color: #737689;
    font-weight: 500;
  }

  table tbody tr:nth-child(odd) {
    background-color: #e5e9ef;
  }

  table tbody tr td:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  table tbody tr td:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`
