import React from 'react';
import { Router } from '@reach/router';

import HeaderContainer from '../Containers/HeaderContainer';
import Breadcrumb from './Breadcrumb';
import ProjectDetailsContainer from '../Containers/ProjectDetailsContainer';
import GalleryContainer from '../Containers/GalleryContainer';
import QuestionsContainer from '../Containers/QuestionsContainer';
import BidsContainer from '../Containers/BidsContainer';
import MainContainer from '../Containers/MainContainer';

export default function App(props) {
  return (
    <div className="container-fluid">
      <Breadcrumb />
      <div className="row">
        <article className="col-md-11 p-4 mx-auto Main-Article">
          <HeaderContainer />
          <Router>
            <MainContainer path="projects/:projectId">
              <ProjectDetailsContainer path="/" />
              <GalleryContainer path="gallery" />
              <QuestionsContainer path="questions" />
              <BidsContainer path="bids" />
            </MainContainer>
          </Router>
        </article>
      </div>
    </div>
  );
}
