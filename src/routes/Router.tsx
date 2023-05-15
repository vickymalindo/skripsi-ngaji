import { createBrowserRouter } from 'react-router-dom';
import Index from '../pages/Index';
import Main from '../pages/Main';
import { Parent as CreateParent } from '../pages/admin/create/Parent';
import { Student as CreateStudent } from '../pages/admin/create/Student';
import { Teacher as CreateTeacher } from '../pages/admin/create/Teacher';
import { Parent as EditParent } from '../pages/admin/edit/Parent';
import { Student as EditStudent } from '../pages/admin/edit/Student';
import { Teacher as EditTeacher } from '../pages/admin/edit/Teacher';
import { Parent as ParentinAdmin } from '../pages/admin/users/Parent';
import { Student as StudentsinAdmin } from '../pages/admin/users/Student';
import { Teacher as TeacherinAdmin } from '../pages/admin/users/Teacher';
import { Murojaah as ParentMurojaah } from '../pages/parent/Murojaah';
import Profile from '../pages/parent/Profile';
import * as ParentRote from '../pages/parent/Rote/All';
import { Tilawah as ParentTilawah } from '../pages/parent/Tilawah';
import { Murojaah as TeacherMurojaah } from '../pages/teacher/Murojaah';
import QuranRote from '../pages/teacher/QuranRote';
import { Student as StudentsinTeacher } from '../pages/teacher/Student';
import { Tilawah as TeacherTilawah } from '../pages/teacher/Tilawah';
import Create from '../pages/teacher/forms/Create';
import Edit from '../pages/teacher/forms/Edit';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
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
        element: <StudentsinTeacher />,
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
  {
    path: 'admin',
    element: <Main />,
    children: [
      {
        path: 'list',
        children: [
          {
            path: 'students',
            element: <StudentsinAdmin />,
          },
          {
            path: 'parent',
            element: <ParentinAdmin />,
          },
          {
            path: 'teacher',
            element: <TeacherinAdmin />,
          },
        ],
      },
      {
        path: 'create',
        children: [
          {
            path: 'teacher',
            element: <CreateTeacher />,
          },
          {
            path: 'student',
            element: <CreateStudent />,
          },
          {
            path: 'parent',
            element: <CreateParent />,
          },
        ],
      },
      {
        path: 'edit',
        children: [
          {
            path: 'teacher',
            element: <EditTeacher />,
          },
          {
            path: 'parent',
            element: <EditParent />,
          },
          {
            path: 'student',
            element: <EditStudent />,
          },
        ],
      },
    ],
  },
]);

export default Router;
