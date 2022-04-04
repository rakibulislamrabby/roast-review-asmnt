import React, { useEffect, useState } from 'react';
import useReviews from '../hooks/UseReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setreviews] = useReviews();
    return (
        <div className='container mt-5'>
            <h3 className='text-center mb-4 '> Customer Review section</h3>
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