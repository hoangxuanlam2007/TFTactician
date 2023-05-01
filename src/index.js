import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/Root";
import Champions from "./views/Database/Contents/Champions";
import ChampionsStats from "./views/Database/Contents/ChampionsStats";
import Origins from "./views/Database/Contents/Origins";
import Classes from "./views/Database/Contents/Classes";
import "./firebase/main";
import { AuthProvider } from "contexts/AuthContext";
import { DataProvider } from "contexts/DataContext";
import { loader as teamLoader } from "views/TeamBuilder";
import ChampionDetail from "views/ChampionDetail";
import ScrollToTop from "components/common/ScrollToTop";

const DatabaseLayout = lazy(() => import("./views/Database/DatabaseLayout"));
const TeamComps = lazy(() => import("views/TeamComps"));
const TeamBuilder = lazy(() => import("views/TeamBuilder"));
const ItemBuilder = lazy(() => import("./views/ItemBuilder"));

const ChampionsView = lazy(() => import("views/Champions"));
const Home = lazy(() => import("views/Home"));
const PrivacyPolicy = lazy(() => import("views/PrivacyPolicy"));
const UpdateNotes = lazy(() => import("views/UpdateNotes"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "teambuilder",
        element: (
          <Suspense>
            <TeamBuilder />
          </Suspense>
        ),
      },
      {
        path: "privacy-policy",
        element: (
        <Suspense>
          <PrivacyPolicy />
        </Suspense>
        )
      },
      {
        path: "update-notes",
        element: (
        <Suspense>
          <UpdateNotes />
        </Suspense>
        )
      },
      {
        path: "teambuilder/:teamId",
        element: <TeamBuilder />,
        loader: teamLoader,
      },
      {
        path: "database/*",
        element: (
          <Suspense>
            <DatabaseLayout />
          </Suspense>
        ),
        children: [
          {
            name: "champion",
            path: "champions",
            element: <Champions />,
          },
          {
            path: "championstats",
            element: <ChampionsStats />,
          },
          {
            path: "origins",
            element: <Origins />,
          },
          {
            path: "classes",
            element: <Classes />,
          },
          {
            path: "rolling",
            element: <div>rolling</div>,
          },
          {
            path: "augments",
            element: <div>augments</div>,
          },
        ],
      },
      {
        path: "itembuilder",
        element: (
          <ScrollToTop>
            <Suspense>
              <ItemBuilder />
            </Suspense>
          </ScrollToTop>
        ),
        errorElement: <div>item not found</div>,
      },
      {
        path: "teamcomps",
        element: (
          <Suspense>
            <TeamComps />
          </Suspense>
        ),
      },
      {
        path: "champions",
        element: (
          <Suspense>
            <ChampionsView />
          </Suspense>
        ),
      },
      {
        path: "champions/:name",
        element: (
          <ScrollToTop>
            <ChampionDetail />
          </ScrollToTop>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
