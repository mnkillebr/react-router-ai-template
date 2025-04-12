import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("routes/auth/layout.tsx", [
    route("login", "routes/auth/login.tsx"),
    route("register", "routes/auth/register.tsx"),
  ]),
  layout("routes/dashboard/layout.tsx", [
    route("dashboard", "routes/dashboard/dashboard.tsx"),
  ]),
  route("api/copilotkit", "routes/copilotkit.ts"),
] satisfies RouteConfig;
