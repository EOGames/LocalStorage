import React from 'react'
import Row from './Row';
 
// let genratedData = [];
let data = [];
let genratedList = [];
function UserList() {
  return (
    <div>
       {GetDatabase()}
    </div>
  )
}

export default UserList;

function GetDatabase()
{
    genratedList = [];
    if (localStorage.getItem('data') !== null)
    {
         data = localStorage.getItem('data');
         data = JSON.parse(data);
            console.log(typeof(data));
         for(let i=0; i <data.length; i++)
         {
            genratedList[i] =  <Row key ={i} id ={i} name ={data[i].name} email ={data[i].email} />
         }
    }
        return genratedList ;
}