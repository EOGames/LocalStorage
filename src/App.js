import {Route,Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Topbar from "./components/Topbar";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element ={<Home />} />
            <Route path="add" element={<AddUser />} />
            <Route path="database" element= {<UserList />} />
            <Route path="/edit" element = {<EditUser />} />
        </Routes>

      
    </div>
  );
}

export default App;



function Home() {
  return (
    <>
        <Topbar />
    </>

  )
}