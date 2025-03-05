/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Layout } from 'components/Layout';

import {
  Services, Portfolios, Advantages, Testimonials,
} from 'json/landingPageData';
import Hero from 'parts/Hero';
import Service from 'parts/Service';
import Portfolio from 'parts/Portfolio';
import Advantage from 'parts/Advantage';
import Testimonial from 'parts/Testimonial';
import Discuss from 'parts/Discuss';

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Layout>
        <Hero />
        <Service data={Services} />
        <Portfolio data={Portfolios} />
        <Advantage data={Advantages} />
        <Testimonial data={Testimonials} />
        <Discuss />
      </Layout>
    );
  }
}
