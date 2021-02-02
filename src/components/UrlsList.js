import React, { useEffect, useContext } from 'react';
import UrlItem from './UrlItem';
import Spinner from './layout/Spinner';
import UrlContext from '../context/url/urlContext';

export const UrlsList = () => {
	const urlContext = useContext(UrlContext);

	const { loading, getUrls, urls } = urlContext;

	useEffect(() => {
		getUrls();
		// eslint-disable-next-line
	}, []);

	if (loading) {
		return <Spinner />;
	} else {
		return (
			<table className='url-list'>
				<thead>
					<tr>
						<th>Shortened Url</th>
						<th>Slug</th>
						<th>Original Url</th>
					</tr>
				</thead>
				<tbody>
					{urls.map((url, index) => (
						<tr className='url-item'>
							<UrlItem key={index + url.slug} url={url} />
						</tr>
					))}
				</tbody>
			</table>
		);
	}
};

export default UrlsList;
