import React from 'react';

const Review = (props) => {
    //Destructuring
    const { name, comment, photo } = props.review;
    return (
        <div className='col-lg-4 float-left mb-5'>
            <div className="card h-100">
                <img src={photo} className="card-img-top h-100" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">{comment}</p>
                </div>
            </div>
        </div >
    );
};

export default Review;