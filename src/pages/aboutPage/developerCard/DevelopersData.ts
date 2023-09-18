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
    name: 'FIO (Valeriya2511)',
    role: 'string',
    image: './Developer',
    contribution: 'string',
    colaborationMethod: 'string',
    shortBio: 'string',
    gitHub: 'https://github.com/Valeriya2511',
  },
  {
    name: 'FIO (AlexDrags)',
    role: 'string',
    image: 'string',
    contribution: 'string',
    colaborationMethod: 'string',
    shortBio: 'string',
    gitHub: 'https://github.com/AlexDrags',
  },
  {
    name: 'Kapustin Vasiliy (Kap66/Error404-2)',
    role: 'Developer',
    image: './Vasiliy.jpg',
    contribution: 'Eslint, Navigation, Catalog, ProductCard, PasswordFlow, Basket, About',
    colaborationMethod: 'Scrum 2 weeks, 4sprints. Github, Discord, Trello, Figma, UML with diagrams.net',
    shortBio: `Graduated from St. Petersburg University of Economics and Finance. 
    I am looking for interesting projects at the intersection of IT, Economics, Management, Communications.`,
    gitHub: 'https://github.com/Error404-2',
  },
];
