// import App from "@/App";
// import DashboardLayout from "@/components/layout/DashboardLayout";
// import About from "@/pages/About";
// import login from "@/pages/Login";
// import Register from "@/pages/Register";
// import { generateRoutes } from "@/utils/generateRoutes";
// import { createBrowserRouter } from "react-router";
// import { ReceiverRoutes } from "./ReceiverRoutes";
// import { withAuth } from "@/utils/withAuth";
// import { Role } from "@/constants/role";
// import Unauthorized from "@/pages/Unauthorize";
// import VerifyUser from "@/pages/VerifyUser";
// import { AdminRoutes } from "./AdminRoutes";
// import { SenderRoutesItems } from "./SenderRoutesItems";

import App from "@/App";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router";


// import App from "@/App";
// import DashboardLayout from "@/components/layout/DashboardLayout";
// import About from "@/pages/About";
// import Login from "@/pages/Login";
// import Register from "@/pages/Register";
// import Verify from "@/pages/Verify";
// import { generateRoutes } from "@/utils/generateRoutes";
// import { createBrowserRouter, Navigate } from "react-router";
// import { adminSidebarItems } from "./adminSidebarItems";
// import { userSidebarItems } from "./userSidebarItems";
// import { withAuth } from "@/utils/withAuth";
// import Unauthorized from "@/pages/Unauthorized";
// import { role } from "@/constants/role";
// import { TRole } from "@/types";
// import Tours from "@/pages/Tours";
// import TourDetails from "@/pages/TourDetails";
// import Booking from "@/pages/Booking";
// import Homepage from "@/pages/Homepage";
// import Success from "@/pages/Payment/Success";
// import Fail from "@/pages/Payment/Fail";


// export const router = createBrowserRouter([
//   {
//     Component: App,
//     path: "/",
//     children: [
//       {
//         Component: About,
//         path: "about",
//       },
//     ],
//   },
//   {
//     Component: login,
//     path: "/login",
//   },
//   {
//     Component: Register,
//     path: "/register",
//   },
//   {
//     Component: VerifyUser,
//     path: "/verify",
//   },
//   {
//     Component: Unauthorized,
//     path: "/unauthorized",
//   },
//   {
//     Component: withAuth(DashboardLayout, Role.SUPER_ADMIN),
//     path: "/dashboard/admin",
//     children: [...generateRoutes(AdminRoutes)],
//   },
//   {
//     Component: withAuth(DashboardLayout, Role.RECEIVER),
//     path: "/dashboard/receiver",
//     children: [...generateRoutes(ReceiverRoutes)],
//   },
//   {
//     Component: withAuth(DashboardLayout, Role.SENDER),
//     path: "/dashboard/sender",
//     children: [...generateRoutes(SenderRoutesItems)],
//   },
// ]);









export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
    //   {
    //     Component: Homepage,
    //     index: true,
    //   },
      {
        Component: About,
        path: "about",
      },
    //   {
    //     Component: Tours,
    //     path: "tours",
    //   },
    //   {
    //     Component: TourDetails,
    //     path: "tours/:id",
    //   },
    //   {
    //     Component: withAuth(Booking),
    //     path: "booking/:id",
    //   },
    ],
  },
//   {
//     Component: withAuth(DashboardLayout, role.superAdmin as TRole),
//     path: "/admin",
//     children: [
//       { index: true, element: <Navigate to="/admin/analytics" /> },
//       ...generateRoutes(adminSidebarItems),
//     ],
//   },
//   {
//     Component: withAuth(DashboardLayout, role.user as TRole),
//     path: "/user",
//     children: [
//       { index: true, element: <Navigate to="/user/bookings" /> },
//       ...generateRoutes(userSidebarItems),
//     ],
//   },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
//   {
//     Component: Verify,
//     path: "/verify",
//   },
//   {
//     Component: Unauthorized,
//     path: "/unauthorized",
//   },
//   {
//     Component: Success,
//     path: "/payment/success",
//   },
//   {
//     Component: Fail,
//     path: "/payment/fail",
//   },
]);