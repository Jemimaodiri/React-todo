import {createBrowserRouter} from 'react-router-dom'
import Layout from '../Componenets/Dashboardlayout/Layout'
import Body from '../pages/Body'

export const mainrouter=createBrowserRouter([
         {
                  path:'/',
                  element:<Layout/>,
                  children:[
                           {
                                    index:true,
                                    element:<Body/>
                           }
                  ]
         }
])