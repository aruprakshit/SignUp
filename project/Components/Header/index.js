import React from 'react';
import Image from './Image';
import Content from './Content';

export default function Header(props) {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card flex-md-row mb-4 border-0 Header">
          <Image />
          <Content
            name={props.name}
            timeframe={props.timeframe}
            projectType={props.project_type}
          />
        </div>
      </div>
    </div>
  );
}
