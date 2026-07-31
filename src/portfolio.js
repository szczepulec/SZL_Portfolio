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
  resumeLink: "", // Set to a link to show the "Download my CV" button
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
      image: require("./assets/images/Projects/Delft/PIV_image.png"),
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
        "Turbomachinery Aero Engine Fan Project: aerodynamic design and optimisation of a jet engine fan stage using MULTALL, balancing performance, efficiency, and mechanical limits.",

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
      image: require("./assets/images/Projects/Delft/Wind_Turbine_outside.png"), 
      projectName: "Wind Turbine Design",
      projectDesc:
        "Three wind turbine engineering projects covering aerodynamic blade design, electrical drivetrain modelling, and full system-level turbine development. Together, they demonstrate a structured design approach integrating performance optimisation, structural considerations, economic analysis, and grid-connected power system design.",

      language: "MatLAB",
      color: "#ffcc00", 
      size: "01-06.2025",
      github: "", // optional

      modalContent: {
        subtitle: "Assingment report and code, part of DTU & TUDelft Master's course.",
        content: [
          {
            type: "text",
            value:
              "This project applied the Blade Element Momentum (BEM) method to evaluate and optimise the aerodynamic performance of the DTU 10 MW reference wind turbine. Optimal tip speed ratio and pitch angle were determined using Glauert and Madsen correction models, followed by construction of power and thrust curves across the operational wind speed range and validation of aerodynamic load distributions against Ashes simulations. \n\n" + 
              "\n\n" + 
              "Through this work, I developed a deeper understanding of rotor aerodynamics, pitch regulation, controller-driven power limitation, annual energy production estimation using Weibull statistics, and gradient-based optimisation of blade chord and twist.",
            column: "left"
          },
          {
            type: "pdf",
            src: "./pdf/Projects/Delft/WTT_1.pdf",
            fullWidth: false,
            column: "right"
          },
          {
            type: "video",
            src: require("./assets/images/Projects/Delft/Wind_turbine.mp4"),
            fullWidth: false,
            caption: "DTU wind Turbine generator in Risø - November 20th 2024",
            column: "left"
          },
          {
            type: "text",
            value:
              "This assignment focused on modelling the electrical system of a 10 MW offshore wind turbine, including a permanent magnet synchronous generator, step-up transformer, subsea cable connection, and grid interface. Two MPPT control strategies were analysed using phasor diagrams and equivalent circuits, and nonlinear circuit equations were solved to evaluate generator losses, reactive power flow, and overall wind farm efficiency. \n\n" + 
              "\n\n" + 
              "From this project, I gained practical insight into complex power analysis, transformer and cable modelling, reactive power control, and the interaction between turbine control strategies and grid-level performance.",
            column: "right"
          },
                    {
            type: "pdf",
            src: "./pdf/Projects/Delft/WTT_2.pdf",
            fullWidth: false,
            column: "left"
          },
          {
            type: "image",
            src: require("./assets/images/Projects/Delft/Wind_turbine_generator.png"),
            fullWidth: false,
            caption: "Wind turbine generator - November 20th 2024",
            column: "right"
          },
                              {
            type: "pdf",
            src: "./pdf/Projects/Delft/Delft_WTT.pdf",
            fullWidth: false,
            column: "right"
          },
          {
            type: "text",
            value:
              "This project followed a structured, multidisciplinary design process for a 3.5 MW onshore wind turbine, starting from market analysis and site conditions and progressing through aerodynamic sizing, structural scaling, drivetrain selection, control design, and certification checks. \n\n" + 
              "\n\n" + 
              "The rotor diameter was optimised using Levelized Production Cost analysis, and aerodynamic performance was refined using BEM-based chord and twist optimisation. Through this work, I developed a stronger understanding of how aerodynamic efficiency, structural constraints, economic considerations, and grid integration requirements interact within a complete wind turbine system design.",
            column: "left"
          },

        ]
      }
    }
    ,
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
        subtitle: "Assingment reports and simulation files, part of DTU Master's course.",
        content: [
          {
            type: "text",
            value:
              "Throughout my Advanced Computational Fluid Dynamics coursework, I completed a series of projects using Siemens STAR-CCM+ to investigate a wide range of aerodynamic and multiphase flow problems. These assignments strengthened my understanding of turbulence modelling, mesh generation, numerical verification and validation, fluid-structure interaction, and optimization techniques.\n\n" +

"My work included dynamic mesh simulations of vortex-induced vibrations using morphing and overset mesh methods, transitional airfoil simulations with SST k-ω and Gamma-ReTheta turbulence models, adjoint-based aerodynamic optimization, and Lagrangian spray and combustion modelling for diesel engine applications. Across these projects I performed mesh independence studies, sensitivity analyses, model validation against experimental data, and extensive post-processing to interpret complex flow phenomena and evaluate numerical accuracy. These assignments provided valuable hands-on experience in applying CFD to realistic engineering problems while developing strong skills in simulation setup, verification, validation, and technical reporting.",
            column: "right"
          },
          {
            type: "pdf",
            src: "./pdf/Projects/Delft/CFD_3.pdf",
            fullWidth: false,
            column: "left"
          },
                    {
            type: "pdf",
            src: "./pdf/Projects/Delft/CFD_2.pdf",
            fullWidth: false,
            column: "left"
          },
                    {
            type: "pdf",
            src: "./pdf/Projects/Delft/CFD_1.pdf",
            fullWidth: false,
            column: "right"
          },
        ]
      }
    }
    ,
    {
      image: require("./assets/images/Projects/Delft/Full_spectrum.png"), 
      projectName: "Turbulent Flows",
      projectDesc:
        "Through three assignments, I examined turbulent flow behaviour using both laboratory measurements and numerical simulations, evaluating turbulence statistics, wall effects, and modelling accuracy.",

      language: "MatLAB",
      color: "#ffcc00", 
      size: "11.2024",
      github: "https://github.com/szczepulec/Turbulent-Flows", // optional

      modalContent: {
        subtitle: "Assingment report and code, part of DTU Master's course.",
        content: [
          {
            type: "text",
            value:
              "Across these three assignments, I analysed turbulent flows from both an experimental and computational perspective. I worked with LDV measurements of open channel flow to extract friction velocity, turbulence statistics, Reynolds stresses, and turbulent kinetic energy, and compared the results with theoretical models and RANS predictions. \n\n" + 
              "\n\n" + 
              "In parallel, I implemented and evaluated RANS, URANS, and LES models in both simplified channel flow and external cylinder flow cases, performing mesh sensitivity studies and assessing model accuracy against reference data. Together, these projects strengthened my understanding of turbulence theory, wall-bounded flow behaviour, and the practical implementation and validation of CFD turbulence models.",
            column: "left"
          },
          {
            type: "pdf",
            src: "./pdf/Projects/Delft/Turbulent_Flows_1.pdf",
            fullWidth: false,
            column: "right"
          },
                    {
            type: "pdf",
            src: "./pdf/Projects/Delft/Turbulent_Flows_2.pdf",
            fullWidth: false,
            column: "left"
          },
           {
            type: "pdf",
            src: "./pdf/Projects/Delft/Turbulent_Flows_3.pdf",
            fullWidth: false,
            column: "right"
          },
        ]
      }
    }
    ,
    {
      image: require("./assets/images/Projects/Delft/longLES.mp4"), 
      projectName: "Turbulence Modelling",
      projectDesc:
        "Investigating flow around a cylinder in OpenFOAM using LES and URANS, as well as different turbulence models.",

      language: "MatLAB",
      color: "#ffcc00", 
      size: "11.2024",
      github: "https://github.com/szczepulec/Turbulence-modeling", // optional

      modalContent: {
        subtitle: "Assingment report and code, part of DTU Master's course.",
        content: [
          {
            type: "text",
            value:
              "In this project, I modelled fully developed turbulent channel flow using the RANS framework and implemented both Prandtl’s algebraic mixing-length model and the two-equation k–ε model from first principles. I derived the governing equations, discretized them using finite difference methods, and constructed matrix-based solvers to compute velocity profiles and Reynolds stresses. \n\n" + 
              "\n\n" + 
              "By comparing results with DNS data, I developed a deeper understanding of the turbulence closure problem, the limitations of eddy-viscosity assumptions, and the critical role of near-wall modelling through van Driest damping. The project strengthened my ability to translate turbulence theory into stable numerical implementations and to evaluate model accuracy across different Reynolds numbers and flow regions. ",
            column: "right"
          },
          {
            type: "pdf",
            src: "./pdf/Projects/Delft/Turbulence_Modelling_1.pdf",
            fullWidth: false,
            column: "left"
          },
                    {
            type: "pdf",
            src: "./pdf/Projects/Delft/Turbulence_Modelling_2.pdf",
            fullWidth: false,
            column: "right"
          },
          {
            type: "text",
            value:
              "In this project, I performed CFD simulations of turbulent flow past a circular cylinder at Re = 3900 using OpenFOAM, comparing 2D URANS models (k–ε, k–ω SST) with 3D LES approaches. I designed the computational domain, estimated wall spacing using boundary layer theory to ensure wall-resolved simulations, and conducted mesh sensitivity studies to assess numerical accuracy. \n\n" + 
              "\n\n" + 
              "Through analysis of vortex shedding, pressure coefficients, turbulence statistics, and resolved TKE ratios, I gained practical insight into the strengths and limitations of URANS versus LES in capturing unsteady wake dynamics. This work deepened my understanding of turbulence modelling in industrial CFD workflows, particularly regarding grid resolution, inlet turbulence specification, and sources of numerical dissipation.",
            column: "left"
          },
        ]
      }
    }
    ,
    {
      image: require("./assets/images/Projects/Delft/Technical_Drawing.png"), 
      projectName: "Introduction to Mechanical Engineering",
      projectDesc:
        "Design project of a gear transmission output shaft, learning aspects of machine elements, technical product definition and manufacturing systems.",

      language: "SolidWORKS",
      color: "#00ff37", 
      size: "05.2024",
      github: "https://github.com/szczepulec/Intro_To_Mechanical_Eng", // optional

      modalContent: {
        subtitle: "Assingment report and CAD file, part of UTwente Bachelor's course.",
        content: [
          {
            type: "text",
            value:
              "This project presents the complete mechanical design of a gear transmission output shaft for a cooling fan system, including spur gear dimensioning, shaft stress analysis, key selection, bearing sizing, and coupling choice. \n\n" + 
              "\n\n" + 
              "Through this work, I developed a stronger understanding of iterative machine element design, fatigue and contact stress verification, load path analysis using shear and bending moment diagrams, and the integration of standardized components into a manufacturable and maintainable mechanical assembly. ",
            column: "left"
          },
                    {
            type: "pdf",
            src: "./pdf/Projects/Delft/Intro_to_Mech_Eng.pdf",
            fullWidth: false,
            column: "right"
          },
          {
            type: "image",
            src: require("./assets/images/Projects/Delft/Solid_Works.png"),
            fullWidth: false,
            caption: "SolidWORKS CAD project - April 21st 2024",
            column: "left"
          },
        ]
      }
    }
    ,
    {
      image: require("./assets/images/Projects/Delft/Aircraft_eng_minor.png"), 
      projectName: "Aircraft Engineering Project",
      projectDesc:
        "Design of a fixed-wing unmanned aircraft for disaster relief, following the complete conceptual aircraft design process from mission requirements to a final design.",

      language: "MatLAB",
      color: "#ffcc00", 
      size: "01.2024",
      github: "", // optional

      modalContent: {
        subtitle: "Assingment report, part of UTwente Bachelor's course.",
        content: [
          {
            type: "text",
            value:
              "This was the final project of my Aircraft Engineering minor, where our team designed a fixed-wing UAV for disaster relief. Starting from a mission profile, we worked through the complete conceptual design process, from selecting the aircraft configuration and airfoils to analysing performance, stability, structures, and propulsion.\n\n" +
              "I really enjoyed this project because it brought together everything we had learned during the minor. It showed me that aircraft design is never about finding a single perfect solution, but about making engineering trade-offs between performance, weight, cost, and manufacturability."   ,
            column: "left"
          },
                    {
            type: "pdf",
            src: "./pdf/Projects/Delft/Aircraft_Eng_minor.pdf",
            fullWidth: false,
            column: "right"
          }
        ]
      }
    },
    {
      image: require("./assets/images/Projects/Delft/Antenna.png"),
      projectName: "Fields and Waves",
      projectDesc:
        "Development of a directional Yagi-Uda antenna, from analytical design and COMSOL simulations to manufacturing and experimental validation.",

      language: "COMSOL",
      color: "#ff6600",
      size: "02.2023",
      github: "", // optional

      modalContent: {
        subtitle: "Assingment report and project plan, part of UTwente Bachelor's course.",
        content: [
          {
            type: "text",
            value:
              "Designed, optimized, and physically built a 6-element Yagi-Uda antenna operating at 433 MHz for long-range wireless communication. The project involved analytical design, electromagnetic simulations in COMSOL, optimization of element lengths and spacing, impedance matching using an LC network, and experimental characterization of gain, directivity, and impedance. The final antenna was manufactured and tested to validate its performance against the simulation results, providing practical experience in RF design, prototyping, and experimental verification.",
            fullWidth: true
          },
          {
            type: "pdf",
            src: "./pdf/Projects/Delft/FieldsandWaves_Project_Plan.pdf",
            fullWidth: false,
            column: "left"
          },
          {
            type: "pdf",
            src: "./pdf/Projects/Delft/FieldsandWaves_Final_Report.pdf",
            fullWidth: false,
            column: "right"
          }
        ]
      }
    },
    {
      image: require("./assets/images/Projects/Delft/Control_Thoery.png"),
      projectName: "Control Theory",
      projectDesc:
        "Development of a complete control system for a self-balancing Segway, including system modelling, state estimation, controller design, and experimental validation.",

      language: "20-Sim",
      color: "#00c2cc",
      size: "11.2022",
      github: "", // optional

      modalContent: {
        subtitle: "Assingment report and code, part of UTwente Bachelor's course.",
        content: [
          {
            type: "text",
            value:
              "This project brought together everything developed throughout the course into a complete self-balancing Segway. Building upon the previously identified motor model, we developed a full dynamic model of the Segway, including its electrical, mechanical, and translational behaviour using bond graph modelling in 20-sim. \n\n" +
              "\n\n" +
              "A large part of the project focused on developing a reliable state estimator by combining gyroscope, accelerometer, and encoder measurements through complementary filtering. This allowed the Segway's orientation and motion to be estimated in real time, providing the information required for feedback control. \n\n" +
              "\n\n" +
              "With the model and state estimator in place, we designed an LQR controller to stabilize the inherently unstable system and implemented additional functionality to allow the Segway to be driven using a wireless gamepad. The complete system was then validated through simulations and experiments, comparing the predicted behaviour with measurements from the physical Segway. This project provided hands-on experience with modelling, state estimation, control theory, sensor fusion, and the implementation of embedded control systems.",
            fullWidth: true
          },
          {
            type: "pdf",
            src: "./pdf/Projects/Delft/ControlTheory_Motor_Report.pdf",
            fullWidth: false,
            column: "left"
          },
          {
            type: "pdf",
            src: "./pdf/Projects/Delft/ControlTheory_Final_Report.pdf",
            fullWidth: false,
            column: "right"
          }
        ]
      }
    },
    {
      image: require("./assets/images/Projects/Delft/Models and Signals.png"),
      projectName: "Models and Signals",
      projectDesc:
        "Design and development of a single-wheel self-balancing robot, integrating mechanical design, dynamic modelling, embedded control, and sensor fusion.",

      language: "MATLAB",
      color: "#ffcc00",
      size: "09.2022",
      github: "", // optional

      modalContent: {
        subtitle: "Assingment report, part of UTwente Bachelor's course.",
        content: [
          {
            type: "text",
            value:
              "This project involved designing and building a single-wheel self-balancing robot from the ground up, combining mechanical design, electronics, mathematical modelling, and embedded control. The robot was designed to be manufactured using 3D-printed components, with custom wheel and chassis assemblies housing the motor, sensors, battery, and control electronics. \n\n" +
              "\n\n" +
              "A dynamic model of the robot was developed using Lagrangian mechanics and linearized to obtain state-space and transfer function representations suitable for control design. Physical parameters including mass, inertia, and geometry were experimentally measured and incorporated into the model, allowing the system's open-loop behaviour to be analysed and validated through simulation. \n\n" +
              "\n\n" +
              "A PID controller was designed using the Ziegler–Nichols tuning method and implemented on an Arduino-based embedded platform. The robot's orientation was estimated using an IMU combining accelerometer and gyroscope measurements through Madgwick sensor fusion, providing filtered real-time attitude estimates for closed-loop balancing. The completed robot was experimentally evaluated by comparing simulated and physical system behaviour, integrating mechanical design, control theory, embedded programming, and sensor processing into a complete autonomous balancing system.",
            column: "left"
          },
          {
            type: "pdf",
            src: "./pdf/Projects/Delft/Models&Signals_Final_Report.pdf",
            fullWidth: false,
            column: "right"
          }
        ]
      }
    },
    {
      image: require("./assets/images/Projects/Delft/Accelerometer_1_cover.png"),
      projectName: "Dynamical Systems",
      projectDesc:
        "Design, modelling, construction, and characterization of a wireless capacitive accelerometer for impact detection in remote-controlled vehicles.",

      language: "MATLAB",
      color: "#ffcc00",
      size: "07.2022",
      github: "", // optional

      modalContent: {
        subtitle: "Assingment report and project plan, part of UTwente Bachelor's course.",
        content: [
          {
            type: "image",
            src: require("./assets/images/Projects/Delft/Accelerometer_2.jpg"),
            column: "right"
          },
          {
            type: "text",
            value:
              "This project focused on developing a custom wireless capacitive accelerometer capable of measuring impacts experienced by a remote-controlled car. Starting from the system requirements, we designed the sensing principle, selected suitable materials, modelled the dynamic behaviour of the mass-spring system, and developed the complete mechanical and electronic design. \n\n" +
              "\n\n" +
              "The sensing unit was based on a differential capacitive accelerometer inspired by MEMS devices, using a suspended proof mass supported by 3D-printed cantilever beams. The mechanical components were designed in Fusion 360, while analytical models were used to determine the required spring stiffness, natural frequency, and dynamic response. Alongside the mechanical design, we developed the electronics using an Arduino Uno, an ESP8266 WiFi module, and custom circuitry to measure capacitance, convert it into acceleration, and transmit the measurements wirelessly to a mobile device. \n\n" +
              "\n\n" +
              "Once the design was completed, the accelerometer was manufactured using 3D printing, assembled with custom-machined components, and experimentally characterized. Both static and dynamic tests were carried out to evaluate the sensor's behaviour, including calibration, frequency response measurements, and comparison with the analytical model. The project provided valuable experience in combining mechanical design, electronics, embedded programming, manufacturing, and experimental testing into the development of a complete sensing device.",
            column: "left"
          },
          {
            type: "pdf",
            src: "./pdf/Projects/Delft/Accelerometer_Project_Plan.pdf",
            fullWidth: false,
            column: "left"
          },
          {
            type: "pdf",
            src: "./pdf/Projects/Delft/Accelerometer_Final_Report.pdf",
            fullWidth: false,
            column: "right"
          }
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
      // desc: "Selected for the Honours Programme at TU Delft.",
      descBullets: [
        "Grade = 8.77/10 (Cum Laude)",
        "Honours Programme, 20 ECTS | Top 10% Selective Extracurricular Programme",
      ]
    },
    {
      schoolName: "Technical University of Denmark",
      logo: require("./assets/images/DTU_LOGO.png"), 
      subHeader: "Master of Science in Wind Energy",
      duration: "September 2024 - July 2026",
      // desc: "Specialized in aerodynamics & Turbulence Modelling.",
      descBullets: [
        "Grade = 11.11/12",
      ]
    },
    {
      schoolName: "University of Twente",
      logo: require("./assets/images/Twente_LOGO.jpg"), 
      subHeader: "Bachelor of Science in Advanced Technology",
      duration: "September 2021 - July 2024",
      // desc: "Graduated in the top 10% of the cohort and completed the Honours Programme.",
      descBullets: [
        "Grade = 7.94/10",
        "Honours Programme, 30 ECTS | Top 10% Selective Extracurricular Programme",
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
      image: require("./assets/images/BigProjects/AIAA/AIAA_Cover.jpg"),
      projectName:
        "32nd AIAA/CEAS Aeroacoustics Conference",
      projectDesc:
        "Semi-Analytical Modeling of Blade Wake Deficits for Propeller-Wing Interaction in eVTOL Aeroacoustics",
      modalContent: {
        subtitle: "32nd AIAA/CEAS Aeroacoustics Conference",
        content: [
          {
            type: "text",
            value:
"Presenting my research at the AIAA/CEAS Aeroacoustics Conference was one of the highlights of my Master's degree. Over the course of four days, I had the opportunity to attend technical sessions led by researchers and engineers from universities, research institutes, and companies from around the world, covering the latest developments in aeroacoustics across different applications. It was inspiring to see how the concepts I had been working on during my thesis connected to the broader research community.\n\n" +

"One of the most rewarding aspects of the conference was presenting my own research to an international audience. Standing in front of experts who have spent years working in the field was both exciting and challenging, and it pushed me to communicate my work clearly and confidently. The questions and discussions that followed gave me valuable feedback and showed me how research develops through collaboration and the exchange of ideas.\n\n" +

"Beyond the technical presentations, the conference was an excellent opportunity to network with researchers, PhD students, and industry professionals from across the world. Conversations during coffee breaks, poster sessions, and social events often turned into discussions about ongoing research, future developments in aerospace, and different career paths. Being able to represent the work I had carried out at the von Kármán Institute and contribute to the scientific community at an international conference was an experience I am incredibly grateful for. It strengthened my confidence as a researcher and further motivated me to pursue work at the intersection of computational fluid dynamics, aeroacoustics, and aircraft design.",
            fullWidth: false,
            column: "right"
          },
          {
            type: "pdf",
            src: "./pdf/Big_Project/AIAA_conf.pdf",
            fullWidth: false,
            column: "right"
          },
                    {
            type: "image",
            src: require("./assets/images/BigProjects/AIAA/AIAA_conf.jpg"),
            caption: "32nd AIAA/CEAS Conference - May 27th 2026",
            fullWidth: false,
            column: "left"
          },
        ]
      }
    },
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
"This thesis was carried out at the von Kármán Institute for Fluid Dynamics in Brussels as part of the double-degree Master's programme between TU Delft and DTU. Over the course of nine months, I worked on developing a fast prediction method for propeller-wing interaction noise in eVTOL aircraft by combining CFD simulations with analytical aeroacoustic models.\n\n" +

"Spending my thesis at the von Kármán Institute was one of the highlights of my studies. I really enjoyed being surrounded by researchers from all over the world and experiencing such an international research environment. One of the things I appreciated most was being able to attend VKI's lectures and training courses alongside my thesis work, learning about topics ranging from machine learning for fluid dynamics and flow control to the latest developments in computational aerodynamics. Together with the weekly discussions with my supervisors and colleagues, it made for an incredibly rewarding learning experience.\n\n"+

"The project gave me the opportunity to dive deep into CFD, aeroacoustics, turbulence modelling, and scientific programming while learning how research is carried out in practice. Seeing the work grow from an initial idea into a complete thesis was an incredibly rewarding experience that strengthened my interest in computational aerodynamics and research.",
            fullWidth: false,
            column: "right"
          },
          {
            type: "pdf",
            src: "./pdf/Big_Project/Master_thesis.pdf",
            fullWidth: false,
            column: "left"
          },
        ]
      }
    },
    {
      image: require("./assets/images/BigProjects/BSC_Thesis/BSC_Thesis_cover.png"),
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
