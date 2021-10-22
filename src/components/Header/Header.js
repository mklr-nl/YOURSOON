import React, { useState, useEffect } from "react"
import styled from "styled-components"

const HeaderStyled = styled.header`
  display: flex;
  justify-content: end;
  align-items: center;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ListItem = styled.li`
  cursor: pointer;
  font-weight: 600;
  padding: 15px 0px 15px 15px;
  font-size: 20px;
  cursor: pointer;
  color: white;
`

const StyledSpan = styled.span`
  font-weight: 300;
  font-size: 25px;
  transform: translateY(-1000px);
`

const Header = props => {
  return (
    <HeaderStyled>
      <Wrapper>
        <List>
          <ListItem>
            YOUR<StyledSpan>content</StyledSpan>
          </ListItem>
          <ListItem>
            YOUR<StyledSpan>buy</StyledSpan>
          </ListItem>
          <ListItem>
            YOUR<StyledSpan>token</StyledSpan>
          </ListItem>
          <ListItem>
            YOUR<StyledSpan>wallet</StyledSpan>
          </ListItem>
        </List>
        {/* <Button>whitepaper</Button> */}
      </Wrapper>
    </HeaderStyled>
  )
}

export default Header
