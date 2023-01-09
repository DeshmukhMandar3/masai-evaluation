import React from "react";
import Navbar from "../components/navbar";
import ProjectsCard from "../components/ProjectsCard";

const Projects = ({ proj }) => {
  let items = proj.items;
  return (
    <div>
      {" "}
      <Navbar />
      <ProjectsCard items={items} />
      Projects
    </div>
  );
};

export default Projects;

export async function getStaticProps() {
  let res1 = await fetch(
    "https://api.github.com/search/repositories?q=user:DeshmukhMandar3+fork:true&sort=updated&per_page=10&type=Repositories"
  );
  let data1 = await res1.json();

  return {
    props: {
      proj: data1,
    },
  };
}
