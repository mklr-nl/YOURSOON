import React, { Fragment } from "react";
import styled from 'styled-components'

const RowStyled = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (min-width: 1500px){
      justify-content: ${props => props.justify};
    }
    align-items: center;
`

const Row = (props) => {
  
  return (
  <RowStyled justify={props.justify}>
     {props.children}
  </RowStyled>
  )
}
export default Row