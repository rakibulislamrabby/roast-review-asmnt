import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setreview] = useState([])
    useEffect(() => {
        fetch("fakedata.json")
            .then(res => res.json())
            .then(data => setreview(data))
    }, [])
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