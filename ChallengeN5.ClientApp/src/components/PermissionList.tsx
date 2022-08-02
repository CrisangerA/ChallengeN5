import { Table, TableBody, TableCell, TableHead, TableRow, Typography, Button } from 'src/imports/mui';
import { Permission } from 'src/challenge.types';
import { Dispatch, SetStateAction } from 'react';

interface PermissionListProps {
    permissions: Permission[];
    setPermissionSelected: Dispatch<SetStateAction<Permission | undefined>>;
}

export default function PermissionList({ permissions, setPermissionSelected }: PermissionListProps) {
    if (permissions.length === 0) return <Typography>Not records found</Typography>
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Employee Name
                    </TableCell>
                    <TableCell>
                        Employee Last Name
                    </TableCell>
                    <TableCell>
                        Permission Type
                    </TableCell>
                    <TableCell>
                        Permission Date
                    </TableCell>
                    <TableCell>
                        Options
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    permissions.map((permission) => (
                        <TableRow key={'permission-' + permission.id}>
                            <TableCell>
                                {permission.employeeName}
                            </TableCell>
                            <TableCell>
                                {permission.employeeLastName}
                            </TableCell>
                            <TableCell>
                                {permission.permissionTypeId}
                            </TableCell>
                            <TableCell>
                                {permission.permissionDate}
                            </TableCell>
                            <TableCell>
                                <Button variant='contained' onClick={() => setPermissionSelected(permission)}>Edit</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
