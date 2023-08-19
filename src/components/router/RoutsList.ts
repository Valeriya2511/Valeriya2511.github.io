interface PageProps {
  path: string;
  page: string;
  activeLink: boolean;
}

export const privatRoutesList: Array<PageProps> = [
  {path: '/', page : 'SignLoginPage', activeLink : false},
  {path:'/about', page : 'AboutPage', activeLink : false},
  {path:'/main', page : 'MainPage', activeLink : false},
  {path:'/registration', page : 'RegistrationPage', activeLink : false},
  {path:'/products', page : 'ProductsPage', activeLink : false},
  {path:'/productItem1111', page : 'ProductItemPage', activeLink : false},
  {path:'/user', page : 'UserPage', activeLink : false},
  {path:'/basket', page : 'BasketPage', activeLink : false}
]

export const publicRoutesList: Array <PageProps> = [
  {path: '/', page : 'SignLoginPage', activeLink : false},
  {path:'/main', page : 'MainPage', activeLink : false},
  {path:'/registration', page : 'RegistrationPage', activeLink : false},
]