/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable-next-line no-unused-vars */
import { Route, Routes } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import ProjectPage from 'pages/ProjectPage';
import NotFoundPage from 'pages/NotFoundPage';
import TeamPage from 'pages/TeamPage';
import { ProjectDetailPage } from 'pages/ProjectDetailPage';
import { DiscussProjectPage } from 'pages/DiscussProjectPage';

// New Imports
import DataEngineeringAI from 'pages/services/DataEngineeringAI';
import ComputerVision from 'pages/services/ComputerVision';
import WebDevelopmentLLMs from 'pages/services/WebDevelopmentLLMs';

import './assets/css/styles.css';

function App() {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<LandingPage />} />
				<Route path="/projects" element={<ProjectPage />} />
				<Route exact path="/projects/:id" element={<ProjectDetailPage />} />
				<Route exact path="/team" element={<TeamPage />} />
				<Route exact path="/discuss-project" element={<DiscussProjectPage />} />

				{/* New Service Detail Routes */}
				<Route path="/services/data-engineering-&-ai" element={<DataEngineeringAI />} />
				<Route path="/services/computer-vision" element={<ComputerVision />} />
				<Route path="/services/web-development-&-llms" element={<WebDevelopmentLLMs />} />

				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	);
}

export default App;
