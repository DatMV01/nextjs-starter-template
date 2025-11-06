// src/config/routes.config.ts

/** Public routes - No login required */
export const publicRoutes = {
  home: "/",
  about: "/about",
  login: "/login",
  register: "/register",
};

/** Protected routes - Login Required */
export const protectedRoutes = {
  dashboard: "/dashboard",
  profile: "/dashboard/profile",
  settings: "/dashboard/settings",
};

/** Admin-only routes */
export const adminRoutes = {
  users: "/admin/users",
  reports: "/admin/reports",
};

 export const appRoutes = {
  ...publicRoutes,
  ...protectedRoutes,
  ...adminRoutes,
};
