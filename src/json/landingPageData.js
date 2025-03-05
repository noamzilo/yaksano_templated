/* eslint-disable import/extensions */

// Services Img Imports
import AI from '../assets/images/Services/AI2.jpg';
import CV from '../assets/images/Services/CV6.jpg';
import WEB from '../assets/images/Services/WEB2.jpg';

// Portfolio Img Imports
import EPD from '../assets/images/Portfolio/yaksano/EPD.jpg';
import AIRFORCE from '../assets/images/Portfolio/yaksano/AIRFORCE.jpg';
import justgptit from '../assets/images/Portfolio/yaksano/justgptit.jpg';
import seo_site from '../assets/images/Portfolio/yaksano/seo_site.jpg';
import UVEYE1 from '../assets/images/Portfolio/yaksano/uveye1.jpg';
import UVEYE2 from '../assets/images/Portfolio/yaksano/uveye2.jpg';

// Advantages
import Communicative from '../assets/images/Advantages/Communicative.png';
import Collaborative from '../assets/images/Advantages/Collaborative.png';
import Management from '../assets/images/Advantages/Management.png';
import Favorite from '../assets/images/Advantages/Favorite.png';

// Testimonials
import Sasha from '../assets/images/Testimonials/Sasha.jpg';
import Reiner from '../assets/images/Testimonials/Reiner.jpg';
import Kruger from '../assets/images/Testimonials/Kruger.jpg';

// TeamMembers
import CEO from '../assets/images/TeamMembers/CEO.jpg';
import HRD from '../assets/images/TeamMembers/HRD.jpg';
import Finance from '../assets/images/TeamMembers/Finance.jpg';
import ProjectManager from '../assets/images/TeamMembers/Project-manager.jpg';
import Frontend1 from '../assets/images/TeamMembers/Frontend1.jpg';
import Frontend2 from '../assets/images/TeamMembers/Frontend2.jpg';
import Backend1 from '../assets/images/TeamMembers/Backend1.jpg';
import Backend2 from '../assets/images/TeamMembers/Backend2.jpg';
import Mobile1 from '../assets/images/TeamMembers/Mobile1.jpg';
import Mobile2 from '../assets/images/TeamMembers/Mobile2.jpg';
import UIUX1 from '../assets/images/TeamMembers/UIUX1.jpg';
import UIUX2 from '../assets/images/TeamMembers/UIUX2.jpg';

export const Services = [
	{
	  title: 'Data Engineering & AI',
	  imageUrl: AI,
	  animation: 'left',
	},
	{
	  title: 'Computer Vision',
	  imageUrl: CV,
	  animation: 'up',
	},
	{
	  title: 'Web Development & LLMs',
	  imageUrl: WEB,
	  animation: 'right',
	},
];

export const Portfolios = [
	{
	  id: 'automotive-pipeline',
	  title: 'Automotive Data Pipeline',
	  imageUrl: UVEYE1,
	  type: 'Data Engineering',
	  description: 'Designed and implemented scalable data pipelines processing over 1 million images weekly. Automated data workflows reduced manual processing time by 95%.',
	  responsibility: [
	    'Data Pipeline Development',
	    'Process Automation',
	  ],
	  credit: 'UVeye',
	},
	{
	  id: 'medical-data',
	  title: 'Medical Data Processing',
	  imageUrl: EPD,
	  type: 'Data Engineering',
	  description: 'Developed real-time cardiac mapping system processing complex medical data streams. Automated workflows transformed manual processes into efficient operations.',
	  responsibility: [
	    'Real-time Processing',
	    'Medical Data Systems',
	  ],
	  credit: 'EPD Solutions',
	},
	{
	  id: 'aerial-processing',
	  title: 'Aerial Image Processing',
	  imageUrl: AIRFORCE,
	  type: 'Computer Vision',
	  description: 'Developed advanced aerial image registration, achieving a 90% improvement in processing speed while maintaining accuracy.',
	  responsibility: [
	    'Image Registration',
	    'Military Applications',
	  ],
	  credit: 'Israel Air Force',
	},
	{
	  id: 'justgptit',
	  title: 'JustGptIt.com',
	  imageUrl: justgptit,
	  type: 'Web Development',
	  description: 'Built a viral web application using modern cloud architecture and serverless tech. Thousands of users served with minimal costs.',
	  responsibility: [
	    'LLM Integration',
	    'Serverless Architecture',
	  ],
	  credit: 'Internal Project',
	},
	{
		id: 'vehicle-inspection',
		title: 'Automated Vehicle Inspection',
		imageUrl: UVEYE2,
		type: 'Computer Vision',
		description: 'Implemented computer vision algorithms with 95% detection accuracy in automotive defect detection. Optimized image processing pipelines for real-time performance.',
		responsibility: [
		  'Computer Vision',
		  'Real-time Processing',
		],
		credit: 'UVeye',
	  },
	{
	  id: 'ai-content',
	  title: 'AI Content Generation',
	  imageUrl: seo_site,
	  type: 'Web Development',
	  description: 'A network of websites that use AI to generate content. Monetized through ads, supporting 100K+ users monthly.',
	  responsibility: [
	    'AI Content Generation',
	    'Web Development',
	  ],
	  credit: 'Internal Project',
	},
];

export const Advantages = [
	[{
	  title: 'AI Expertise',
	  description: 'Deep expertise in artificial intelligence and machine learning solutions.',
	  imageUrl: Communicative,
	},
	{
	  title: 'Scalable Solutions',
	  description: 'Building robust, scalable systems that grow with your needs.',
	  imageUrl: Management,
	}],
	[{
	  title: 'Data-Driven',
	  description: 'Transforming raw data into valuable business insights.',
	  imageUrl: Collaborative,
	},
	{
	  title: 'Innovation',
	  description: 'Staying ahead with cutting-edge technology and approaches.',
	  imageUrl: Favorite,
	}],
];
export const Testimonials = [
	{
	  id: 1,
	  name: 'Sasha Rose',
	  company: 'Owner, Surveyor Corps',
	  testimoni: 'Thanks for Yaksano, you guys are the best! Keep up the great work!',
	  imageUrl: Sasha,
	},
	{
	  id: 2,
	  name: 'Kruger Khan',
	  company: 'Director, Shultan Oil',
	  testimoni: 'fake testimonial',
	imageUrl: Kruger,
	},
	{
	  id: 3,
	  name: 'Reiner John',
	  company: 'CEO, Marley CO',
	  testimoni: 'Yaksano is so great. Thank you so much for a job well done.',
	  imageUrl: Reiner,
	},
];

export const TeamMembers = [
	{
	  name: 'Rach David',
	  position: 'CEO',
	  imageUrl: CEO,
	},
	{
	  name: 'Pauline Sydney',
	  position: 'HRD',
	  imageUrl: HRD,
	},
	{
	  name: 'Granger Watterson',
	  position: 'Finance',
	  imageUrl: Finance,
	},
	{
	  name: 'Tom Jimmy',
	  position: 'Project Manager',
	  imageUrl: ProjectManager,
	},
	{
	  name: 'Jim Hendrix',
	  position: 'Front-end Developer',
	  imageUrl: Frontend1,
	},
	{
	  name: 'Calvin Max',
	  position: 'Front-end Developer',
	  imageUrl: Frontend2,
	},
	{
	  name: 'Hawkins Jim',
	  position: 'Back-end Developer',
	  imageUrl: Backend1,
	},
	{
	  name: 'Don Bizaro',
	  position: 'Back-end Developer',
	  imageUrl: Backend2,
	},
	{
	  name: 'Bill Markinson',
	  position: 'Mobile Developer',
	  imageUrl: Mobile1,
	},
	{
	  name: 'Igor Kavarov',
	  position: 'Mobile Developer',
	  imageUrl: Mobile2,
	},
	{
	  name: 'Freddie Curl',
	  position: 'UI/UX Designer',
	  imageUrl: UIUX2,
	},
	{
	  name: 'Monica Lovegood',
	  position: 'UI/UX Designer',
	  imageUrl: UIUX1,
	},
];
