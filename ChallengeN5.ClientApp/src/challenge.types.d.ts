export interface Permission {
  id?: number;
  employeeName: string;
  employeeLastName: string;
  permissionTypeId?: number;
  permissionDate: string;
}

export interface PermissionDTO {
  Id?: number;
  EmployeeName: string;
  EmployeeLastName: string;
  PermissionTypeId?: number;
  PermissionDate: string;
}
