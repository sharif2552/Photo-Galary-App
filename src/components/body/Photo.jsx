import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const Photo = ({ photo, onSelectPhoto }) => { // Changed 'onselectphoto' to 'onSelectPhoto'
  return (
    <div>
      <Card inverse style={{ padding: 10, margin: 10, cursor: 'pointer' }} onClick={() => onSelectPhoto(photo)}> {/* Changed 'onselectphoto' to 'onSelectPhoto' */}
        <CardImg
          alt={photo.title}
          src={photo.image}
          style={{
            opacity: 0.5,
          }}
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle tag="h5" style={{ fontSize: 25, fontWeight: 'bold', color: '#000' }}>
            {photo.name}
            {/* {photo.category} */}
          </CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default Photo;
