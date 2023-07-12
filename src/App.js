import Hackathons from './Components/Hackathons/Hackathons';
import Robotics from './Components/Robotics/Robotics';

import Workshops from './Components/Workshops/Workshops';
import Home from './Components/Home/Home';
import OtherEvents from './Components/OtherEvents/OtherEvents';
import Contests from './Components/Contests/Contests';
import './App.css';
import RootLayout from './Components/RootLayout';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"/Home",
          element:<Home/>
        },
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/Hackathons",
          element:<Hackathons/>
        },
     

        {
          path:"/Contests",
          element:<Contests/>
        },
        {
          path:"/Workshops",
          element:<Workshops/>
        },
        {
          path:"/Robotics",
          element:<Robotics/>
        },
        
        {
          path:"/OtherEvents",
          element:<OtherEvents/>
        },
        
      ],
    },
  ]);

  return(
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
  }
export default App;