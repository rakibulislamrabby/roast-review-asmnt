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
                <div className='col-lg-6 ps-5'>
                    <h1>Your next Watch Best in <span className='text-danger'>your hand</span>   </h1>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem sint unde dicta eius, quasi dolor itaque porro fugiat, adipisci aliquam quod exercitationem doloribus, qui beatae obcaecati laborum ducimus facere quis recusandae. Unde, cupiditate eos. Dignissimos tempore sequi tenetur rem unde aperiam quod assumenda eaque aspernatur, et excepturi exercitationem repellendus quaerat.</p>
                    <button className='btn btn-primary'>Live Demo</button>
                </div>
                <div className='col-lg-4 ps-5'>
                    <img className='w-100 round' src="https://images.pexels.com/photos/8839604/pexels-photo-8839604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>

            </div>

            <div className='col-lg-12 my-5'>
                <h2 className='text-center mb-4'>Customer Review</h2>
                <div className='row'>
                    {
                        threeReviews.map(item => <HomeReviews
                            key={item.id}
                            item={item}
                        ></HomeReviews>)
                    }
                </div>
                <button className='btn btn-danger text-center'>
                    <Link className='text-white text-decoration-none' to="/reviews">See All Customer Review</Link>
                </button>
            </div>
        </div>
    );
};

export default Home;