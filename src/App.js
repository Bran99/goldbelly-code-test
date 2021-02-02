import React from 'react';
import NewUrl from './components/NewUrl';
import UrlsList from './components/UrlsList';
import UrlState from './context/url/UrlState';

import './App.css';

const App = () => {
	return (
		<UrlState>
			<NewUrl />
			<UrlsList />
		</UrlState>
	);
};

export default App;
