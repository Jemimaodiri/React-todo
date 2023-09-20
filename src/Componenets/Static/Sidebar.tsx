import React from 'react'
import styled from 'styled-components';
import {FiMenu} from 'react-icons/fi'
import {BsSun,BsPerson} from 'react-icons/bs'
import {CiStar} from 'react-icons/ci'
import {PiCalendarThin} from 'react-icons/pi'
import {PiHouseThin,PiPlus} from 'react-icons/pi'
import {MdOutlineAddCard} from 'react-icons/md'
const Sidebar = () => {

  return (
    <div>
         <Container>
    <Wrapper>
      <First>
      <FiMenu />
              <Box> 
      <BsSun />
      <h3>My Day</h3>
      </Box>
              <Box2> 
      <CiStar/>
             <h2>Important</h2>
      </Box2>
              <Box2> 
      <PiCalendarThin/>
             <h2>Planned</h2>
      </Box2>
              <Box2> 
      <BsPerson/>
             <h2>Assign to me </h2>
      </Box2>
              <Box2> 
      <PiHouseThin/>
             <h2>Tasks</h2>
      </Box2>
      <hr />
      </First>
<NewList>
<PiPlus />
<h4>New List</h4>
<MdOutlineAddCard />
</NewList>
    </Wrapper>
         </Container>
    </div>
  )
}

export default Sidebar;
const NewList=styled.div`
height: 30px;
/* background-color: aquamarine; */
display: flex;
justify-content: space-around;
align-items: center;
font-size: 20px;
color: #2564CF;
h4{
  margin-right: 100px;
  font-size: 19px;
  font-weight: 300;
  color: #2564CF;
}
`
const First=styled.div`
height: 300px;
cursor: pointer;
`
const Box2=styled.div`
display: flex;
align-items: center;
width: 130px;
height: 45px;
color: #3e3c3c;
transition: all 350ms;
&:hover{
  background-color: #e2dedeb4;
}
h2{
  margin-left: 10px;
font-size: 17px;
  font-weight: 400;
}
`
const Box=styled.div`
margin-top: 3px;
/* background-color: #fff; */
display: flex;
align-items: center;
width: 120px;
color: #312f2f;
&:hover{
  background-color: grey;
}
h3{
  margin-left: 9px;
  font-size: 17px;
  font-weight: 500;
}
`
const Wrapper=styled.div`
width: 90%;
height: 90%;
display: flex;
flex-direction: column;
/* background-color: #13b1ef; */
hr{
  height: 1px;
  width: 100%;
  background-color: #dfdddd;
  border: none;
}
`
const Container=styled.div`
    height: 100%;
    width: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: white;


`