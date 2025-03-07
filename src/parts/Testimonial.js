/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-boolean-value */
// eslint-disable-next-line react/no-array-index-key
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
	Navigation, Pagination, A11y, Autoplay,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Testimonial.module.css';

const TestimonialCard = ({ imageUrl, name, company, testimoni }) => (
	<div className={styles.testimonialCard}>
		<div className={styles.profileSection}>
			<img src={imageUrl} alt={`${name}'s testimonial`} className={styles.profileImage} />
			<div className={styles.profileInfo}>
				<h2 className={styles.profileName}>{name}</h2>
				<p className={styles.profileCompany}>{company}</p>
			</div>
		</div>
		<p className={styles.testimonialText}>{testimoni}</p>
	</div>
);

export default function Testimonial({ data }) {
	return (
		<section className={styles.container}>
			<Fade direction="up">
				<h1 className={styles.title}>Testimonials</h1>
				<p className={styles.subtitle}>What they said about us.</p>
			</Fade>

			<div className={styles.swiperContainer}>
				<Swiper
					modules={[Navigation, Pagination, A11y, Autoplay]}
					loop={true}
					navigation={true}
					autoplay={{ delay: 4000, disableOnInteraction: false }}
					pagination={{ clickable: true }}
				>
					{data.map((item) => (
						<SwiperSlide key={item.id}>
							<TestimonialCard {...item} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
