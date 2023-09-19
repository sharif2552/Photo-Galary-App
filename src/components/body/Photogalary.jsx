import React, { useState } from 'react';
import Photo from './Photo'; // Corrected the import statement
import PHOTO_GALLERY from '../../data/photos';

const PhotoGallery = () => { // Changed 'Photogalary' to 'PhotoGallery'
    const [photos] = useState(PHOTO_GALLERY);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const onSelectPhoto = (photo) => {
        setSelectedPhoto(photo);
    };

    const photoItems = photos.map((photo) => (
        <Photo photo={photo} onSelectPhoto={onSelectPhoto} key={photo.id} /> // Changed '<photo' to '<Photo'
    ));

    const photoDetail = selectedPhoto ? <Photo photo={selectedPhoto} /> : null;

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-5">{photoItems}</div>
                    <div className="col-7">{photoDetail}</div>
                </div>
            </div>
            <h1>hello there</h1>
        </div>
    );
};

export default PhotoGallery;
