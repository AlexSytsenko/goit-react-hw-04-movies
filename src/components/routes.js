import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: HomePage,
  },
  {
    path: '/movies',
    label: 'Movies',
    component: MoviesPage,
  },
];

/* {
       <a href="/products">Products</a>
      <a href="/product/3456">Product Detail</a>
      <a href="/cart">Cart</a>
      <a href="/order">Order</a>
      <a href="/profile">Profile</a>
      <a href="/contacts">Contacts</a>
      <a href="/counters">Counters</a> 
    }*/
