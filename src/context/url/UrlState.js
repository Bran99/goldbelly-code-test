import React, { useReducer } from 'react';
import axios from 'axios';
import UrlContext from './urlContext';
import UrlReducer from './urlReducer';
import { GET_URLS, SET_LOADING } from '../types';

let gbAccessToken;

if (process.env.NODE_ENV !== 'production') {
	gbAccessToken = process.env.REACT_APP_GB_ACCESS_TOKEN;
} else {
	gbAccessToken = process.env.GB_ACCESS_TOKEN;
}
const UrlState = props => {
	const initialState = {
		urls: [],
		url: '',
		slug: '',
		loading: false
	};

	const [state, dispatch] = useReducer(UrlReducer, initialState);

	// Get Urls
	const getUrls = async () => {
		setLoading();

		const options = {
			headers: { 'GB-Access-Token': gbAccessToken }
		};

		const res = await axios.get(`https://api.bely.me/links`, options);
		dispatch({
			type: GET_URLS,
			payload: res.data.reverse()
		});
	};

	// Create Url
	const createUrl = async (url, slug = null) => {
		const options = {
			headers: { 'GB-Access-Token': gbAccessToken }
		};

		const data = {
			url: url
		};

		if (slug !== null) data['slug'] = slug;

		const res = await axios.post(
			`https://api.bely.me/links/${state.slug}`,
			data,
			options
		);

		if (res.status === 201) getUrls();
		else alert('Error!');
	};

	// Delete URL
	const deleteUrl = async (url, slug) => {
		const options = {
			headers: { 'GB-Access-Token': gbAccessToken }
		};

		const data = {
			url: url
		};

		if (slug !== null) data['slug'] = slug;

		const res = await axios.delete(
			`https://api.bely.me/links/${slug}`,
			options
		);

		if (res.status === 204) getUrls();
		else alert('Error!');
	};

	// Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<UrlContext.Provider
			value={{
				urls: state.urls,
				url: state.url,
				slug: state.slug,
				loading: state.loading,
				getUrls,
				createUrl,
				deleteUrl,
				setLoading
			}}
		>
			{props.children}
		</UrlContext.Provider>
	);
};

export default UrlState;
