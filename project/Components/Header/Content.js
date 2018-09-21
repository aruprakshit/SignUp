import React from 'react';

export default function Body({ name, timeframe, projectType }) {
  return (
    <div className="card-body d-flex flex-column align-items-start pt-1">
      <div className="d-flex align-items-start align-self-stretch">
        <ul className="Meta list-unstyled text-left">
          <li className="Project-Name">{name}</li>
          <li className="Project-Categ text-capitalize">
            <i
              className="fa fa-paint-brush Combined-Shape mr-2"
              aria-hidden="true"
            />
            {projectType}
          </li>
          <li className="Project-Duration">
            <i className="fa fa-clock-o mr-2" aria-hidden="true" />
            {timeframe}
          </li>
        </ul>
        <button className="btn btn-default Active-Btn">Active</button>
      </div>
      <div className="Tags">
        <div>
          <span>Wall Prep</span>
        </div>
        <div>
          <span>Paint</span>
        </div>
        <div>
          <span>Primer</span>
        </div>
      </div>
    </div>
  );
}
