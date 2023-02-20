import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import Login from "./routes/App"
import Cadastro from "./routes/Pag_02"
import Home from "./routes/Pag_03"
import Privado from './routes/privado'

const router = createBrowserRouter ([
  {
    path:"/",
    element: <Login />
  },
  {
    path:"/cadastro",
    element: <Cadastro />
  },
  {
    path:"/home",
    element: <Privado><Home /></Privado>
  }
  
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

