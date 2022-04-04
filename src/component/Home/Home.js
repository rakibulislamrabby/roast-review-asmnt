import React from 'react';
import { Link } from 'react-router-dom';
import HomeReviews from '../HomeReviews/HomeReviews';
import useReviews from '../hooks/UseReviews';

const Home = () => {
    const [reviews, setreviews] = useReviews();
    const threeReviews = reviews.slice(0, 3);
    return (
        <div className='container '>
            <div className='row mt-5'>
                <div className='col-lg-6 ps-5 pb-5'>
                    <h1>Your next Watch is Best in <span className='text-danger'>your hand</span>   </h1>

                    <p>Rather than be your run-of-the-mill fashion Chrono, the new Curren is set to be your “go anywhere, do anything” watch with a touch of class.Now, usually, if you try to jam too many characters into one movie, you end up with a jumbled mess that rarely achieves anything it sets out to do.Will a watch be the same?.</p>
                    <button className='btn btn-danger'>Live Demo</button>
                </div>
                <div className='col-lg-5 ps-5'>
                    <img className='w-75 ms-5 round' src="https://images.pexels.com/photos/8839604/pexels-photo-8839604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>

            </div>

            <div className='col-lg-12 my-5'>
                <h3 className='text-center mb-4'>Customer Review (3)</h3>
                <div className='row'>
                    {
                        threeReviews.map(item => <HomeReviews
                            key={item.id}
                            item={item}
                        ></HomeReviews>)
                    }
                </div>
                <div className='text-center'>
                    <button className='btn btn-danger '>
                        <Link className='text-white text-decoration-none' to="/reviews">See All Customer Review</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;