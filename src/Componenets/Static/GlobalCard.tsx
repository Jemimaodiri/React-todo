import React from 'react'
import styled from 'styled-components';
import {IoToggleSharp} from 'react-icons/io5'
const GlobalCard = () => {
  return (
    <div>
         <CardContainer>
                  <CardWrapper>
                           <Holder>
                           <h3>Settings</h3>
                           <h2>General</h2>
                           <OnBox>
                           <p>Add new task on top</p>
                           <Icon>
                           <IoToggleSharp/> <h6>On</h6>
                           </Icon>
                          
                           </OnBox>
                           <OnBox>
                           <p>Add new task on top</p>
                           <Icon>
                           <IoToggleSharp/> <h6>On</h6>
                           </Icon>
                          
                           </OnBox>
                           <OnBox>
                           <p>Add new task on top</p>
                           <Icon>
                           <IoToggleSharp/> <h6>On</h6>
                           </Icon>
                          
                           </OnBox>
                           <OnBox>
                           <p>Add new task on top</p>
                           <Icon>
                           <IoToggleSharp/> <h6>On</h6>
                           </Icon>
                          
                           </OnBox>
                           <OnBox>
                           <p>Add new task on top</p>
                           <Icon>
                           <IoToggleSharp/> <h6>On</h6>
                           </Icon>
                          
                           </OnBox>
                           <OnBox>
                           <p>Add new task on top</p>
                           <Icon>
                           <IoToggleSharp/> <h6>On</h6>
                           </Icon>
                          
                           </OnBox>
                           <OnBox>
                           <p>Add new task on top</p>
                           <Icon>
                           <IoToggleSharp/> <h6>On</h6>
                           </Icon>
                          
                           </OnBox>
                           <OnBox>
                           <p>Add new task on top</p>
                           <Icon>
                           <IoToggleSharp/> <h6>On</h6>
                           </Icon>
                          
                           </OnBox>
                           <OnBox1>
                           <p>Add new task on top</p>
                           <Icon>
                           <IoToggleSharp/> <h6>Off</h6>
                           </Icon>
                          
                           </OnBox1>

                           <Smart>
                                    <h2>Smart Lists</h2>
                           <OnBox>
                           <p>Add Important</p>
                           <Icon>
                           <IoToggleSharp/> <h6>On</h6>
                           </Icon>              
                           </OnBox>
                           <OnBox>
                           <p>Add Important</p>
                           <Icon>
                           <IoToggleSharp/> <h6>On</h6>
                           </Icon>
                          
                           </OnBox>
                           <OnBox1>
                           <p>Completed</p>
                           <Icon>
                           <IoToggleSharp/> <h6>Off</h6>
                           </Icon>
                          
                           </OnBox1>
                           <OnBox1>
                           <p>Completed</p>
                           <Icon>
                           <IoToggleSharp/> <h6>Off</h6>
                           </Icon>
                          
                           </OnBox1>
                           <OnBox>
                           <p>Add Important</p>
                           <Icon>
                           <IoToggleSharp/> <h6>On</h6>
                           </Icon>              
                           </OnBox>
                           </Smart>  
                                    <Connected>
         <h2>
                  Connected Apps
         </h2>
         <OnBox>
                           <p>Planner</p>
                           <Icon>
                           <IoToggleSharp/> <h6>On</h6>
                           </Icon>      
                           {/* <p>Tasks assigned to you in planner</p>         */}
                           </OnBox>
                                    </Connected>


                                    <Notifications>
   
                                    <OnBox>
                                    <p>Email</p>
                           <Icon>
                           <IoToggleSharp/> <h6>On</h6>
                           </Icon>            
                           </OnBox>
                           <p>Get notified  when a list is shared with you</p>  
                                    </Notifications>

                                    
                           </Holder>
                  </CardWrapper>
         </CardContainer>
    </div>
  )
}

export default GlobalCard;
const Notifications=styled.div`
   p{
         font-size: 14px;
   }      
`
const Connected=styled.div`
         
`
const Smart=styled.div`
         
`
const Icon=styled.div`
height: 50%;
width: 25%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
/* background-color: #ea0606; */
h6{
         font-size:14px;
}
`
const OnBox1=styled.div`
height: 59px;
width: 80%;
/* background-color: greenyellow; */
color: grey;
font-size:40px;
p{
         color: black;
         font-size: 14px;
}
`
const OnBox=styled.div`
height: 59px;
width: 80%;
/* background-color: greenyellow; */
color: blue;
font-size:40px;
p{
         color: black;
         font-size: 14px;
}
`
const Holder=styled.div`
         width: 93%;
         height: 100%;
         /* background-color: green; */
         h3{
                  font-size: 20px;
         }
         h2{
                  font-size: 22px;
         }
         /* position: absolute; */
`
const CardWrapper=styled.div`
         width: 90%;
         height: 95%;
         border-radius: 10px;
`
const CardContainer=styled.div`
     height :100% ;
     width: 400px;
     display: flex;
     justify-content: center;
     align-items: center;
`