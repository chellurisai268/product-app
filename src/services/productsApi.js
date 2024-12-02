import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4500/' }),
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: () => `/`,
    }),
    addNewStudent: builder.mutation({
      query: (body) => ({
        url: `/addstudent`,
        method: 'POST',
        body: body,
      }),
    }),
    deletestudentById: builder.mutation({
      query: (id) => ({
        url: `/deletestudent/${id}`,
        method: 'DELETE',
        body:id,
      }),
    }),
    getStudentsById: builder.query({
      query: (id) => `/getstudent/${id}`,
    }),
  }),
  
 
  
 
})
  


export const {
  useGetAllStudentsQuery,
  useAddNewStudentMutation,
  useDeletestudentByIdMutation,
  useLazyGetAllStudentsQuery,
  useGetStudentsByIdQuery
 } = productsApi