import { createBrowserRouter } from 'react-router-dom';
import ForgotPassword from '../pages/ForgotPassword';
import Index from '../pages/Index';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Class from '../pages/admin/Class';
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
import { Profile as ProfileParent } from '../pages/parent/Profile';
import * as ParentRote from '../pages/parent/Rote/All';
import { Tilawah as ParentTilawah } from '../pages/parent/Tilawah';
import { Murojaah as TeacherMurojaah } from '../pages/teacher/Murojaah';
import { Profile as ProfileTeacher } from '../pages/teacher/Profile';
import Quran from '../pages/teacher/Quran';
import RoteStudent from '../pages/teacher/RoteStudent';
import { Student as StudentsinTeacher } from '../pages/teacher/Student';
import { Tilawah as TeacherTilawah } from '../pages/teacher/Tilawah';
import CreateMurojaah from '../pages/teacher/forms/CreateMurojaah';
import { default as CreateRote } from '../pages/teacher/forms/CreateRote';
import CreateTilawah from '../pages/teacher/forms/CreateTilawah';
import EditMurojaah from '../pages/teacher/forms/EditMurojaah';
import EditRote from '../pages/teacher/forms/EditRote';
import EditTilawah from '../pages/teacher/forms/EditTilawah';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'forgot',
    element: <ForgotPassword />,
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
        element: <ProfileParent />,
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
            path: 'create/murojaah',
            element: <CreateMurojaah />,
          },
          {
            path: 'create/tilawah',
            element: <CreateTilawah />,
          },
          {
            path: 'create/penjadwalan',
            element: <CreateRote />,
          },
          {
            path: 'edit/tilawah/:id',
            element: <EditTilawah />,
          },
          {
            path: 'edit/hafalan/:id',
            element: <EditRote />,
          },
          {
            path: 'edit/murojaah/:id',
            element: <EditMurojaah />,
          },
        ],
      },
      {
        path: 'rote/student/:id',
        element: <RoteStudent />,
      },
      {
        path: 'rote',
        element: <Quran />,
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
        element: <ProfileTeacher />,
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
            path: 'teacher/:id',
            element: <EditTeacher />,
          },
          {
            path: 'parent/:id',
            element: <EditParent />,
          },
          {
            path: 'student/:id',
            element: <EditStudent />,
          },
        ],
      },
      {
        path: 'class',
        element: <Class />,
      },
    ],
  },
]);

export default Router;
