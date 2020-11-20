import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PageHowItWorks from './Pages/PageHowItWorks';
import PageHome from './Pages/PageHome';
import PageNewWishList from './Pages/PageNewWishList';
import PageEditWishList from './Pages/PageEditWishList';
import PageAuth from './Pages/PageAuth';

export const PAGES = {
  wishList: {
    id: 'wishList',
    title: 'Главная',
    path: '/',
  },
  howItWorks: {
    id: 'howItWorks',
    title: 'Как это работает',
    path: '/how_it_works.html',
  },
  newWishList: {
    id: 'newWishList',
    title: 'Создать свой WishList',
    path: '/wishlists',
  },
  editWishList: {
    id: 'editWishList',
    title: 'Редактирование WishList',
    path: '/wishlists/:wishListId',
  },
  pageAuth: {
    id: 'pageAuth',
    title: 'Авторизация',
    path: '/',
  },
};

export const AppRouter = (isAuthenticated) => {
  console.log('123', isAuthenticated);
  if (isAuthenticated) {
    return (
      <Switch>
        <Route exact path={PAGES.howItWorks.path}>
          <PageHowItWorks />
        </Route>
        <Route exact path={PAGES.wishList.path}>
          <PageHome />
        </Route>
        <Route exact path={PAGES.newWishList.path}>
          <PageNewWishList />
        </Route>
        <Route exact path={PAGES.editWishList.path}>
          <PageEditWishList />
        </Route>
        {/*       <Redirect to={PAGES.wishList.path} /> */}
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path={PAGES.pageAuth.path} exact>
        <PageAuth />
      </Route>
<<<<<<< HEAD
      {/* <Redirect to={PAGES.wishList.path} /> */}
=======
      {/*<Redirect to={PAGES.wishList.path} />*/}
>>>>>>> 9ba6e28fefb24d90b036b7f98ecd4322d1c05b09
    </Switch>
  );
};
