import axios from 'axios';

const urls = {
  login: '/api/auth/login',
  register: '/api/auth/register',
  getViewer: '/api/account/user',
  productsLatest: '/api/products/latest',
  products: '/api/products',
};

export const Auth = {
  _token: null,

  get isLoggedIn() {
    return !!this._token;
  },

  setToken(token) {
    this._token = token;
    this._storeToken(token);
    this._setTokenToAxios(token);
  },

  init() {
    try {
      const token = window.localStorage.getItem('token');
      this._token = JSON.parse(token);
      this._setTokenToAxios(token);
    } catch (err) {
      console.error(err);
    }
  },

  register(body) {
    return axios.post(urls.register, body);
  },

  login(body) {
    return axios.post(urls.login, body);
  },

  logout() {
    this._token = null;
    try {
      window.localStorage.removeItem('token');
    } catch (err) {
      console.log(err);
    }
  },

  _storeToken() {
    try {
      window.localStorage.setItem('token', JSON.stringify(this._token));
    } catch (err) {
      console.log(err)
    }
  },

  _setTokenToAxios(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    console.log('axios', axios)
  },
};

export const Viewer = {
  get() {
    console.log("axiossss", axios.defaults);
    return axios.get(urls.getViewer)
  }
};

export const Products = {
  getLatest() {
    return axios.get(urls.productsLatest)
  },
  get(id) {
    return axios.get(`${urls.products}/${id}`);
  }
};

export function init() {
  Auth.init();
}
