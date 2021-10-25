import React, { Fragment } from "react"
import Section from "./Section"
import Container from "./Container"
import Row from "./Row"
import Column from "./Column"

const Grid = props => {
  return (
    <Section>
      <Container>
      {props.children}
      </Container>
    </Section>
  )
}
export default Grid
