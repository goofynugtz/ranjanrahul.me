import { Experience } from "../../interface";

export const experience: Experience[] = [
  {
    role: "Full Stack Developer Intern",
    company: "HomeDrop",
    website: "https://homedrop.in",
    date: "November '23 - Present",
    companyproject: [
      {
        projectname: "Serverless backend API",
        tasks: [],
      },
    ],
  },
  {
    role: "DevOps Intern",
    company: "Flipr Innovation Labs",
    website: "https://flipr.ai",
    date: "May '23 - July '23",
    companyproject: [
      {
        projectname: "Workspace Monitoring Tool",
        tasks: [
          "Developed a cross platform tool for workspace monitoring with Electron, React & Rust",
          "Built and deployed serverless API with golang gin framework to AWS Lambda having user authentication with JWT and OAuth",
          "Set up automated releases of the app for all platforms on GitHub through workflows",
        ],
      },
      {
        projectname: "Licensing Stack POC",
        tasks: [
          "Built monolithic backend with django REST for issueing licenses & validation of libraries (over PyPi) using RSA256 algorithm.",
          "Worked on caching API request to minimize database queries and implement rate limiting.",
          "Used docker container monitoring tools like Prometheus, cAdvisor, nodeExporter for usage statistics and built CI/CD pipelines using Jenkins to publish artifacts."
        ],
      },
    ],
  },
];
