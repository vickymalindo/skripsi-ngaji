// import React from 'react'

import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/teacher/Main';
import Table from '../views/atoms/Table';
import Content from '../views/molecules/Content';
const Router = createBrowserRouter([
  {
    path: 'teacher',
    element: <Main />,
    children: [
      {
        path: 'allStudents',
        element: <Content />,
      },
    ],
  },
  {
    path: 'table',
    element: <Table />,
  },
]);

export default Router;
