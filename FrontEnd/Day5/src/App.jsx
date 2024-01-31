import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./Components/Pages/Login"
import Register from "./Components/Pages/Register"
import Navbar from "./Components/Pages/Navbar"
import Home from "./Components/Pages/Home"
import BookEvents from "./Components/Pages/BookEvents"
import ViewEvents from "./Components/Pages/Academy"
import EventBox from "./Components/Pages/EventBox"
import Confirm from "./Components/Pages/Confirm"
import Confirm1 from "./Components/Pages/Confirm1"
import Confirm2 from "./Components/Pages/Confirm2"
import EventBox2 from "./Components/Pages/EventBox2"
import EventBox1 from "./Components/Pages/EventBox1"
import Offers from "./Components/Pages/Offers"
import Addacademy from "./Components/Pages/Addacademy"
import Addapplicant from "./Components/Pages/Addapplicant"
import Updateacademy from "./Components/Pages/Updateacademy"
import Updateapplicant from "./Components/Pages/Updateapplicant"
import Course from "./Components/Pages/Course"
import Editcourse from "./Components/Pages/Editcourse"
import Backnavbar from "./Components/Pages/Backnavbar"
import Backhome from "./Components/Pages/Backhome"
import Adminlogin from "./Components/Pages/Adminlogin"
import Adminregister from "./Components/Pages/Adminregister"



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Login/>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/BookEvents" element={<BookEvents/>}></Route>
      <Route path="/ViewEvents" element={<ViewEvents/>}></Route>
      <Route path="/EventBox" element={<EventBox/>}></Route>
      <Route path="/EventBox1" element={<EventBox1/>}></Route>
      <Route path="/EventBox2" element={<EventBox2/>}></Route>
      <Route path="/Confirm" element={<Confirm/>}></Route>
      <Route path="/Confirm1" element={<Confirm1/>}></Route>
      <Route path="/Confirm2" element={<Confirm2/>}></Route>
      <Route path="/Back to home" element={<Home/>}></Route>
      <Route path="/Offers" element={<Offers/>}></Route>
       <Route path="/AddAcademy" element={<Addacademy/>}></Route>
      <Route path="/UpdateAcademy" element={<Updateacademy/>}></Route>
      <Route path="/Addapplicant" element={<Addapplicant/>}></Route>
      <Route path="/Updateapplicant" element={<Updateapplicant/>}></Route>
      <Route path="/Course" element={<Course/>}></Route>
      <Route path="/Editcourse" element={<Editcourse/>}></Route>
      <Route path="/Backhome" element={<Backhome/>}></Route> 
      
      
       {/* <Route path="/" element={<Adminlogin/>}></Route>
       <Route path="/Register" element={</Adminregister>}></Route> */}
      
      
      
      

    </Routes>
    </BrowserRouter>
    // <div>
    //   <Login/>
    // </div>
  )
}

export default App