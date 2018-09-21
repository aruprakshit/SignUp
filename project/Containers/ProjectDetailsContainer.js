import React from 'react';
import { connect } from 'react-redux';

import ProjectDetails from '../Components/ProjectDetails';

function ProjectDetailsContainer(props) {
  return <ProjectDetails {...props} />;
}

const mapStateToProps = (state, ownProps) => {
  const project = state.projects.byId[ownProps.projectId];
  const {
    paints,
    rooms,
    electricals,
    countertops,
    edgeProfiles,
    materialColors
  } = project.projectType;

  const electricalProps = { electricals };
  const countertopsProps = { countertops, materialColors, edgeProfiles };
  const paintProps = {
    paints,
    rooms
  };
  return { project, paintProps, electricalProps, countertopsProps };
};

export default connect(mapStateToProps)(ProjectDetailsContainer);
