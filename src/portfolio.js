/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rajath's Portfolio",
  description: "I am a keen learner, who is always up for a challenge.",
  og: {
    title: "Rajath Jaiprakash Portfolio",
    type: "website",
    url: "https://rajathjn.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Rajath Jaiprakash",
  logo_name: "Rajath Jaiprakash",
  nickname: "Rajath J",
  subTitle:
    "I’m a driven and motivated professional passionate about innovation and creativity, always seeking new challenges and growth opportunities.",
  resumeLink:
    "https://drive.google.com/drive/folders/12yPrJwy3fg1vbPbRqMWvDVdtHjpoW4PF?usp=share_link",
  portfolio_repository: "https://github.com/rajathjn",
  githubProfile: "https://github.com/rajathjn",
};

// Social media details
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/rajathjn",
    fontAwesomeIcon: "fab fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rajath-jaiprakash/",
    fontAwesomeIcon: "fab fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:rajathjnx@gmail.com",
    fontAwesomeIcon: "fab fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // Enable once more LeetCode profile has more stats
  // {
  //   name: "LeetCode",
  //   link: "https://leetcode.com/u/rajathjnx/",
  //   fontAwesomeIcon: "fa fa-code", // Reference https://fontawesome.com/icons/google?style=brands
  //   backgroundColor: "#FFA116", // Reference https://simpleicons.org/?q=gmail
  // },
];

const skills = {
  data: [
    {
      title: "Site Reliability Engineer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developed highly scalable production ready models using Ansible",
        "⚡ Experience of working with DNS, Monitoring and logging tools",
        "⚡ Skilled in Layer 2/3 network protocols, Virtualization, Network management and troubleshooting",
      ],
      softwareSkills: [
        {
          skillName: "Ansible",
          fontAwesomeClassname: "skill-icons:ansible",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "skill-icons:python-dark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "ElK Stack (Elasticsearch, Logstash, Kibana)",
          fontAwesomeClassname: "vscode-icons:file-type-elastic",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "skill-icons:docker",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "skill-icons:bash-dark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Vmware",
          fontAwesomeClassname: "file-icons:vmware",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "DNS (Bind9)",
          fontAwesomeClassname: "eos-icons:dns",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/rajathjnx",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/rajathjnx",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "PES University, Bangalore",
      subtitle: "B.Tech. in Electronics and Communication Engineering",
      logo_path: "PESUniversity-logo.png",
      alt_name: "PESU",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied electronics engineering subjects like Signals and Systems, DSP, NAS, Computer Networking, EDA, etc.",
        "⚡ Apart from this, I have done courses on Internet of Things, Fundametals of MATLAB and Artifical Neural Networks.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to the top 10% of students in our college.",
      ],
      website_link: "https://pes.edu",
    },
    {
      title: "PES University, Bangalore",
      subtitle: "B.Tech. Minor in Computer Science and Engineering",
      logo_path: "PESUniversity-logo.png",
      alt_name: "PESU",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Introduction to Unix and Shell Programming, Source control and Programming principles etc.",
      ],
      website_link: "https://pes.edu/",
    },
  ],
};

// Need to add more Certifications
const certifications = {
  certifications: [
    {
      title: "Introduction to MATLAB",
      subtitle: "- Mathworks",
      logo_path: "matlab.png",
      certificate_link:
        "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=9d97bc69-02ad-4923-b659-52b45ed2f0ce",
      alt_name: "MATLAB",
      color_code: "#2A73CC",
    },
    {
      title: "Problem Solving ( Intermediate )",
      subtitle: "- HackerRank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/aaed0ced0424",
      alt_name: "HackerRank",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I am currently working as a Site Reliability Engineer. I have worked on various projects related to DevOps and Cloud. Various university club related projects. I was fortunate enough to work with some amazing people and learn a lot of new things.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Site Reliability Engineer",
          company: "Akamai Technologies",
          company_url: "https://www.akamai.com/",
          logo_path: "akamai.png",
          duration: "July 2022 - Present",
          location: "Bangalore, Karnataka",
          description: [
            " Part of the Automation Team. I am working in deployment services.",
            " The projects involve automation for program setup and configuration, process improvements, version upgrade/migration, optimization and feature expansion.",
            " I am currently working on Mobile Security and Networking.",
            " We are responsible for Secure Internet Access Services for MNOs and ISPs."],
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "SRE Intern",
          company: "Akamai Technologies",
          company_url: "https://www.akamai.com/",
          logo_path: "akamai.png",
          duration: "Jan 2022 - May 2022",
          location: "Dublin, Ireland",
          description: [
            " Part of the Akamai's SIA-Mobile SRE team.",
            " Reponsible for the deployment of new features and bug fixes.",
            " Worked on automation of the deployment process."],
          color: "#000000",
        },
        {
          title: "Summer Intenship",
          company: "PESU ISFCR",
          company_url: "https://www.isfcr.pes.edu/",
          logo_path: "isfcr.png",
          duration: "June 2020 - July 2020",
          location: "Bangalore, Karnataka",
          description: [
            " Headed the design of the Remote Automation Control tool.",
            " Facilitated the control of automation tools over a secure channel.",
            " Built with Node-RED, with a user-friendly GUI."],
          color: "#ee3c26",
        },
        {
          title: "Summer Internship",
          company: "Crucible Of Research and Innovation",
          company_url: "https://clubs.pes.edu/cori",
          logo_path: "cori.jpg",
          duration: "June 2019 - July 2019",
          location: "Bangalore, Karnataka",
          description: [
            " Built 2 remote controlled bots utilizing IR sensor and Bluetooth.",
            " Built a Digital Photoframe using the Arduino UNO with a software developed in python, which handled the tasks of conversion with a built-in help.",
            " PROJECT FEATURED IN THE ELECTRONICS FOR YOU MAGAZINE."],
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Project Associate",
          company: "IEEE Robotics and Automation Society (PESU)",
          company_url:
            "https://clubs.pes.edu/ieee-robotics-and-automation-society-pesu-student-chapter",
          logo_path: "ieeeras.png",
          duration: "Jan 2020 - April 2020",
          location: "Bangalore, Karnataka",
          description: [
            " Planned the design of algorithms for the Swarm Robotics Mega Project.",
            " Responsible for the redesign of algorithms and successful integration withhardware.",
            " Semi-Hive type algorithm developed."],
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Here are a few projects I have worked on. I have worked on a few projects in my university and also some personal projects. I have also worked on some projects in my internships.",
  avatar_image_path: "projects_image.svg",
};

// for actual projects refer to shared/opensource

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      //id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Analog Front-End Modelling of Miniature CMOS Image Sensors",
      createdAt: "2022-07-10T10:26:54Z",
      description:
        "The paper details the design and simulation of the working of an Analog Front-End Model of Miniature CMOS Image Sensor",
      url: "https://ieeexplore.ieee.org/document/9865797",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Photo.png",
    description:
      "Feel free to contact me. I will try to respond whenever possible.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to write about my learning experiences and share my knowledge with others. Stay tuned for when I jot down my thoughts.",
    link: "https://rajathjn.github.io/blog/",
    avatar_image_path: "blogs_image.svg",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
