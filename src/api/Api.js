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
  _user: null,

  get isLoggedIn() {
    return !!this._token;
  },

  setToken(token) {
    this._token = token;
    this._storeToken(token);
    this._setTokenToAxios(token);
  },

  setUser(user) {
    this._user = user;
    this._storeUser(user);
  },

  init() {
    try {
      const token = window.localStorage.getItem('token');
      const user = window.localStorage.getItem('user');
      this._token = JSON.parse(token);
      this._user = JSON.parse(user);
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

  _storeUser() {
    try {
      window.localStorage.setItem('user', JSON.stringify(this._user));
    } catch (err) {
      console.log(err)
    }
  },

  _setTokenToAxios(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
};

export const Viewer = {
  get() {
    return axios.get(urls.getViewer)
  }
};

export const Products = {
  getLatest() {
    return axios.get(urls.productsLatest)
  },
  get(id) {
    return axios.get(`${urls.products}/${id}`);
  },
  addProduct(body) {
      return axios.post(urls.products, body);
  }
};

export function init() {
  Auth.init();
}
