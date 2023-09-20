import React, { useState } from 'react'
import styled from 'styled-components';
import {CgMenuGridO} from 'react-icons/cg'
import {LiaSearchSolid} from 'react-icons/lia'
import {CiSettings} from 'react-icons/ci'
import {AiOutlineQuestion} from 'react-icons/ai'
import {VscMegaphone} from 'react-icons/vsc'
import GlobalCard from './GlobalCard';
const Dashboardhead = () => {
    const [show, setShow] = useState (false)
  const Toggle = () => {
    setShow (!show);
  }
  return (
    <div>
         <Container>
                  <Wrapper>
                  <Holder>
                  <Menu>
                  <CgMenuGridO />
                  </Menu>
                  <h3>To Do</h3>
                  </Holder>
                  <InputHold>
                  <SearchHold>
                  <LiaSearchSolid />
                  </SearchHold>
                  <input type="search" />
                  </InputHold>
                  <IconHold>
                  <One>
                  <CiSettings />
                  </One>
                  <Two> <AiOutlineQuestion />
                  </Two>
                  <Three>
                           <VscMegaphone />
                  </Three>
                  <Circle>
                           OG
                  </Circle>
                  </IconHold>
                  </Wrapper>
                  <Globe>
                  <GlobalCard />
                  </Globe>
                  <GlobalCard />
         </Container>
    </div>
  )
}

export default Dashboardhead;
const Globe=styled.div`


`
const Circle=styled.div`
         width: 30px;
         height: 30px;
         border-radius: 100px;
         border: 1px solid white;
         display: flex;
         justify-content: center;
         align-items: center;
         color: white;
         font-size: 14px;
         font-weight: 600;
         margin-left: 30px;

`
const Three=styled.div`
         
         font-size: 20px;
         margin-left: 30px;
`
const Two=styled.div`
         
         font-size: 20px;
         margin-left: 30px;
`
const One=styled.div`
         
         font-size: 20px;
         margin-left: 30px;
`
const IconHold =styled.div`
         display: flex;
         align-items: center;
         color: white;
`
const SearchHold=styled.div`
width: 40px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
color: #2564CF;
font-size: 20px;
`
const InputHold=styled.div`
display: flex;
/* align-items: center; */
height: 32px;
width: 380px;
/* background-color: aquamarine; */
overflow: hidden;
border-radius: 5px;
input{
         flex: 1;
         height: 100%;
         border: none;
         outline: none;
         padding-left: 12px;
}
`
const Holder=styled.div`
display: flex;
align-items: center;
h3{
         color: #ffff;
         margin-left: 40px;
}
`
const Menu=styled.div`
  color: #ffff;
  font-size: 28px;
/* margin-left: 40px; */
`
const Wrapper=styled.div`
  width: 98%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  justify-content: space-between;

`;
const Container=styled.div`
   width:100% ;
   height: 60px;
   display: flex;
   /* position: fixed; */
   background-color: #2564CF;
   justify-content: center;
`;