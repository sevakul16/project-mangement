import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectState, setPropjectState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function handleStartNewProject() {
    setPropjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }

  let content;

  if (projectState.selectedProject === null) {
    content = <NewProject onStartAddProject={handleStartNewProject} />;
  } else if (projectState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartNewProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartNewProject} />
      {content}
    </main>
  );
}

export default App;
