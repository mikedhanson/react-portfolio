
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Mike",
  title: "<Hello World/> I'm Mike!",
  subTitle: emoji("Security Enthusiast, Self-Hosting, Typical Nerd"),
  resumeLink: "https://www.linkedin.com/in/michael-h-396129134/"
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/mikedhanson",
  linkedin: "https://www.linkedin.com/in/michael-h-396129134/",
  dockerhub: "https://hub.docker.com/u/mikehanson",
  facebook: "https://www.facebook.com/notMrHanson",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Currently an Endpoint Architect for the State of South Dakota!👻",
  skills: [
    emoji("⚡ Automate all the things"),
    emoji("⚡ System Admin"),
    emoji("⚡ Self Hosting"),
    emoji("⚡ Endpoint Security")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Powershell",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Android/Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "Swimming",
      fontAwesomeClassname: "fas fa-swimming-pool"
    },
    {
      skillName: "Coffee",
      fontAwesomeClassname: "fas fa-coffee"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "University of South Dakota",
      logo: require("./assets/images/usd.png"),
      subHeader: "Computer Science",
      duration: "Aug 2014 – May 2018",
      desc: "Business Administration minor",
      descBullets: [
        "Dean’s List – Spring 2017 | Fall 2017",
        "Association for Computing Machinery",
        "National Collegiate Cyber Defense Competition",
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Powershell",  //Insert stack or technology you have experience in
      progressPercentage: "53%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Self-Hosting",
      progressPercentage: "43%"
    },
    {
      Stack: "Automation",
      progressPercentage: "67%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Service Delviery Endpoint Architecht",
      company: "State of South Dakota",
      companylogo: require("./assets/images/bit.png"),
      date: "June 2021 – Present",
      desc: 'Design and prototype technology solutions at a high-level to solve everyday problems for the State of South Dakota.',
      descBullets: [
        "Boarding (on/off) process automations",
        "Configured OS provisioning toolset",
        "Developed custom RESTful endpoints for various toolsets",
        "Enroll endpoints into Azure AD and other MDM solutions"
      ]
    },
    {
      role: "Technology Engineer II",
      company: "State of South Dakota",
      companylogo: require("./assets/images/bit.png"),
      date: "June 2018 – June 2021",
      desc: "Patch Management, Endpoint security",
      descBullets: [
        "Automated the offboarding process.",
        "Deployed Microsoft security updates and third-party software.",
        "Wrote custom vulnerability patches for workstations.",
        "Created policies and procedures for standardizing patching."
      ]
    },
    {
      role: "Quality Assurance",
      company: "Smart Software Solutions inc.",
      companylogo: require("./assets/images/sss.jpg"),
      date: "February 2016 – Present",
      desc: "Create automated testing toolsets.",
      descBullets: [
        "Developed and maintained automation scripts",
        "Wrote and performed automated UI and UX tests",
        "Documented bugs and worked with developers",
        "Delivered reports and bug findings with recommendations"
      ]
    },
    {
      role: "Network Technologies Internship",
      company: "State of South Dakota",
      companylogo: require("./assets/images/bit.png"),
      date: "May 2016 – January 2018",
      desc: "",
      descBullets: [
        "Installed and configured Cisco switches and access points, Juniper EX series switches, and various Fortinet firewalls.",
        "Worked hands on with the Security Operations Center.",
        "Performed forensics on compromised machines.",
        "Worked with K-12 schools on networking infrastructure.",
        "Operated in data centers replacing deprecated hardware."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "mikedhanson", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company
/*
const bigProjects = {
  title: "Big Projects",
  subtitle: "big projects subtitle",
  projects: [
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      link: ""
    },
    {
      //image: require("./assets/images/.webp"),
      link: ""
    }
  ]
};
*/

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "SSS",
      subtitle: "SSS",
      image: '',//require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "SS", url: "" },
        { name: "SS", url: "" },
      ]
    },
    {
      title: "",
      subtitle: "",
      image: '', //require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        { name: "", url: "" },
      ] 
    }
  ]
};


// Blogs Section

const blogSection = {

  title: "Another Blog?",
  subtitle: "Sometimes I write words",

  blogs: [
    {
      url: "https://github.com/mikedhanson/AnythingIT",
      title: "Anything IT",
      description: "Anything IT started out as a project for myself to get more familiar with creating WordPress sites and web-hosting in general. Learn more here."
    },
    {
      url: "https://gist.github.com/mikedhanson/23058478ecf92afa59993c062a600a46",
      title: "Running Wordpress on Unraid",
      description: "Creating a reverse proxy within UnRaid to self-host WordPress sites securely. Also having the ability to self host other docker containers. "
    },
    {
      url: "https://github.com/mikedhanson/graycord/blob/master/README.md",
      title: "View Graylog Notifications in Discord",
      description: "Ran into a problem where I wanted Graylog alerts to send notifications to discord. Found out this is not an option from Graylog today so I did it myself. "
    },
    {
      url: "https://gist.github.com/mikedhanson/77f64673c1f0dee9991ddc0697f30c81",
      title: "Custom DNS Entries with Pihole",
      description: "Assuming you already have Pihole up and running, create a new .conf file in the following directory: /etc/dnsmasq.d/yourname.conf"
    },
    {
      url: "https://gist.github.com/mikedhanson/a5cfb372ba45cf816c6bd42a29c09a61",
      title: "Setting up fail2ban with LE/NGINX/WP",
      description: "This tutorial is assuming that you are using the Swag docker container through UnRaid. If you are, then lets proceed."
    },
    {
      url: "/posts",
      title: "More Blog Posts Here! ",
      description: "Coming soon..."
    }
  ]
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to grab a coffee or talk about tech?",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  techStack,
  educationInfo,
  achievementSection,
  openSource,
  blogSection,
  contactInfo
};