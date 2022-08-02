import * as Yup from 'yup';
import { Field, Form, FormikHelpers, FormikProvider, useFormik } from "formik";
import { TextInput } from "src/components/@formik-components";
import { Grid, Button } from 'src/imports/mui';
import { Permission, PermissionDTO } from 'src/challenge.types';
import { regExpAlphabetic, regExpPhoneNumbers } from 'src/utils/regExp';
import { Dispatch, SetStateAction } from 'react';
import permissionService from 'src/services/permission.service';

interface PermissionFormProps {
    permission?: Permission;
    setPermissionSelected: Dispatch<SetStateAction<Permission | undefined>>;
    setPermissions: Dispatch<SetStateAction<Permission[]>>;
}

export default function PermissionForm({ permission, setPermissions, setPermissionSelected }: PermissionFormProps) {
    // formik
    const handleSubmitFormik = async (values: Permission, { resetForm }: FormikHelpers<Permission>) => {
        const permissionDTO: PermissionDTO = {
            EmployeeName: values.employeeName,
            EmployeeLastName: values.employeeLastName,
            PermissionTypeId: values.permissionTypeId,
            PermissionDate: values.permissionDate,
            Id: permission?.id
        }
        let res: any;
        if (permission) {
            res = await permissionService.Update(permissionDTO);
        } else {
            res = await permissionService.Create(permissionDTO);        
        }
        resetForm();
        setPermissions(prev => {
            if (permission){
                return prev.filter(p => p.id !== permission?.id).concat([res]);
            } else {
                return prev?.concat([res]);
            }            
        });        
    }
    const formikValidations = Yup.object().shape({
        employeeName: Yup.string().matches(regExpAlphabetic, 'Only chars alphabetic').max(50, 'Too long').required('Name Required'),
        employeeLastName: Yup.string().matches(regExpAlphabetic, 'Only chars alphabetic').max(50, 'Too long').required('Last Name Required'),
        permissionTypeId: Yup.string().matches(regExpPhoneNumbers, 'Only numbers').max(15, 'Too long').required('Permission Type Required'),
        permissionDate: Yup.date().required('Permission Date Requerido'),
    });
    const formik = useFormik({
        initialValues: {
            employeeName: permission?.employeeName || '',
            employeeLastName: permission?.employeeLastName || '',
            permissionTypeId: permission?.permissionTypeId,
            permissionDate: permission?.permissionDate || ''
        },
        validationSchema: formikValidations,
        onSubmit: handleSubmitFormik,
        enableReinitialize: true,
    });
    const { values } = formik;
    return (
        <FormikProvider value={formik}>
            <Form>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Field
                            name="employeeName"
                            label='Employee Name'
                            component={TextInput}
                            values={values.employeeName}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            name="employeeLastName"
                            label='Employee Last Name'
                            component={TextInput}
                            values={values.employeeLastName}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            name="permissionTypeId"
                            label='permissionTypeId'
                            component={TextInput}
                            values={values.permissionTypeId}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            name="permissionDate"
                            label='Permission Date'
                            component={TextInput}
                            values={values.permissionDate}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type='submit' variant='contained' sx={{ minWidth: '200px' }}>Save</Button>
                        <Button type='button' variant='outlined' onClick={() => setPermissionSelected(undefined)}>Cancel</Button>
                    </Grid>
                </Grid>
            </Form>
        </FormikProvider>
    )
}
