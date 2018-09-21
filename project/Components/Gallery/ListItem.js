import React from 'react';

const Video = ({ name, thumbUrl, secureUrl }) => {
  return (
    <video controls className="image">
      <source src={thumbUrl} />
      Sorry, your browser doesn't support embedded videos, but don't worry, you
      can <a href={secureUrl}>download it</a>
      and watch it with your favorite video player!
    </video>
  );
};

const Image = ({ name, thumbUrl, showLightBox }) => (
  <img src={thumbUrl} alt={name} className="image"/>
);

const Pdf = ({ name, thumbUrl }) => (
  <img src={thumbUrl} alt={name} className="image" onClick={() => window.open(thumbUrl)} />
);

const WordDoc = ({ thumbUrl }) => (
  <i
    className="fa fa-file-word-o image"
    style={{ fontSize: '167px', color: '#3e18f1' }}
    aria-hidden="true"
    onClick={() => window.open(thumbUrl)}
  />
);

const LisItem = ({ document }) => {
  const { contentType } = document;

  if (contentType.match(/^video\//)) {
    return <Video {...document} />;
  } else if (contentType.match(/^image\//)) {
    return <Image {...document} />;
  } else if (contentType === 'application/pdf') {
    return <Pdf {...document} />;
  } else if (
    [
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ].includes(contentType)
  ) {
    return <WordDoc {...document} />;
  } else {
    return null;
  }
};

export default LisItem;
