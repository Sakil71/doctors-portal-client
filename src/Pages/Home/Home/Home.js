import React from 'react';
import Banner from '../Banner/Banner';
import Options from '../Options/Options';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';
import useTitle from '../../../utilities/useTitle';

const Home = () => {
    useTitle('Home');

    return (
        <div>
            <Banner></Banner>
            <Options></Options>
            <Services></Services>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;