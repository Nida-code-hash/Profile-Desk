import AppLayout from "../components/AppLayout/AppLayout";
import MetaData from "../components/MetaData/MetaData";
import About from "../pages/About/About";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import ProtectedRoute from "./ProtectedRouteHandler";
import PublicRoute from "./PublicRouteHander";

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
    // <ProtectedRoute>
    //   <AppLayout />
    // </ProtectedRoute>,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        )
      }
    ]
  }

];

export default router;







// import AppLayout from "../components/AppLayout/AppLayout";
// import MetaData from "../components/MetaData/MetaData";
// import Dashboard from "../pages/Dashboard/Dashboard";
// import Login from "../pages/Login/Login";
// import Signup from "../pages/Signup/Signup";

// const router = [
//   // 👉 Default Route (Login)
//   {
//     path: "/",
//     element: (
//       <>
//         <Login />
//         <MetaData title="Login" />
//       </>
//     ),
//   },

//   // 👉 Login also has its own route
//   {
//     path: "/login",
//     element: (
//       <>
//         <Login />
//         <MetaData title="Login" />
//       </>
//     ),
//   },
//   {
//     path: "/signup",
//     element: (
//       <>
//         <Signup />
//         <MetaData title="Signup" />
//       </>
//     ),
//   },

//   // 👉 Dashboard under AppLayout
//   {
//     path: "/dashboard",
//     element: <AppLayout />,
//     children: [
//       {
//         index: true,
//         element: <Dashboard />,
//       },
//     ],
//   },
// ];

// export default router;




