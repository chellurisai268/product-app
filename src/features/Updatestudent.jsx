import React from 'react'
import { Formik, Form, Field } from 'formik';
import {  useGetStudentsByIdQuery } from '../services/productsApi';
import { useParams } from 'react-router-dom';
function Updatestudent() {
    var {id}=useParams();
    
    var{isLoading,data}=useGetStudentsByIdQuery(id);

  return (
    <div>
        <h1>Updatestudent</h1>
         <Formik
       initialValues={{
         name: '',
         age: '',
         grade:""

        }}
       onSubmit={(values) => {
       console.log(values)
       }}
     >
       {({ isSubmitting }) => (
         <Form>

           <Field type="text" name="name" /><br />
           <Field type="text" name="age" /><br />
           <Field type="text" name="grade" /><br />
           <button type="submit" >
             Update
           </button>
         </Form>
       )}
     </Formik>
    </div>
  )
}

export default Updatestudent