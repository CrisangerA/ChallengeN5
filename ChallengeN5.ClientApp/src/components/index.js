import { lazy } from "react";

const PermissionList = lazy(() => import('./PermissionList'));
const PermissionForm = lazy(() => import('./PermissionForm'));

export { PermissionList, PermissionForm }
