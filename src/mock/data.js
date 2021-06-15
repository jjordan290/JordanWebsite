import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to My Site!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jordan Johnson',
  subtitle: 'CS Student Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.jpg',
  paragraphOne: 'I have always had a passion for Computer Science. I am currently attending NSU and i am pursuing my bachelors degree in Computer Science. ',
  paragraphTwo: 'My programming experience involves programming in HTML, Javascript, Java, Python, C#, and C++',
  paragraphThree: 'One of my goals include becoming a software developer one day and this website is the 1st step. See below the projects i have worked on so far!',
  resume: 'file:///C:/Users/Jordan%20Johnson/Desktop/Jordan.%20J%20resume%202021.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '108.jpg',
    title: 'SigmaCats Steamworks(2017-18)',
    info: 'Software Programmer',
    info2: 'Worked on button controls, programmed and assigned motor controls for robot functionally, maintained robot calibration while robot performs certain actions. In this game, teams can acquire points in three different ways. One way is though assembling gears on the airship, which are the two large structures in the middle of each alliance side. Two other ways are through throwing balls, called fuel, into either the low or high portion of the boiler. ',
    url: 'https://www.youtube.com/watch?v=riYTornhZ3w&t=6s',
    repo: 'https://github.com/SigmaCat-Robotics/SigmaCode2017', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'kiwi-sprite.png',
    title: 'KiwiShift',
    info: 'Level Designer, Programmer',
    info2: 'A 2D platformer developed using Unity; Kiwi Shift features a kiwi with a tophat who travels through perilous realms in search for its missing sack of Kiwis that were stolen by the mischevious minx. ',
    url: '',
    repo: 'https://github.com/StamatisP/kiwishift', // if no repo, the button will not show up
  },
 
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jjordan290@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [

    {
      id: nanoid(),
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jjordan290/',
    },
    {
      id: nanoid(),
      name: 'Github',
      url: 'https://github.com/jjordan290',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
