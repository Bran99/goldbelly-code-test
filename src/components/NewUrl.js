import React, { useState, useContext } from 'react';
import UrlContext from '../context/url/urlContext';

const NewUrl = () => {
	const urlContext = useContext(UrlContext);

	const [url, setUrl] = useState('');
	const [slug, setSlug] = useState('');

	const handleChange = e => setUrl(e.target.value);

	const handleSlugChange = e => setSlug(e.target.value);

	const handleSubmit = e => {
		e.preventDefault();

		// Validate url
		if (url === '') {
			alert('Please enter something');
		}

		urlContext.createUrl(url, slug);

		setUrl('');
	};
	return (
		<div className='new-url-form'>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='url'
					placeholder='Enter URL to be shortened'
					value={url}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='slug'
					placeholder='Enter a slug (optional)'
					value={slug}
					onChange={handleSlugChange}
				/>
				<input type='submit' value='Submit' />
			</form>
		</div>
	);
};

export default NewUrl;
