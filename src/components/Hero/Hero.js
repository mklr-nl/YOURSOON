import React, { Fragment } from "react"
import styled from "styled-components"
import { TextPart } from "./TextPart"
import { LaunchPart } from "./LaunchPart"

const HeroStyled = styled.div`
  height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
