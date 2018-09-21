import React from 'react';
import ListItem from './ListItem';

export default function Gallery({ documents }) {
  return (
    <div className="d-flex flex-wrap justify-content-between Project-Gallery mt-3">
      {documents.allIds.map(documentId => (
        <div className="Project-Gallery-Item" key={documentId}>
          <ListItem document={documents.byId[documentId]} />
        </div>
      ))}
    </div>
  );
}
