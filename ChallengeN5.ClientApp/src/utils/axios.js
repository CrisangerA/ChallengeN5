import axios from 'axios';
// ----------------------------------------------------------------------

const instance = axios.create();

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

instance.interceptors.request.use(async config => {
  const session = { accessToken: 'await getSession(config);' }
  config.headers.Authorization = `Bearer ${session.accessToken}`;
  return config;
});
const instanceUnidentified = axios.create();
export { instanceUnidentified };
export default instance;
