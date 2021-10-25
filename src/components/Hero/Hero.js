import React, { Fragment } from "react"
import styled from "styled-components"
import { TextPart } from "./TextPart"
import { LaunchPart } from "./LaunchPart"

const HeroStyled = styled.div`
  height: 80vh;
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: 1024px){
    align-items: center;
  }
  @media only screen and (max-width: 1024px){
    flex-direction: column;
    justify-content: space-around;

  }
`

const Hero = props => {
  return (
    <HeroStyled>
      <TextPart />
      <LaunchPart />
    </HeroStyled>
  )
}
export default Hero
