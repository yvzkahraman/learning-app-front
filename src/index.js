import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootswatch/dist/simplex/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

//  Tensorflow.js => AI 

// MERN | MEAN | MEVN 
// react.js | node.js(backend) | mongo, | Express.js 

// Net Core Web API | React.js


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

