import React, { Fragment } from "react";
import styled from 'styled-components'

const Column = styled.div`
`

const Row = styled.div`
    margin: 30px 0;

`
const RowTimer = styled.div`
display: flex;
margin: 30px 0;

justify-content: space-between;
align-items: center;
`
const RowBar = styled.div`
  height: 30px;
  background-color: white;
  margin: 30px 0;

  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
`

const Filler = styled.div`
width: 80%;
  height: 30px;
  background-color: #00ff1e;
`

const Title = styled.p`
color: white;
font-size: 50px;
`
const TitleColored = styled.span`
  background: #f33232;
  font-size: 50px;
  padding: 0 10px 5px 10px;
`

const CounterNumber = styled.p`
  color: white;
font-size: 24px;
`

const CounterText = styled.p`
color: white;
font-size: 24px;
`

const Timer = styled.div`
justify-content: space-between ;
align-items: center;
`


const LaunchPart = (props) => {
  
  return (
  <Column>
    <Row><Title>YOUR <TitleColored>public sale launching</TitleColored> in:</Title> </Row>
    <RowTimer>
      <Timer>
        <CounterNumber>34</CounterNumber>
        <CounterText>DAYS</CounterText>
      </Timer>
      <Timer>
        <CounterNumber>01</CounterNumber>
        <CounterText>HOURS</CounterText>
      </Timer>
      <Timer>
        <CounterNumber>38</CounterNumber>
        <CounterText>MINUTES</CounterText>
      </Timer>
      <Timer>
        <CounterNumber>04</CounterNumber>
        <CounterText>SECONDS</CounterText>
      </Timer>
    </RowTimer>
    <RowBar>
      <Filler></Filler>
    </RowBar>
  </Column>
  )
}
export default LaunchPart