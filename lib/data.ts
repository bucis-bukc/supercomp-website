export const techCompetitionsData = [
  {
    category: "Tech",
    name: "Web Development",
    shortDescription: "Build a web application from scratch.",
    description:
      "Participants will build a fully functional web application using modern web technologies.",
    minMembers: 1,
    maxMembers: 3,
    rulebookUrl: "https://example.com/web-dev",
    href: "/competitions/web-development",
    color: "fuchsia",
    image: "/assets/images/pill.png",
  },
  {
    category: "Tech",
    name: "Code In the Dark",
    shortDescription: "Develop a mobile application.",
    description:
      "Participants will create a mobile app for either Android or iOS platforms.",
    minMembers: 1,
    maxMembers: 4,
    rulebookUrl:
      "https://drive.google.com/file/d/1eMCJHsnEe5cFhHTGPd-J9XLUYyge6rW8/view?usp=sharing",
    href: "/competitions/app-development",
    color: "lime",
    image: "/assets/images/hemisphere.png",
  },
  {
    category: "Tech",
    name: "Machine Learning",
    shortDescription: "Create visual representations of data.",
    description:
      "Participants will use Machine Learning to create insightful visual representations of complex data sets.",
    minMembers: 1,
    maxMembers: 3,
    rulebookUrl:
      "https://drive.google.com/file/d/1JlN_oHLj9yUc0mf20OZ5PDh3CFKA9Iw5/view?usp=sharing",
    href: "/competitions/data-visualization",
    color: "cyan",
    image: "/assets/images/torus.png",
  },
  {
    category: "Tech",
    name: "SQL Query",
    shortDescription: "Write efficient SQL queries.",
    description:
      "Participants will solve problems by writing efficient SQL queries to retrieve and manipulate data.",
    minMembers: 1,
    maxMembers: 2,
    rulebookUrl:
      "https://drive.google.com/file/d/1OKJ4L0H0x2UeGvZMDqbMn6G_TK-r8kjJ/view?usp=drivesdk",
    href: "/competitions/sql-query",
    color: "violet",
    image: "/assets/images/torus-knot.png",
  },
  {
    category: "Tech",
    name: "Pseudocode",
    shortDescription: "Write pseudocode for given problems.",
    description:
      "Participants will write pseudocode to solve algorithmic problems, focusing on logic and structure.",
    minMembers: 1,
    maxMembers: 2,
    rulebookUrl:
      "https://drive.google.com/file/d/1zCyUFfof0p_JJIkYIwZ8QL-N4lvgDzYV/view?usp=sharing",
    href: "/competitions/pseudocode",
    color: "cyan",
    image: "/assets/images/cube.png",
  },
  {
    category: "Tech",
    name: "UI/UX",
    shortDescription: "Design user interfaces and experiences.",
    description:
      "Participants will design user interfaces and experiences that are both functional and aesthetically pleasing.",
    minMembers: 1,
    maxMembers: 3,
    rulebookUrl:
      "https://drive.google.com/file/d/1MoyFENOPBW8n40-s-Ye6z8uQv5uHqQye/view?usp=drivesdk",
    href: "/competitions/ui-ux",
    color: "lime",
    image: "/assets/images/cone.png",
  },
  {
    category: "Tech",
    name: "Speed Debugging",
    shortDescription: "Debug code as quickly as possible.",
    description:
      "Participants will be given buggy code and must find and fix the errors as quickly as possible.",
    minMembers: 1,
    maxMembers: 2,
    rulebookUrl:
      "https://drive.google.com/file/d/10gQNVbZkswFYrDVmXljjH448SmoHmPx5/view?usp=sharing",
    href: "/competitions/speed-debugging",
    color: "violet",
    image: "/assets/images/cylinder.png",
  },
];

export const nonTechCompetitionsData = [
  {
    category: "Non-Tech",
    name: "Quiz Competition",
    shortDescription: "Test your knowledge across various topics.",
    description:
      "Participants will compete in a quiz covering a wide range of topics. The team with the highest score wins.",
    minMembers: 1,
    maxMembers: 4,
    rulebookUrl: "https://example.com/quiz",
    href: "/competitions/quiz",
    color: "blue",
    image: "/assets/images/cylinder-blue.png",
  },
  {
    category: "Non-Tech",
    name: "Essay Writing Competition",
    shortDescription: "Showcase your writing skills.",
    description:
      "Participants will write essays on given topics. The best essays will be judged based on creativity, coherence, and grammar.",
    minMembers: 1,
    maxMembers: 1,
    rulebookUrl: "https://example.com/essay-writing",
    href: "/competitions/essay-writing",
    color: "fuchsia",
    image: "/assets/images/cog.png",
  },
  {
    category: "Non-Tech",
    name: "CS 1.6 Gaming Competition",
    shortDescription: "Compete in the classic Counter-Strike 1.6.",
    description:
      "Teams will compete in Counter-Strike 1.6 matches. The team that wins the most rounds will be declared the winner.",
    minMembers: 5,
    maxMembers: 5,
    rulebookUrl: "https://example.com/cs-1-6",
    href: "/competitions/cs-1-6",
    color: "lime",
    image: "/assets/images/torus-blue.png",
  },
  {
    category: "Non-Tech",
    name: "FIFA Competition",
    shortDescription: "Show your skills in FIFA.",
    description:
      "Participants will compete in FIFA matches. The player with the highest score will win the competition.",
    minMembers: 1,
    maxMembers: 1,
    rulebookUrl: "https://example.com/fifa",
    href: "/competitions/fifa",
    color: "cyan",
    image: "/assets/images/half-torus.png",
  },
  {
    category: "Non-Tech",
    name: "TEKKEN Competition",
    shortDescription: "Fight your way to the top in TEKKEN.",
    description:
      "Participants will compete in TEKKEN matches. The player who wins the most rounds will be declared the champion.",
    minMembers: 1,
    maxMembers: 1,
    rulebookUrl: "https://example.com/tekken",
    href: "/competitions/tekken",
    color: "violet",
    image: "/assets/images/cube-helix 1.png",
  },
];

export const comeptitionNames = [
  // Tech Competitions
  { name: "Web Development", maxMembers: 2 },
  { name: "App Development", maxMembers: 2 },
  { name: "Machine Learning", maxMembers: 3 },
  { name: "SQL Query", maxMembers: 2 },
  { name: "Pseudocode", maxMembers: 2 },
  { name: "UI/UX", maxMembers: 3 },
  { name: "Speed Debugging", maxMembers: 2 },
  // Non-Tech Competitions
  { name: "Quiz Competition", maxMembers: 2 },
  { name: "Essay Writing Competition", maxMembers: 1 },
  { name: "CS 1.6 Gaming Competition", maxMembers: 2 },
  { name: "FIFA Competition", maxMembers: 1 },
  { name: "TEKKEN Competition", maxMembers: 1 },
];

export const heroTagLine =
  "An exciting event for computer science students to showcase their skills and compete in various competitions.";

export const techCompetitionsHeading =
  "Showcase your skills in technical competitions!";
export const nontechCompetitionsHeading =
  "Get ready for the General Competitions!";

export const ctaText =
  "Register now in your desired competition and get a chance to showcase your skills in your domain and dominate the competition and get a chance to win exciting prizes.";

export const footerText1 =
  "Supercomp is an annual event for science and technical students who loves code.";
export const footerText2 =
  "Participate in various competitions to showcase your skills and talents. Join us to experience the excitement and challenge yourself in a competitive environment.";

export const registerText =
  "An exciting event for computer science students to showcase their skills and compete in various competitions.";

export const ambassadorText =
  "An exciting event for computer science students to showcase their skills and compete in various competitions.";

export const ambassadorPara1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique, odio a ultrices ultricies, metus lorem consectetur purus, eget efficitur felis libero at mi. Nulla facilisi.";

export const ambassadorPara2 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique, odio a ultrices ultricies, metus lorem consectetur purus, eget efficitur felis libero at mi. Nulla facilisi.";
