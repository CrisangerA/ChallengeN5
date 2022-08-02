import API_ROUTES from 'src/config/api.routes';
import axios from 'src/utils/axios';

class AxiosService {

  _getRoute = route => `${API_ROUTES.root}${route}`;

  _headers = () => {
    return {
      'content-type': 'application/json',
      Accept: 'application/json',
    }
  }
  _successCallback = resolve => response => {
    //if (response.data) resolve(response.data);
    resolve(response.data ?? response);
  };
  _rejectCallback = reject => err => {    
    const error = {};
    if (err.response?.status === 400) error.message = 'Error connecting to server';
    if (err.response?.status === 401) error.message = 'Unauthorized';
    if (err.response?.status === 403) error.message = 'Forbiden';
    if (err.response?.status === 500) error.message = 'Internal server error';
    if (typeof err.response?.data === 'string' && err.response.data !== '') error.message = err.response.data;
    if (typeof err.response?.data?.message === 'string' && err.response.data.message !== '') error.message = err.response.data.message;
    if(typeof err === 'string') error.message = err;
    reject(error);
  };

  get = route => new Promise(
    (resolve, reject) => axios.get(this._getRoute(route), { headers: this._headers() })
      .then(this._successCallback(resolve), this._rejectCallback(reject))
  )
  post = (route, body) => new Promise(
    (resolve, reject) => axios.post(this._getRoute(route), body, { headers: this._headers() })
      .then(this._successCallback(resolve), this._rejectCallback(reject))
  );
  put = (route, body) => new Promise(
    (resolve, reject) => axios.put(this._getRoute(route), body, { headers: this._headers() })
      .then(this._successCallback(resolve), this._rejectCallback(reject))
  );
  delete = route => new Promise(
    (resolve, reject) => axios.delete(this._getRoute(route), { headers: this._headers() })
      .then(this._successCallback(resolve), this._rejectCallback(reject))
  );
}

const axiosService = new AxiosService();
export default axiosService;