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

    <div className="homeText"> 
        <p>
           This CRUD System is made using Browser local storage. If you want to save all data saved with this website please click 'clear old Storage' button at bottom of screen.
           Please Choose Options from Header Bar. Thank You. By Mandeep Singh
        </p>     
    </div>
        <div className="buttonHolder">
          <button id="clearStorage" className="deleteBtn" onClick={DeleteOldStorageFiles}> Clear Old Storage</button>
        </div>
    </>

  )
}

function DeleteOldStorageFiles()
{
  if (localStorage.getItem('edit_id'))
  {
    localStorage.removeItem('edit_id');
  }

  if (localStorage.getItem('data'))
  {
    localStorage.removeItem('data');
  }
  console.log('Delete');
}