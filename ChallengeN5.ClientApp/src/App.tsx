import { Box, Card, CardContent, CardHeader, Grid, Fade, Slide } from 'src/imports/mui';
import { PermissionList, PermissionForm } from 'src/components/index';
import { useEffect, useState } from 'react';
import axiosService from 'src/services/axios.service';
import API_ROUTES from './config/api.routes';
import { Permission } from './challenge.types';
import './App.css';

function App() {
  const [isMounted, setIsMounted] = useState(false);
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [permissionSelected, setPermissionSelected] = useState<Permission>();

  useEffect(() => {
    const handleGetPermissions = async () => {
      const res = await axiosService.get(API_ROUTES.permissions.list);
      if (res) setPermissions(res);
    }
    handleGetPermissions();
    setIsMounted(true)
  }, [])

  return (
    <Box p={0}>
      <Fade in={isMounted} {...(isMounted && { timeout: 1700 })}>
        <div className='App'>          
        </div>
      </Fade>
      <div style={{ height: '45vh'}}></div>
      <Box p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Slide direction='right' in={isMounted} {...(isMounted && { timeout: 1700 })}>
              <Card>
                <CardHeader title='Permission List' />
                <CardContent>
                  <PermissionList permissions={permissions} setPermissionSelected={setPermissionSelected} />
                </CardContent>
              </Card>
            </Slide>
          </Grid>
          <Grid item xs={12} md={6}>
            <Slide direction='left' in={isMounted} {...(isMounted && { timeout: 1700 })}>
              <Card>
                <CardHeader title={(permissionSelected ? 'Update' : 'Create') + ' Permission'} />
                <CardContent>
                  <PermissionForm
                    permission={permissionSelected}
                    setPermissions={setPermissions}
                    setPermissionSelected={setPermissionSelected}
                  />
                </CardContent>
              </Card>
            </Slide>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
