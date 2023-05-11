import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import { Murojaah as ParentMurojaah } from '../pages/parent/Murojaah';
import Profile from '../pages/parent/Profile';
import * as ParentRote from '../pages/parent/Rote/All';
import { Tilawah as ParentTilawah } from '../pages/parent/Tilawah';
import { Murojaah as TeacherMurojaah } from '../pages/teacher/Murojaah';
import QuranRote from '../pages/teacher/QuranRote';
import Student from '../pages/teacher/Student';
import { Tilawah as TeacherTilawah } from '../pages/teacher/Tilawah';
import Create from '../pages/teacher/forms/Create';
import Edit from '../pages/teacher/forms/Edit';
const Router = createBrowserRouter([
  {
    path: 'parent',
    element: <Main />,
    children: [
      {
        path: 'rote',
        children: [
          {
            path: 'school',
            element: <ParentRote.School />,
          },
          {
            path: 'home',
            element: <ParentRote.Home />,
          },
          {
            path: 'ndone',
            element: <ParentRote.NotDone />,
          },
        ],
      },
      {
        path: 'murojaah',
        element: <ParentMurojaah />,
      },
      {
        path: 'tilawah',
        element: <ParentTilawah />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: 'teacher',
    element: <Main />,
    children: [
      {
        path: 'students',
        element: <Student />,
      },
      {
        path: 'forms',
        children: [
          {
            path: 'create',
            element: <Create />,
          },
          {
            path: 'edit',
            element: <Edit />,
          },
        ],
      },
      {
        path: 'rote',
        element: <QuranRote />,
      },
      {
        path: 'tilawah',
        element: <TeacherTilawah />,
      },
      {
        path: 'murojaah',
        element: <TeacherMurojaah />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);

export default Router;
