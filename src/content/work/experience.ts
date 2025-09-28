import { Experience } from "../../interface";

export const experiences: Experience[] = [
  {
    role: "Strategy and Transformation Assistant Analyst",
    company: "PepsiCo, Inc.",
    website: "https://pepsico.com",
    date: "Aug '24 - Present",
    companyproject: [
      {
        projectname: "ServiceNow Analyst",
        tasks: [
          "Automated 1000+ monthly tickets via ServiceNow REST APIs reducing mean time to resolve tickets",
          "Built custom notification templates in JavaScript, providing standardized interface for platform alerts",
          "Built SharePoint Framework web parts with React for Product Development Page to improve usability & user engagement",
          "Ensured zero downtime for Platform Upgrade using ATFs & automated notification testing in Python, saving 120+ hours"
        ],
      }
    ]
  },
  {
    role: "Global IT Intern",
    company: "PepsiCo, Inc.",
    website: "https://pepsico.com",
    date: "Jan - June '24",
    companyproject: [
      {
        projectname: "Predictive Operations and Hyper Automation",
        tasks: [
          "Trained ML models (XGBoost) for ticket assignment, achieving 78.3% accuracy, cutting effort across 110k tickets/month",
          "Composed Ansible scripts, automating server configuration and recovery processes, reducing manual intervention",
          "Configured Elastic Agent & Logstash within the Elastic stack for monitoring, enhancing system performance and reliability",
        ],
      }
    ]
  },
  {
    role: "Full Stack Developer Intern",
    company: "HomeDrop",
    website: "https://homedrop.in",
    date: "Nov - December, '23",
    companyproject: [
      {
        projectname: "Serverless backend API",
        tasks: [
          "Optimized invoice generation endpoint and contributed to feature for sending user receipts through WhatsApp API.",
          "Build service to scrape product data through UPC",
          "Worked with database triggers to update secondary collection",
        ],
      },
    ],
  },
  {
    role: "DevOps Intern",
    company: "Flipr Innovation Labs",
    website: "https://flipr.ai",
    date: "May - July '23",
    companyproject: [
      {
        projectname: "Workspace Monitoring Tool",
        tasks: [
          "Developed a cross platform tool for workspace monitoring with Electron, React & Rust",
          "Built and deployed serverless API with golang gin framework to AWS Lambda having user authentication with JWT and OAuth",
          "Set up automated releases of the app for all platforms through GitHub Actions",
        ],
      },
      {
        projectname: "Licensing Stack POC",
        tasks: [
          "Built monolithic backend with django REST for issueing licenses & validation of libraries (over PyPi) using RSA256-based key generation, async job queues, Redis caching, and JWT Auth;",
          "Worked on caching API request to minimize database queries and implement rate limiting; automated monitoring.",
          "Used docker container monitoring tools like Prometheus, cAdvisor, nodeExporter for usage statistics and built CI/CD pipelines using Jenkins to publish artifacts."
        ],
      },
    ],
  },
];
