import React from 'react';
import useFetchProjects from '../fetchProjects';

const Project = () => {
  const { loading, project } = useFetchProjects();

  if (loading) {
    return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {project.map((projects) => {
          const { id, img, title, url } = projects;

          return (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <img src={img} alt={title} className="img" />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
