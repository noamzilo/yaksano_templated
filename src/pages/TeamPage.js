/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Layout } from 'components/Layout';

import HeroTeam from 'parts/HeroTeam';
import AllTeam from 'parts/AllTeam';

import { TeamMembers } from 'json/landingPageData';

export default class TeamPage extends Component {
	componentDidMount() {
	  window.scrollTo(0, 0);
	}

	render() {
	  return (
	    <Layout>
	      <HeroTeam />
	      <AllTeam data={TeamMembers} />
	    </Layout>
	  );
	}
}
