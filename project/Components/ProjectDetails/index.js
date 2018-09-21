import React, { Component } from 'react';
import Paint from './Paint';

// const components = {
//   countertops: CounterTopsFields,
//   drywall: DrywallFields,
//   hondymanJobs: null,
//   landscape: LandscapeFields,
//   paint: PaintFields,
//   electrical: ElectricalFields,
//   kitchenCabinet: null,
//   plumbing: null,
//   other: null
// };

const components = {
  paint: Paint
};

export default class ProjectDetails extends Component {
  renderComponent() {
    const { project } = this.props;
    const ProjectType = components[project.projectType]
    switch (project.projectType) {
      case 'paint':
        return <ProjectType props={this.props.paintProps} />
      default:
        break;
    }
  }
  render() {
    const { project } = this.props;

    return (
      <div className="row">
        <div className="col-md-7"></div>
        <div className="col-md-5">
          <p>Description</p>
          <p>{project.description}</p>
        </div>
      </div>
    )
  }
}
