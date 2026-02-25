/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set true to enable splash screen
  animation: splashAnimation,
  image: require("./assets/images/holly.jpeg"), // Add your image here
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Beep Beep",
  title: "Hi, I'm Holly!",
  subTitle: "I turn code into motion, building systems that moves beyond the screen to drive real-world actions and systems.",
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/qianyue-xue-holly/",
  gmail: "hollyxqy@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "My areas of expertise include:",
  skills: [
    emoji("Software development, from task automation to system architecture"),
    emoji("Robotics, localization algorithms, and Arduino-based hardware and embedded systems"),
    emoji("Network protocols, IoT deployment, and cybersecurity")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
  { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
  { skillName: "C / C++", fontAwesomeClassname: "fas fa-code" },
  { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
  { skillName: "PowerShell", fontAwesomeClassname: "fas fa-terminal" },
  { skillName: "Arduino / Raspberry Pi", fontAwesomeClassname: "fas fa-microchip" },
  { skillName: "Scheme", fontAwesomeClassname: "fas fa-project-diagram" },
  { skillName: "Assembly", fontAwesomeClassname: "fas fa-laptop-code" },
  { skillName: "React", fontAwesomeClassname: "fab fa-react" },
  { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
  { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-line" },
  { skillName: "R", fontAwesomeClassname: "fas fa-chart-bar" },
  { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
  { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
  { skillName: "aws", fontAwesomeClassname: "fab fa-aws" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Toronto",
      logo: require("./assets/images/uoft.jpeg"),
      subHeader: "Master of Engineering in Electrical & Computer Engineering",
      duration: "September 2024 - April 2026",
      desc: "Graduate Emphasis in Robotics",
      descBullets: [
        "Average GPA: 3.89/4.0",
        "Relevant Courses: AI Applications in Robotics, Internet of Things, Mobile Robotics and Perception, Networks for AI, Digital Image Processing and Applications, Game theory, Signal processing, React"
      ]
    },
    {
      schoolName: "University of Western Ontario",
      logo: require("./assets/images/uwo.png"),
      subHeader: "Bachelor of Science, Honors Specialization in Computer Science",
      duration: "September 2019 - April 2024",
      desc: "Dean’s Honor List in 2019, 2023, and 2024",
      descBullets: [
        "Average GPA: 3.7/4.0",
        "Thesis: A Systematic Study of Localization Problem and Solution in the Internet of Robotic Things",
        "Relevant Course:  Object-Oriented Design & Analysis, Data Structures & Algorithms, Network Structure, Network Security, Human-Computer Interaction, Artificial Intelligence, Project Management"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "IT Support Technician",
      company: "University of Toronto",
      companylogo: require("./assets/images/uoft.jpeg"),
      date: " Oct. 2024 – Aug. 2025",
      desc: "Faculty of Dentistry",
      descBullets: [
        "Provided IT support by troubleshooting hardware, software, and network issues to ensure smooth operations.",
        "Maintained and optimized workstations, printers, and network infrastructure, including patch panels and cabling.",
        "Deployed updates, upgrades, and automation scripts to streamline IT workflows."
      ]
    },
    {
      role: "Network Technician",
      company: "University of Western Ontario",
      companylogo: require("./assets/images/uwo.png"),
      date: "Aug. 2023 – Apr. 2024",
      desc: "Connect-IT",
      descBullets: [
        "Provided network support and troubleshooting for university departments, ensuring reliable connectivity and performance.",
        "Assisted in the maintenance and optimization of network infrastructure, including switches, routers, and wireless access points.",
        "Collaborated with IT teams to implement network upgrades and security measures."
      ]
    },
    {
      role: "5G Automation Engineer Intern",
      company: "Ericsson",
      companylogo: require("./assets/images/Ericsson.jpg"),
      date: "Feb. 2022 – Aug. 2022",
      descBullets:[
        "Designed and implemented automation scripts for 5G router testing and deployment.",
        "Collaborated with cross-functional teams to optimize network performance and reliability.",
        "Documented and maintained technical specifications for 5G network components."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const projects = {
  title: "Projects",
  subtitle: "Selected projects across software, robotics, AI, computer vision, and IoT systems",
  categories: [
    {
      title: "Computer Vision & Algorithms",
      projects: [
        {
          image: require("./assets/images/music_scanner.png"),
          projectName: "Music Sheet Scanner & Symbol Recognition",
          projectDesc:
            "Designed a computer vision pipeline using OpenCV and template matching to accurately recognize musical notations from scanned sheet music.",
          
        }
      ]
    },
    {
      title: "IoT & Embedded Systems",
      projects: [
        {
          image: require("./assets/images/iot_waste.png"),
          projectName: "IoT Smart Waste Classification System",
          projectDesc:
            "Built a scalable edge-to-cloud IoT system with embedded devices, cloud AI inference, and real-time monitoring dashboard for automated waste classification.",
          
        }
      ]
    },
    {
      title: "Robotics & Autonomous Systems",
      projects: [
        {
          image: require("./assets/images/robot_dog.png"),
          projectName: "Quadruped Robot Dog Navigation Simulation",
          projectDesc:
            "Developed a full-stack simulation framework for autonomous quadruped robot navigation, integrating SLAM, path planning, sensor fusion, and obstacle avoidance.",
          
        },
        {
          image: require("./assets/images/ride_on_car.png"),
          projectName: "Obstacle-Avoidance Ride-on Cars for Children",
          projectDesc:
            "Designed and built autonomous ride-on vehicles using Arduino-based sensor and motor systems to enable safe and independent mobility for children with disabilities.",
          
        }
      ]
    },
    
    
    {
      title: "Arduino & Embedded Robotics",
      projects: [
        {
          image: require("./assets/images/maze_sumo_robot.png"),
          projectName: "Autonomous & Competitive Robotics",
          projectDesc:
            "Merged multiple autonomous robots including maze-solving robots and sumo competition robots. Focused on sensor integration, wall-following algorithms, obstacle detection, and real-time motion control using Arduino.",
          
        },
        {
          image: require("./assets/images/bluetooth_wifi_robot.png"),
          projectName: "Remote & Networked Robotics",
          projectDesc:
            "Merged interactive robots equipped with Bluetooth/WiFi control, Python GUI interfaces, and sensor/audio feedback. Demonstrates embedded system programming, wireless communication, and human-machine interaction.",
          
        }
      ]
    }
  ],
  display: true
};
/*
const projects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
*/

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications"),
  subtitle:
    "Awards and Certifications that I have earned !",

  achievementsCards: [
    /*{
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },*/
    {
      title: `Dean's Honor List (2020, 2023, 2024)`,
      subtitle:
        "Achieved Dean's Honor List recognition for outstanding academic performance in 3 out of 4 years at the University of Western Ontario.",
      image: require("./assets/images/deans.png"),
      //imageAlt: "Google Assistant Action Logo",
      
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      subtitle:
        "Earned AWS Cloud Practitioner certification, demonstrating foundational knowledge of AWS cloud services and best practices.",
      image: require("./assets/images/aws.png"),
      imageAlt: "Google Assistant Action Logo",
      
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let's connect!"),
  subtitle:
    "Please feel free to reach out to me for collaborations or just a friendly hello!",
  number: "+1 (226) 998-0415",
  email_address: "hollyxqy@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  projects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
