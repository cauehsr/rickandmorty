import Home from 'javascripts/pages/home';
import Contact from 'javascripts/pages/contact';
import About from 'javascripts/pages/about';

const Routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/contato',
    component: Contact,
    exact: true
  },
  {
    path: '/sobre',
    component: About,
    exact: true
  },
];

export default Routes;
