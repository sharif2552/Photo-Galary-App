import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import FeedbackForm  from './FeedbackForm';
import FeedbackForm2  from './FeedbackForm2';

const PhotoDetails = ({ photo }) => { // Added curly braces to access the 'photo' prop
    return (
        <div>
            <Card className="my-2">
                <CardImg
                    alt="Card image cap"
                    src={photo.image}
                    style={{
                        height: '100%',
                    }}
                    top
                    width="100%"
                />
                <CardBody style={{ textAlign: 'left' }}>
                    <CardTitle tag="h5">{photo.title}</CardTitle>
                    <CardText>{photo.description}</CardText>
                    {/* <CardText>{photo.price}/-</CardText> */}
                    <hr />
                </CardBody>
            </Card>


            <FeedbackForm contentId = {photo.id}  />
            <FeedbackForm2 contentId = {photo.id}  />

        </div>
    );
};

export default PhotoDetails;
