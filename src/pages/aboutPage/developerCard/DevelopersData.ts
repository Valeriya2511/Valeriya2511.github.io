export interface iDeveloper {
  name: string;
  role: string;
  image: string;
  contribution: string;
  colaborationMethod: string;
  shortBio: string;
  gitHub: string;
}
export const DevelopersData: iDeveloper[] = [
  {
    name: 'Valeriya Tikhonova (Valeriya2511)',
    role: 'Team lead',
    image: './Valery.jpg',
    contribution: 'MainPage, Footer, Cart, API commercetools',
    colaborationMethod: 'Scrum 2 weeks, 4sprints. Github, Discord, Trello, Figma, Postman',
    shortBio: `I am 29 years old. I started studying at RS School! I worked as an accountant. 
    I don't have any programming experience yet, but I want to become a front-end developer. 
    I like to learn new things and strive for the goal. I also love coffee, cats and playing ps4.`,
    gitHub: 'https://github.com/Valeriya2511',
  },
  {
    name: 'Alexandr Kuralenko (AlexDrags)',
    role: 'Developer',
    image: './Alexandr.jpg',
    contribution: `Components : Login / SugnUp form, ProductsPage
    Custom hooks: useProducts, useAuthorization;
    Application architecture + EcommerceApi;`,
    colaborationMethod: 'Scrum 2 weeks, 4sprints. Github, Discord, Trello, Figma, Postman',
    shortBio: `Graduated from Ivanovo State University of Trade and Economics - tourism manager;
    Interactive online courses: Profession Front-end Developer;
    I lead a healthy lifestyle, I like to visit new countries and learn something new.`,
    gitHub: 'https://github.com/AlexDrags',
  },
  {
    name: 'Vasiliy Kapustin (Kap66/Error404-2)',
    role: 'Developer',
    image: './Vasiliy.jpg',
    contribution: 'Eslint, Navigation, Catalog, ProductCard, PasswordFlow, Basket, About',
    colaborationMethod: 'Scrum 2 weeks, 4sprints. Github, Discord, Trello, Figma, UML with diagrams.net',
    shortBio: `Graduated from St. Petersburg University of Economics and Finance. 
    I am looking for interesting projects at the intersection of IT, Economics, Management, Communications.`,
    gitHub: 'https://github.com/Error404-2',
  },
];
