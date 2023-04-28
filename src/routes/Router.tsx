// import React from 'react'

import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/teacher/Main';
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
]);

export default Router;
