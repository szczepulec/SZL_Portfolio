/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
// TODO Change animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Szczepulec7",
  title: "Welcome to My Portfolio ",
  subTitle: emoji(
    "Here I showcase a selection of projects, experiences and notes.\n\n" +
    "Each project reflects my dedication to learning, problem-solving, and innovation, demonstrating both my technical skills and passion for aerospace engineering.\n\n" +
    "Feel free to explore my journey and the knowledge I've gathered along the way.\n\n" +
    "- Szczepan Letkiewicz"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // TODO Change
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/szczepulec",
  linkedin: "https://www.linkedin.com/in/szczepan-letkiewicz-aa05251a1/",
  gmail: "mailto:szczepan@letkiewicz.pl",
  instagram: "https://www.instagram.com/szczepulec7/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technical Skills",
  subTitle:
    "Experience with simulation software, experimental aerodynamics, and advanced engineering analysis tools.",

  skills: [
    emoji(
      "⚡ Numerical simulation of aerodynamic flows using CFD tools (RANS/LES), turbulence modelling, and mesh generation"
    ),
    emoji(
      "⚡ Experimental wind tunnel testing including PIV, hot-wire anemometry, and pressure measurement techniques"
    ),
    emoji(
      "⚡ Post-processing, data analysis, and visualization using MATLAB, ParaView, and Python"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
// TODO later swicht to logos of software I know
  softwareSkills: [
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "MATLAB",
    icon: "Matlab_Logo.png"
  },
  {
    skillName: "OpenFOAM",
    icon: "OpenFOAM_logo.png"
  },
  {
    skillName: "ParaView",
    icon: "paraview_log.png"
  },
  {
    skillName: "ANSYS",
    icon: "ansys.png"
  },
  {
    skillName: "COMSOL",
    icon: "comsol.png"
  },
  {
    skillName: "Dassault Systèmes",
    icon: "dassaultsystemes.png"
  },
  {
    skillName: "Siemens",
    icon: "siemens.png"
  }
],
  display: true // Set false to hide this section, defaults to true
};


export const projectsSection = {
  title: "Projects",
  subtitle: "",
  display: true,
  projects: [
    {
      image: require("./assets/images/Projects/Delft/PIV_image.jpg"),
      projectName: "Flow Measurement Techniques",
      projectDesc:
        "Wind Tunnel Experiments including PIV, Hotwire Anemometry, and Pressure Probes.",

      language: "Python",
      color: "#006eff", 
      size: "06.2025",
      github: "https://github.com/szczepulec/Flow-Measurement-Techniques", // optional

      modalContent: {
        subtitle: "Experiments conducted at TU Delft part of Master's course.",
        content: [
          {
            type: "text",
            value:
              "During this course, I had the chance to step into the low-speed wind tunnel at Delft and really get hands-on with the flow around an airfoil at different angles of attack. One of the highlights was using Particle Image Velocimetry (PIV) to capture the flow field, a technique that let me visualize the invisible patterns of air moving around the wing. I also worked with LaVision DaVis software to collect and process the data, which felt a bit like being both an engineer and a detective, piecing together clues from the flow. On top of that, we took additional measurements using hot-wire anemometry and pressure probes, which added more layers of understanding to what was happening in the tunnel. \n\n" + 
              "\n\n" + 
              "One of the biggest lessons I took away was just how much preparation goes into an experiment before you even turn anything on. The planning, calibrating, and setting up can take hours, and it really drives home that experimental work is as much about preparation as it is about execution. Seeing the theory we learn in class come alive in the lab was both fascinating and incredibly rewarding.",
            column: "left"
          },
          {
            type: "image",
            src: require("./assets/images/Projects/Delft/Flow_Measurements_Post_processing.jpg"),
            caption: "LaVision DaVis software for PIV - May 26th 2025",
            column: "right"
          },
          {
            type: "pdf",
            src: "./pdf/Projects/Delft/Flow_Measurments.pdf",
            fullWidth: true
          },
        ]
      }
    }
    ,
    {
      image: require("./assets/images/Projects/Delft/Rotor_wake_cover.png"),
      projectName: "Rotor and Wake Aerodynamics",
      projectDesc:
        "Two methods for analysing propeller and wind turbine performance, Blade Element Method (BEM) and Lifiting Line Theory (LLT)",

      language: "Python",
      color: "#006eff", 
      size: "05.2025",
      github: "https://github.com/szczepulec/Rotor-Wake-Aerodynamics", // optional

      modalContent: {
        subtitle: "Assingment reports and code, part of TU Delt Master's course.",
        content: [
          {
            type: "text",
            value:
              "Blade Element Momentum Theory with Yaw \n\n" + 
              "\n\n" + 
              "For this assignment, we had to develop a BEMT code that could handle yawed flow conditions. Implementing the yaw effects and properly coupling the blade element and momentum parts took some time to get right, but it was really satisfying once the code started producing realistic results. \n\n" + 
              "\n\n" + 
              "Working on this also introduced me to wake modeling, which I found to be a really fascinating and complex topic. Understanding how the wake develops and interacts with the rotor adds a whole new layer of difficulty to the problem, but it’s also what makes rotor aerodynamics so interesting.",
            column: "left"
          },
                    {
            type: "pdf",
            src: "./pdf/Projects/Delft/Rotor_Wake_BEM.pdf",
            fullWidth: false,
            column: "right"
          },
          {
            type: "text",
            value:
              "Lifting Line Theory Assignment  \n\n" + 
              "\n\n" + 
              "Setting up the lifting line code was definitely a challenge. Getting all the coordinate transforms and vortex filament discretisations to work correctly took some time to figure out.  \n\n" + 
              "\n\n" + 
              "But once it was running for a single rotor, it became clear why this method is such a powerful tool for preliminary design of distributed propellers and wind turbines. ",
            column: "right"
          },
          {
            type: "pdf",
            src: "./pdf/Projects/Delft/Rotor_Wake_LL.pdf",
            fullWidth: false,
            column: "left"
          },
        ]
      }
    }
    ,
    {
      image: require("./assets/images/Projects/Delft/Aeroelasticity_1.png"), 
      projectName: "Aeroelasticity",
      projectDesc:
        "Evaluation of structural and aeroelastic properties and stability of a typical section with a control surface.",

      language: "MatLAB",
      color: "#ffcc00", 
      size: "05.2025",
      github: "https://github.com/szczepulec/Aeroelasticity", // optional

      modalContent: {
        subtitle: "Assingment report and code, part of TU Delt Master's course.",
        content: [
          {
            type: "text",
            value:
            "I find it fascinating how much of the aeroelasticity field is based on the pioneering work of Theodor Theodorsen. Unsteady aerodynamics still feels a bit like magic to me; it’s challenging to fully grasp how airflow reacts to moving and flexible structures. What makes this topic really exciting is its direct application in aircraft design. Understanding aeroelastic effects like flutter and dynamic loads is crucial for designing safe and efficient wings, rotor blades, and other components. ",
            column: "left"
          },
          {
            type: "pdf",
            src: "./pdf/Projects/Delft/Aeroelasticity.pdf",
            fullWidth: false,
            column: "right"
          },
          {
            type: "image",
            src: require("./assets/images/Projects/Delft/Aeroelasticity_2.png"),
            fullWidth: false,
            column: "left"
          },
        ]
      }
    }
    ,
    {
      image: require("./assets/images/Projects/Delft/Turbomachinery.png"), // TODO Change
      projectName: "Turbomachinery",
      projectDesc:
        "Two methods for analyzing propeller and wind turbine performance: Blade Element Momentum (BEM) theory and Lifting Line Theory (LLT).",

      language: "MULTALL",
      color: "#9900ff", 
      size: "04.2025",
      github: "", // optional

      modalContent: {
        subtitle: "Assingment poster and code, part of TU Delt Master's course.",
        content: [
          {
            type: "text",
            value:
              "Turbomachinery Aero Engine Fan Project \n\n" + 
              "\n\n" + 
              "In this short project, I used MULTALL to design and optimise an aero engine fan as part of a turbomachinery course. It was a tough but really enjoyable challenge to balance aerodynamic performance, efficiency, and mechanical limits in such a complex machine. While I wasn’t a big fan of the MULTALL software itself, the project gave me a much better understanding of how difficult fan design and optimisation are in practice. ",
            column: "right"
          },
          {
            type: "pdf",
            src: "./pdf/Projects/Delft/Turbomachinery.pdf",
            fullWidth: false,
            column: "left"
          },
        ]
      }
    },
    {
      image: require("./assets/images/Projects/Delft/cfd_animation.mp4"), 
      projectName: "Computational Fluid Dynamics",
      projectDesc:
        "A handful of projects in Simcenter STAR-CCM+ including overset meshing, Lagrangian spray modeling, combustion, and supersonic flow.",

      language: "STAR-CCM+",
      color: "#ff0000", 
      size: "12.2024",
      github: "", // optional

      modalContent: {
        subtitle: "Assingment poster and code, part of DTU Master's course.",
        content: [
          {
            type: "text",
            value:
              "Turbomachinery Aero Engine Fan Project \n\n" + 
              "\n\n" + 
              "In this short project, I used MULTALL to design and optimise an aero engine fan as part of a turbomachinery course. It was a tough but really enjoyable challenge to balance aerodynamic performance, efficiency, and mechanical limits in such a complex machine. While I wasn’t a big fan of the MULTALL software itself, the project gave me a much better understanding of how difficult fan design and optimisation are in practice. ",
            column: "right"
          },
          {
            type: "pdf",
            src: "./pdf/Projects/Delft/Turbomachinery.pdf",
            fullWidth: false,
            column: "left"
          },
        ]
      }
    }
  ]
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Delft University of Technology",
      logo: require("./assets/images/TU_Delft_LOGO.png"), 
      subHeader: "Master of Science in Aerospace Engineering",
      duration: "September 2024 - July 2026",
      desc: "Selected for the Honours Programme at TU Delft.",
      descBullets: [
        "Conducted wind tunnel experiments, such as PIV and Hot-Wire Annenometry",
        "Studied turbomachinery and propulsion system performance",
      ]
    },
    {
      schoolName: "Technical University of Denmark",
      logo: require("./assets/images/DTU_LOGO.png"), 
      subHeader: "Master of Science in Wind Energy",
      duration: "September 2024 - July 2026",
      desc: "Specialized in aerodynamics & Turbulence Modelling.",
      descBullets: [
        "Studied rotor aerodynamics and blade element momentum (BEM) theory",
        "Advanced coursework in Computational Fluid Dynamics (CFD) in OpenFOAM and STARCCM+",
      ]
    },
    {
      schoolName: "University of Twente",
      logo: require("./assets/images/Twente_LOGO.jpg"), 
      subHeader: "Bachelor of Science in Advanced Technology",
      duration: "September 2021 - July 2024",
      desc: "Graduated in the top 10% of the cohort and completed the Honours Programme.",
      descBullets: [
        "Developed strong foundation in mechanics, thermodynamics, and control systems",
        "Minored in Aircraft Engineering",
      ]
    }
  ]
};



// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Intern in Structural and System Testing",
      company: "Pilatus Aircraft",
      companylogo: require("./assets/images/Pilatus_Aircraft.png"),
      date: "Starting Aug 2026",
      desc: "Coming soon",
      //descBullets: [
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //]
    },
    {
      role: "Student Researcher",
      company: "von Karman Institute",
      companylogo: require("./assets/images/VKI_logo_sqaure_blue.png"),
      className: "vki-card",
      date: "Oct 2025 – Present",
      desc: "Conducting aeroacoustic research focused on propeller–wing interaction noise. Developing neural network–based surrogate models trained on high-fidelity CFD and acoustic simulation data to predict tonal and broadband noise signatures."
    },
    {
      role: "Vehicle Control & Test Engineer",
      company: "RISE Student Team",
      companylogo: require("./assets/images/RISE.png"),
      className: "rise-card",
      date: "Sep 2022 – Jul 2024",
      desc: "Member of the founding team contributing to the rocket mechanical architecture and control systems development. Designed and integrated structural subsystems, actuator interfaces, and guidance, navigation, and control (GNC) elements. Led system-level testing and validation, contributing to three successful launch campaigns."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

export const researchSection = {
  title: "Research Projects",
  subtitle: "",
  display: true,
  projects: [
    {
      image: require("./assets/images/BigProjects/MSC_Thesis/Cover.png"),
      projectName:
        "Master Thesis",
      projectDesc:
        "Aerodynamic and aeroacoustic installation effects in novel eVTOL configurations",
      modalContent: {
        subtitle: "Master Thesis",
        content: [
          {
            type: "text",
            value:
              "Comning Soon",
            fullWidth: true,
          },
        ]
      }
    },
    {
      image: require("./assets/images/BigProjects/BSC_Thesis/BSC_Thesis_wind_Tunnel_1.jpg"),
      projectName:
        "Bachelor Thesis",
      projectDesc:
        "Quantifying Skin Friction Drag on Tyres: Wind Tunnel Analysis",
      modalContent: {
        subtitle: "BSc Thesis — Wind Tunnel Analysis",
        content: [
          {
            type: "text",
            value:
              "My bachelor's thesis was an incredible opportunity and one of the highlights of my academic journey. I had the chance to work on designing a measurement setup for a wind tunnel, which allowed me to combine hands-on experimental work with independent design and simulation. I am extremely grateful for the trust and responsibility I was given, as it gave me the freedom to really take ownership of the project. \n\n" + 
              "\n\n" + 
              "This project helped me realize how much I enjoy research and experimental aerodynamics. The combination of problem-solving, creativity, and technical skill required to make the setup work was both challenging and extremely rewarding. I left the project more motivated than ever to pursue work in this field, and it confirmed that I want to continue doing research and design projects like this in the future.",
            fullWidth: false,
            column: "left"
          },
          {
            type: "image",
            src: require("./assets/images/BigProjects/BSC_Thesis/BSC_Thesis_Defense.jpg"),
            caption: "Bachelor Thesis defense Presentation - July 14th 2024",
            fullWidth: false,
            column: "right"
          },
          {
            type: "image",
            src: require("./assets/images/BigProjects/BSC_Thesis/BSC_Thesis_wind_Tunnel_2.jpg"),
            caption: "Members of project - June 21st 2024",
            fullWidth: false,
            column: "left"
          },
          {
            type: "pdf",
            src: "./pdf/Big_Project/Bachelor_Thesis.pdf",
            fullWidth: false,
            column: "right"
          },
          {
            type: "video",
            src: "./videos/BSC_Thesis_Video.mp4",
            fullWidth: false,
            column: "left",
            caption: "Smoke visualization test in the wind tunnel."
          }
        ]
      }
    }
  ]
};

const bigProjects = {
  title: "Big Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/placeholder.png"),
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
      image: require("./assets/images/placeholder.png"),
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
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/placeholder.png"),
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
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/placeholder.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/placeholder.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section


export const newsSection = {
  display: true,
  title: "News",
  news: [
    {
      date: "Feb 13, 2026",
      text:
        "Conference paper titled 'Semi-Analytical Modeling of Blade Wake Deficits for Propeller–Wing Interaction in eVTOL Aeroacoustics' has been accepted for presentation at the 32nd AIAA/CEAS Aeroacoustics Conference in Belgium."
    },
    {
      date: "Oct 06, 2025",
      text:
        "Started as a Student Researcher at the von Karman Institute for Fluid Dynamics."
    },
    {
      date: "Sep 01, 2024",
      text:
        "Began a Master's degree in Aerospace Engineering at Delft University of Technology, alongside a second Master's degree in Wind Energy at the Technical University of Denmark (DTU)."
    },
    {
      date: "Jul 14, 2024",
      text:
        "Graduated with a Bachelor's degree in Advanced Technology with a GPA of 7.94/10, ranking 4th out of 70 students."
    },
    {
      date: "Jul 03, 2023",
      text:
        "Successfully completed the Honours Programme."
    },
    {
      date: "Sep 22, 2022",
      text:
        "Joined Student Rocket Team RISE as a Vehicle Control and Test Engineer."
    },
  ]
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

// TODO Delete the following sections
const blogSection = {
  title: "News",
  subtitle:
    "Last updated 20.02.2026",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  title: "",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
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
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji(""),
  subtitle:
    "",
  number: "",
  email_address: ""
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};



export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
