import React from 'react'
import Topbar from './Topbar';


function AddUser() {
  return (
    <>
        <Topbar />
        <div className='container'>
            <label >Name</label> <input id='name' type="text" placeholder='Name' /> <br />
            <label >Email</label> <input id='email' type="text" placeholder='Email' /> <br />
            <button id='savebtn' onClick={AddUserToList}>Save</button> 
        </div>
    </>
  )
}

export default AddUser;


let data = [];
let count = 0;

let nameV = "";
let emailV ="";

function AddUserToList()
{
    const _name = document.getElementById('name');
    const  _email = document.getElementById('email');

    nameV = "";
    emailV = "";

   // console.log(_name);
    nameV = _name.value;
    emailV = _email.value;
    count = 0;
    data = [];

    if (localStorage.getItem('data') !== null)
    {
        data = JSON.parse(localStorage.getItem('data'));        
    }

    if (data.length <=0)
    {
        count = 0;       
    }
    else
    {
        count = data.length-1;
        count++;
    }

    data[count] =
    {
        name: nameV,
        email: emailV
    }

    
   

    localStorage.setItem('data',JSON.stringify(data));
    // count = 0;

    ShowData();
}

function ShowData()
{
    data = [];
    if (localStorage.getItem('data') !== null)
    {
        console.log("Reached Here");
       // data = JSON.parse(localStorage.getItem('data'));
        data = localStorage.getItem('data');

        
            console.log(data);
        
       
    }
    window.location.href ='/database';
}