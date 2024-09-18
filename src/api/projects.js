const getProjects = async () => {
  const response = await fetch(
    process.env.REACT_APP_GITHUB_API + 'majdassad22/repos'
  );
  const projects = await response.json();
  console.log(projects);
  return projects;
};

export default getProjects;
