import React from 'react';
import MainPage from './pages/main';
import AboutPage from './pages/about-page';
import Services from './pages/services';
import Products from './pages/products';
import ProductCard from './pages/product-card';
import Contact from './pages/contact';
import ShoppingMall from './pages/shopping-mall';
import Business from './pages/business';
import PrivacyPolicy from './pages/privacy-policy';
import NotFound from './pages/not-found';

/* eslint-disable react/display-name */
const Router = [
  {
    path: '/',
    name: 'main',
    component: (props) => <MainPage {...props} />,
  }, {
    path: '/about',
    name: 'about',
    component: (props) => <AboutPage {...props} />,
  }, {
    path: '/services',
    name: 'services',
    component: (props) => <Services {...props} />,
  }, {
    path: '/products',
    name: 'products',
    component: (props) => <Products {...props} />,
  }, {
    path: '/products/:name',
    name: 'product-card',
    component: (props) => <ProductCard {...props} />,
  }, {
    path: '/contact',
    name: 'contact',
    component: (props) => <Contact {...props} />,
  }, {
    path: '/shopping-mall',
    name: 'shopping-mall',
    component: (props) => <ShoppingMall {...props} />,
  }, {
    path: '/business',
    name: 'business',
    component: (props) => <Business {...props} />,
  }, {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: (props) => <PrivacyPolicy {...props} />,
  }, {
    path: '',
    name: 'notFound',
    component: () => <NotFound />,
  },
];
/* eslint-enable */

export default Router;
