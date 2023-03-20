import {Route,Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element ={<Home />} />
            <Route path="add" element={<AddUser />} />
            <Route path="database" element= {<UserList />} />
        </Routes>

      
    </div>
  );
}

export default App;



function Home() {
  return (
    <div>
       its Home
    </div>
  )
}