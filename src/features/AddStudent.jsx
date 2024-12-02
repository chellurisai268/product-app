import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useAddNewStudentMutation } from '../services/productsApi';
function AddStudent() {
  var navigate= useNavigate();
  var[addstudentFn]=useAddNewStudentMutation();
  return (
    <div>
        <h1>Add Student</h1>
        <Formik
       initialValues={{
         name: '',
         age: '',
         grade:""

        }}
       onSubmit={(values) => {
        addstudentFn(values).then((res)=>{navigate("/")})
       }}
     >
       {({ isSubmitting }) => (
         <Form>

           <Field type="text" name="name" /><br />
           <Field type="text" name="age" /><br />
           <Field type="text" name="grade" /><br />
           <button type="submit" >
             Add Student
           </button>
         </Form>
       )}
     </Formik>
    </div>
  )
}

export default AddStudent