import DefaultLayout from 'layouts/DefaultLayout';
import { HomePage, Login } from 'pages';
import { Sidebar } from 'lucide-react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import ProtectedUserRoute from 'routes/ProtectedUserRoutes';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/',
    element: (
      <ProtectedUserRoute>
        <DefaultLayout />
      </ProtectedUserRoute>
    ),
    children: [
      { path: '/', element: <HomePage /> },
      // { path: '/users', element: <AdminUsers /> },
      // { path: '/requests', element: <Request /> },
      // { path: '/deleted-requests', element: <DeletedRequests /> },
      // { path: '/translations', element: <Translations /> },
      // { path: '/profile', element: <Profile /> },
      // { path: '/logs', element: <Logs /> },
      // { path: '/add-requests', element: <TableDetail /> },
      // { path: '/request-detail/:id', element: <TableDetail /> },
      // { path: '/statuses', element: <RequestStatusPage /> },
    ],
  },
]);
