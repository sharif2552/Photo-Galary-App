import React, { useState } from 'react';
import Photo from './Photo'; // Corrected the import statement
import PHOTO_GALLERY from '../../data/photos';
import PhotoDetails from './PhotoDetails';
import './css/new.css';



const PhotoGallery = () => { // Changed 'Photogalary' to 'PhotoGallery'
    const [photos] = useState(PHOTO_GALLERY);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const onSelectPhoto = (photo) => {
        setSelectedPhoto(photo);
    };

    const photoItems = photos.map((photo) => (
        <Photo photo={photo} onSelectPhoto={onSelectPhoto} key={photo.id} /> // Changed '<photo' to '<Photo'
    ));
    const [selectedCategory, setSelectedCategory] = useState('All'); // Initialize with 'All'

    const selectPhoto = selectedPhoto ? <PhotoDetails photo={selectedPhoto} /> : null;
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    const filteredPhotos = selectedCategory === 'All'
    ? photos
    : photos.filter((photo) => photo.category === selectedCategory);


    return (
        <div>
            <div className="category-dropdown">
                <label htmlFor="category">Select Category: </label>
                <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="All">All</option>
                    <option value="Nature">Nature</option>
                    <option value="City">City</option>
                    {/* Add more category options */}
                </select>
            </div>







            <div>

        <div className="container">
            <div className="row">
                <div className="col-5 photo-list">
                <div className="col-5 photo-list__single-item">{filteredPhotos.map((photo) => (
                        <Photo className= 'signle_photo' photo={photo} onSelectPhoto={onSelectPhoto} key={photo.id} />
                    ))}
                </div>
                </div>
                <div className="col-7 photo-details">
            {/* Render photos based on the selected category */}
            <div className="container">
                <div className="row">


                    <div className="col-7">{selectPhoto}</div>
                </div>
            </div>
                </div>
            </div>
        </div>
    </div>

        </div>
    );
};

export default PhotoGallery;
