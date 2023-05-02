// import React from 'react'

import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import * as ParentRote from '../pages/parent/Rote/All';
import Table from '../views/atoms/Table';
const Router = createBrowserRouter([
  {
    path: 'parent',
    element: <Main />,
    children: [
      {
        path: 'rote/school',
        element: <ParentRote.School />,
      },
      {
        path: 'rote/home',
        element: <ParentRote.Home />,
      },
      {
        path: 'rote/ndone',
        element: <ParentRote.NotDone />,
      },
    ],
  },
  {
    path: 'table',
    element: <Table />,
  },
]);

export default Router;
