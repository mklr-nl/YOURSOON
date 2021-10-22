import React, { useEffect, useState, useRef } from "react";
import styled from 'styled-components'


const Column = styled.div`
  @media only screen and (min-width: 1024){
  min-width: 50%;
}
`

const Row = styled.div`
    margin: 30px 0;

`
const RowTimer = styled.div`
display: flex;
margin: 5px 0;

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
const YourStyled = styled.span`
  font-weight: 800;
  font-size: 50px;

`

const LaunchPart = (props) => {  

  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')


  let interval = useRef()
  const startTimer = () => {
    let countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
    interval = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0){
        clearInterval()
      } else {
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    }, 1000)
  }
  useEffect(() => {
    startTimer();
    return() => {}
  })


  return (
  <Column>
    <Row><Title><YourStyled>YOUR </YourStyled><TitleColored>public sale launching</TitleColored> in:</Title> </Row>
    <RowTimer>
      <Timer>
        <CounterNumber>{timerDays}</CounterNumber>
        <CounterText>DAYS</CounterText>
      </Timer>
      <Timer>
        <CounterNumber>{timerHours}</CounterNumber>
        <CounterText>HOURS</CounterText>
      </Timer>
      <Timer>
      <CounterNumber>{timerMinutes}</CounterNumber>
        <CounterText>MINUTES</CounterText>
      </Timer>
      <Timer>
        <CounterNumber>{timerSeconds}</CounterNumber>
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