import React from 'react'
import Topbar from './Topbar';
//import { useNavigate } from 'react-router-dom';


const EditUser = () =>
 {
    let data = [];
    let count = 0;
    
    let nameV = "";
    let emailV ="";
    
    function  LoadData()
{
    
    if (localStorage.getItem('edit_id') === null)    
    return;
    
    if (localStorage.getItem('edit_id') !== null)
    {
        count = localStorage.getItem('edit_id');
    }
 
    if (localStorage.getItem('data') !== null)
    {
        data =  JSON.parse(localStorage.getItem('data'));        
    }

    // let _name = document.getElementById('name');
    // let  _email =  document.getElementById('email');
    
    nameV = data[count].name; 
    emailV = data[count].email;

   
   
}
LoadData();

  const UpdateUser = ()=>
{
    //const nav = useNavigate();
    if (localStorage.getItem('edit_id') === null)    
        return;
    


    let data = [];
    let count = 0;
    
    let nameV = "";
    let emailV ="";

      const _name = document.getElementById('name');
      const  _email = document.getElementById('email');

      nameV = _name.value;
      emailV = _email.value;

     if (localStorage.getItem('edit_id') !== null)
     {
         count = localStorage.getItem('edit_id');
     }
  
     if (localStorage.getItem('data') !== null)
     {
         data =  JSON.parse(localStorage.getItem('data'));        
     }

    data[count] =
    {
        name: nameV,
        email: emailV
    }
    
    localStorage.setItem('data',JSON.stringify(data));

    if (localStorage.getItem('edit_id') !== null)
    {
        localStorage.removeItem('edit_id');
    }

    // nav('/database');
}
  
    
  return (
    <>
        <Topbar />
        <div className='container'>
                <label >Name</label> <input id='name' type="text" placeholder='Name' defaultValue={nameV} /> <br />
                <label >Email</label> <input id='email' type="text" placeholder='Email' defaultValue={emailV} /> <br />
                <button id='updateBtn' onClick={UpdateUser}>Update</button> 
        </div>
    </>
  )
}

export default EditUser;



