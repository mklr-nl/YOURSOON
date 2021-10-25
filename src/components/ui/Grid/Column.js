import React from "react";
import styled from 'styled-components'

const ColumnStyled = styled.div`
  z-index: 1000;
  padding: 15px;
`

const Column = (props) => {
  
  return (
  <ColumnStyled>
    {props.children}
  </ColumnStyled>
  )
}
export default Column