import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Auth from './Auth/Auth';
import Inbox from './Inbox/Inbox';
import Privacy from './Privacy/Privacy';
import Terms from './Terms/Terms';
import Bookmarks from './Bookmarks/Bookmarks';
import Profile from './Profile/Profile';
import Users from './Users/Users';
import Listings from './Listings/Listings';
import Search from './Search/Search';
import Api from '../api';

export const routes = {
  home: '/',
  login: '/auth/login',
  register: '/auth/register',
  auth: '/auth',
  inbox: '/inbox',
  sell: '/sell',
  favorite: '/favorite',
  privacy: '/privacy',
  terms: './terms',
  bookmarks: './bookmarks',
  profile: './profile',
  users: './users/:id',
  listings: './listings/:id',
  search: './search',
};

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.auth} component={Auth} />
        <PrivateRoute path={routes.inbox} component={Inbox} />
        <Route path={routes.privacy} component={Privacy} />
        <Route path={routes.terms} component={Terms} />
        <Route path={routes.bookmarks} component={Bookmarks} />
        <Route path={routes.profile} component={Profile} />
        <Route path={routes.users} component={Users} />
        <Route path={routes.listings} component={Listings} />
        <Route path={routes.search} component={Search} />
        <Auth />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

function PrivateRoute({component: Component, ...rest}) {
  return(
    <Route
      {...rest}
      render={(props) =>
        Api.Auth.isLoggedIn
          ? <Component {...props}/>
          : <Redirect to={routes.login}/>
      }
    />
  )
}

export default Router;
