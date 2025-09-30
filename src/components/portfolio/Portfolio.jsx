import "./portfolio.css";

import IMG1 from "../../assets/finScope.png";
import IMG2 from "../../assets/national-budget.png";
import IMG3 from "../../assets/Movie.png";
import IMG4 from "../../assets/study-sphere.png";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "finScope:AI-Based fintech platform. ",
      img: IMG1,
      description:
        "finScope is an AI-Based fintech platform that provides various financial services and tools.",
      technologies: "Javascript | React Js | Node Js | Express Js | MongoDB | OpenAI API",
      link: "https://fin-scope-six.vercel.app/",
      github: "https://github.com/Suraj-Yadav-dev/StudySphere.git",
    },
    {
      id: 2,
      title: "StudySphere: AI-Based Educational Platform. ",
      img: IMG4,
      description:
        "StudySphere is an AI-Based educational platform that provides various learning resources and tools.",
      technologies: "React | JavaScript | Express Js | Node.js |Firebase | MongoDB | OpenAI API",
      link: "https://study-sphere-tau.vercel.app/",
      github: "https://github.com/Suraj-Yadav-dev/StudySphere.git",
    },
    {
      id: 3,
      title: "National Budget Api system",
      img: IMG2,
      description: "Website for managing national budget data. The website is mainly functionally developed with JavaScript",
      technologies: "JavaScript |React.js | Node.js | Express.js | MongoDB",
      link: "",
      github: "",
    },
    {
      id: 4,
      title: "Movie Review Website",
      img: IMG3,
      description:
        "Movie Review Website for giving the Reviews and add watchlist built for  target audiences.",
      technologies: " JavaScript | React.js | Node.js | Express.js | MongoDB",
      link: "",
      github: "https://github.com/Suraj-Yadav-dev/Mymovies.git",
    },
   
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
