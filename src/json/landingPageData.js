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
import Ilya from '../assets/images/Testimonials/Ilya.jpeg';
import Evgeny from '../assets/images/Testimonials/Evgeny.jpeg';
import Meir from '../assets/images/Testimonials/Meir.jpeg';

// TeamMembers
import Zilo from '../assets/images/TeamMembers/Zilo.jpg';
import Daniel from '../assets/images/TeamMembers/Daniel.jpeg';
import Steiner from '../assets/images/TeamMembers/Steiner.jpeg';
import Ivan from '../assets/images/TeamMembers/Ivan.jpeg';


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
	  name: 'Ilya G',
	  company: 'UVEye',
	  testimoni: "I've had the privilege of managing Noam for a little more than two years, and in that time, I have known him to be a serious and well-grounded professional. His work is thorough, well-planned, and his execution consistently exceeds expectations.\n\nThis has been incredibly valuable when working with him, as our team is small and requires precise and rapid delivery. He demonstrates exceptional work ethic, and on a personal level, he is truly a pleasure to work with\n\nThe infrastructure he developed is a crucial backbone of many of our current tools, which rely on it, proving to be a robust solution that stands the test of time",
	  imageUrl: Ilya,
	},
	{
		id: 2,
		name: 'Evgeny G',
		company: 'IAF',
		testimoni: "Noam and I worked together in the Israeli Air Force, developing a real-time system for registering and tracking aerial imagery. His ability to seamlessly integrate software engineering with computer vision made a complex task significantly more manageable.\n\nWhat impressed me most was his analytical mindset—he didn't just implement solutions, he constantly evaluated and refined them to maximize efficiency. Whether it was optimizing performance, improving data handling, or troubleshooting under tight deadlines, Noam always brought well-thought-out strategies to the table. \n\nBeyond his technical skills, Noam's proactive approach and collaborative spirit made a huge impact on our team. He was always willing to share insights, mentor others, and ensure we were aligned on both the big picture and the technical details. Working with him was both productive and rewarding, and I wouldn’t hesitate to do so again.",
		imageUrl: Evgeny,
	  },
	{
		id: 3,
		name: 'Meir H',
		company: 'IAF',
		testimoni: "During our time in the Israeli Air Force, Noam played an essential role in designing and implementing a real-time aerial imagery tracking system. His ability to take complex technical challenges and turn them into structured, effective solutions set him apart.\n\nHe doesn’t just focus on writing code—he takes a system-wide approach, ensuring everything is efficient, maintainable, and scalable. Noam has a natural ability to simplify intricate problems, which made working with him incredibly smooth. His technical expertise was crucial, but his ability to clearly communicate and align the team made an even bigger impact.\n\nIf you're looking for someone who combines technical depth with strategic thinking, Noam is an exceptional choice. He brings both the skill and mindset needed to drive projects forward with precision and reliability.",
		imageUrl: Meir,
	  },
];

export const TeamMembers = [
	{
	  name: 'Noam Salomonski',
	  position: 'Founder & Lead Engineer',
	  linkedin: 'https://www.linkedin.com/in/noam-salomonski/',
	  imageUrl: Zilo,
	},
	{
	  name: 'Daniel R.',
	  position: 'Media & Marketing Lead',
	  linkedin: 'https://www.linkedin.com/in/razumovdaniel/',
	  imageUrl: Daniel,
	},
	{
	  name: 'Noam S.',
	  position: 'Software Engineer',
	  linkedin: 'https://www.linkedin.com/in/noamsteiner/',
	  imageUrl: Steiner,
	},
	{
		name: 'Ivan S.',
		position: 'Software Engineer',
		linkedin: 'https://www.linkedin.com/in/ivan-solodov/',
		imageUrl: Ivan,
	  },
];
