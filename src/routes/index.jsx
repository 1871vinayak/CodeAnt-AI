import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import SignIn from '../components/Auth/SignIn';
import Dashboard from '../components/Desktop/Dashboard';
import NotFound from '../components/NotFound';
import UnderDevelopment from '../components/UnderDevelopment';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'code-review',
        element: <UnderDevelopment pageName="AI Code Review" />,
      },
      {
        path: 'security',
        element: <UnderDevelopment pageName="Cloud Security" />,
      },
      {
        path: 'help',
        element: <UnderDevelopment pageName="How to Use" />,
      },
      {
        path: 'settings',
        element: <UnderDevelopment pageName="Settings" />,
      },
      {
        path: 'support',
        element: <UnderDevelopment pageName="Support" />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);