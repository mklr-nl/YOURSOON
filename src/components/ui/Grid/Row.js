import React, { Fragment } from "react";
import styled from 'styled-components'

const RowStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Row = (props) => {
  
  return (
  <RowStyled>
     {props.children}
  </RowStyled>
  )
}
export default Row