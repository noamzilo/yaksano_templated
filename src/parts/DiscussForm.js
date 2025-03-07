/* eslint-disable linebreak-style */
/* eslint-disable no-useless-escape */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { Fade } from 'react-awesome-reveal';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer, toast } from 'react-toastify';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-toastify/dist/ReactToastify.css';

import { Form } from 'elements/Form';
import Button from 'elements/Button';

export const DiscussForm = (actions) => {
	const { data, resetForm } = actions;
	const [isSubmitting, setIsSubmitting] = useState(false);

	const submitEmail = async () => {
		const { name, company, email, phone, projectIdea } = data;
	
		if (!name || !company || !email || !phone || !projectIdea) {
			toast.error('Please fill out all fields.');
			return;
		}

		setIsSubmitting(true);
	
		try {
			const response = await fetch('https://personal-website-backend-839353010571.us-central1.run.app/api/send-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify({ 
					name, 
					company, 
					email, 
					phone, 
					content: projectIdea 
				}),
			});
	
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
	
			const result = await response.json();
			toast.success('Success! We will get back to you soon.');
			resetForm();
		} catch (error) {
			console.error('Error sending email:', error);
			toast.error('Error sending email. Please try again.');
		} finally {
			setIsSubmitting(false);
		}
	};
	

	return (
	  <section className="flex flex-col container mx-auto mt-10 justify-center">

	    <Fade direction="down" triggerOnce>
	      <h1 className="text-5xl text-theme-blue text-center font-bold">Lets Discuss</h1>
	    </Fade>

	    <Fade direction="up" triggerOnce>
	      <p className="font-light text-lg text-gray-400 text-center mb-12">
	        {/* eslint-disable-next-line react/no-unescaped-entities */}
	        Please fill out the form below to discuss your project and we'll get back to you in less than 24 hours.
	      </p>
	    </Fade>

	    <Fade direction="up" triggerOnce>
	      <div className="flex flex-col">
	        <div className="flex flex-col sm:flex-row mx-auto">
	          <Form
	            id="name"
	            name="name"
	            type="text"
	            value={data.name}
	            placeholder="Your name"
	            className=""
	            onChange={actions.onChange}
	          />
	          <Form
	            id="company"
	            name="company"
	            type="text"
	            value={data.company}
	            placeholder="Your company"
	            className=""
	            onChange={actions.onChange}
	          />
	        </div>

	        <div className="flex flex-col sm:flex-row mx-auto">
	          <Form
	            id="email"
	            name="email"
	            type="email"
	            value={data.email}
	            placeholder="Your email address"
	            className=""
	            onChange={actions.onChange}
	          />
	          <Form
	            id="phone"
	            name="phone"
	            type="tel"
	            value={data.phone}
	            placeholder="Your contact number"
	            className=""
	            onChange={actions.onChange}
	          />
	        </div>

	        <div className="mx-auto">
	          <Form
	            id="projectIdea"
	            name="projectIdea"
	            type="textarea"
	            value={data.projectIdea}
	            placeholder="Explain about your project idea"
	            className=""
	            onChange={actions.onChange}
	          />
	        </div>
	        <Button
	          className="text-xl mx-auto px-12 py-3 mt-5 rounded-full border-2 transition duration-200 focus:outline-none"
	          style={{
	            backgroundColor: isSubmitting ? '#9CA3AF' : 'var(--theme-purple)',
	            borderColor: isSubmitting ? '#9CA3AF' : 'var(--theme-purple)',
	            color: isSubmitting ? '#4B5563' : 'white',
	            cursor: isSubmitting ? 'not-allowed' : 'pointer',
	            opacity: isSubmitting ? 0.7 : 1
	          }}
	          type="button"
	          onClick={submitEmail}
	          disabled={isSubmitting}
	        >
	          {isSubmitting ? 'Sending...' : 'Submit'}
	        </Button>
	      </div>
	    </Fade>

	    <ToastContainer />

	  </section>
	);
};
