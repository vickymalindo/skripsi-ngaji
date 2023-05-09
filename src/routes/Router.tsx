import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import Murojaah from '../pages/parent/Murojaah';
import Profile from '../pages/parent/Profile';
import * as ParentRote from '../pages/parent/Rote/All';
import Tilawah from '../pages/parent/Tilawah';
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
        element: <Murojaah />,
      },
      {
        path: 'tilawah',
        element: <Tilawah />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);

export default Router;
