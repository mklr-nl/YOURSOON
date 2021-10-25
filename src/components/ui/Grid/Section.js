import React, { Fragment } from "react";
import styled from 'styled-components'

const SectionStyled = styled.div`

`

const Section = (props) => {
  
  return (
  <SectionStyled>
    {props.children}    
  </SectionStyled>
  )
}
export default Section