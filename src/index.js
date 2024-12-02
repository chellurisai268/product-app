import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store'
import { Provider } from 'react-redux'
import { createRoot } from "react-dom/client";
import AllData from './features/AllData.jsx'; 
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import AddStudent from './features/AddStudent.jsx';
import Updatestudent from './features/Updatestudent.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,  
    children:[
      {
        path:"/",
        element:<AllData></AllData>
      },
      {
        path:"/addstudent",
        element:<AddStudent></AddStudent>
      },
      {
        path:"/getstudent",
        element:<Updatestudent></Updatestudent>
      }
    ]  
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
 <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
