import React from 'react';

const Home = () => {
    return (
        <div className='container'>
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
        </div>
    );
};

export default Home;