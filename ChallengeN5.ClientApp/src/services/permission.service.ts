import { PermissionDTO } from "src/challenge.types";
import API_ROUTES from "src/config/api.routes";
import axiosService from "./axios.service";

class PermissionService {
    GetAll = async () => axiosService.get(API_ROUTES.permissions.list)
    Create = async (permission: PermissionDTO) => axiosService.post(API_ROUTES.permissions.create, permission)
    Update = async (permission: PermissionDTO) => axiosService.put(API_ROUTES.permissions.edit, permission)
}

const permissionService = new PermissionService();
export default permissionService;
