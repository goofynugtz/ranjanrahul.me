import { project } from "../interface";
import styles from '../styles/projects.module.css'

export const projects: project[] = [
  {
    title: "Text Prediction",
    description: "Generative Pretrained Transformer using BigramLanguage model on a frontend. ",
    github: "https://github.com/goofynugtz/gpt-text-prediction",
    deployment: "https://predictions.ranjanrahul.me/",
    thumbnail: {
      dark: "/projects/gpt_dark.png",
      light: "/projects/gpt_light.png",
    },
    class: styles.project1,
  },

  {
    title: "IndiaAtStats",
    description: "",
    github: "https://github.com/goofynugtz/indiaAtStats",
    deployment: "https://indistats.ranjanrahul.me/",
    thumbnail: {
      dark: "/projects/indiaAtStats.png",
      light: "/projects/indiaAtStats.png",
    },
    class: styles.project2,
  },
  
  {
    title: "Search Engine",
    description: "",
    github: "https://github.com/goofynugtz/search-engine",
    deployment: "https://search.ranjanrahul.me",
    thumbnail: {
      dark: "/projects/search-enigne-dark.png",
      light: "/projects/search-enigne-light.png",
    },
    class: styles.project3,
  },
]
