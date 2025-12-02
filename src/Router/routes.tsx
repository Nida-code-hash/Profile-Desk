import AppLayout from "../components/AppLayout/AppLayout";
import MetaData from "../components/MetaData/MetaData";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import ProtectedRoute from "./ProtectedRouteHandler";
// import PublicRoute from "./PublicRouteHander";

const router = [

  {
    path: 'login',
    element: (
      <>
          <Login />
          <MetaData title="Login" />
      </>
    )
  },
  {
    path: '/',
    element:
      <AppLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        )
      },
      {
        path: '/profile',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        )
      },
    ]
  }

];

export default router;