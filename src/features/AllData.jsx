import React from 'react'
import { useDeletestudentByIdMutation, useGetAllStudentsQuery, useLazyGetAllStudentsQuery } from '../services/productsApi'
import { Link, useParams } from 'react-router-dom';


function AllData() {
 var{isLoading,data}=useGetAllStudentsQuery();
  // console.log(isLoading)
  // console.log(data)
  var [lazyFn]=useLazyGetAllStudentsQuery()
 var[deleteFn]=useDeletestudentByIdMutation();

 function dlt(id){
  deleteFn(id)
  lazyFn()
 }
  return (
    <div>
        <h1>All Students</h1>

        <Link to="/addstudent"><button className='btn btn-secondary'>+Add New Student</button></Link>
          {
            data?.map((std)=>{
              return <li>{std.name}
              <button onClick={()=>{dlt(std._id)}} className='btn btn-warning'>Delete</button>
              <Link to="/getstudent"><button className='btn btn-info' onClick={()=>{}}>Edit</button></Link>
              </li>
            })
          }
       
    </div>
  )
}

export default AllData