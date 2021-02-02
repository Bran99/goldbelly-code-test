import PropTypes from 'prop-types';
import React, { Fragment, useContext } from 'react';
import UrlContext from '../context/url/urlContext';

export const UrlItem = ({ url: { short_url, slug, url } }) => {
	const urlContext = useContext(UrlContext);

	const deleteUrl = e => {
		e.preventDefault();

		urlContext.deleteUrl(url, slug);
	};

	return (
		<Fragment>
			<td>
				<a href={short_url}>{short_url}</a>
			</td>
			<td>{slug}</td>
			<td>
				<a href={url}>{url.length < 50 ? url : `${url.slice(0, 50)}…`}</a>
			</td>
			<td>
				<button onClick={deleteUrl}>Delete</button>
			</td>
		</Fragment>
	);
};

UrlItem.propTypes = {
	url: PropTypes.object.isRequired
};

export default UrlItem;
