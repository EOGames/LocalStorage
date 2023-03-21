import React, {useState, useEffect} from 'react'
import Topbar from './Topbar';
 import { useNavigate } from 'react-router-dom';

let data = [];
function UserList() 
{
   const [user,setUser] = useState([])
   const navigate = useNavigate();
   
function Delete(id)
{ 
   data.splice(id,1);

   console.log(data);
   localStorage.setItem('data',JSON.stringify(data));
   GetDatabase();  
}

   function GetDatabase()
   {
    if (localStorage.getItem('data') !== null)
    {
         data = localStorage.getItem('data');
         data = JSON.parse(data);
         setUser(data);        
    }
   }

   useEffect(function()
   {
      GetDatabase();
      console.log ("called");
   },[]);

   function SaveIdAndLoadEditMenu(id)
{
   if (localStorage.getItem('edit_id') !==null)
   {
      localStorage.removeItem('edit_id');
   }
   localStorage.setItem('edit_id',id);
   console.log("id set " + id);
   navigate('/edit');
}
   
  return (
   <>
   <Topbar />
    <div className= 'dataList'> 
      <table>
         <thead>

         <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
         </tr>
         </thead>

         <tbody>

       
            {
               user.map((usr,index) =>
               
                  <tr key={index}>                  
                     <td >{index}</td>
                     <td className='td1'>{usr.name}</td>
                     <td className='td2'>{usr.email}</td>
                     <td className='td_btn'>
                        <button className='editBtn textShadow'onClick={()=> SaveIdAndLoadEditMenu(index)} >Edit</button>
                        <button className='deleteBtn textShadow' onClick={() => Delete(index)}>Delete</button>
                     </td>
                  </tr>
               )
            }
         </tbody>

      </table>
    </div>
   </>
  )
}

export default UserList;




