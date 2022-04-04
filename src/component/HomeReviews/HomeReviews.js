import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const HomeReviews = (props) => {
    const { name, photo, comment } = props.item

    return (
        <div className='col-lg-4  mb-5'>
            <div className="card h-100 ">
                <img src={photo} className="card-img-top " alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">{comment}</p>
                </div>
                <div className='ps-3 pb-3'>
                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                </div>
            </div>
        </div >
    );
};

export default HomeReviews;