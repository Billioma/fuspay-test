import { lazy } from "react";
import WithSuspense from "../components/common/WithSuspense";
import { PATHS } from "./constants";
import { Navigate } from "react-router-dom";
import { AppRoute } from "../utils/types";

const { OVERVIEW } = PATHS;

const Overview = WithSuspense(
  lazy(() => import("../pages/Overview")))

export const ROUTES: AppRoute[] = [
  { path: OVERVIEW, element: <Overview /> },
  { path: "*", element: <Navigate to="/" replace /> },
];
