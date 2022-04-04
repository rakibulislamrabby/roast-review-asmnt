import React, { useEffect, useState } from 'react';
import useReviews from '../hooks/UseReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setreviews] = useReviews();
    return (
        <div className='container'>
            <h1 className='text-center'>Review section</h1>
            <div className='col-lg-12 '>
                <div className='row '>
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;