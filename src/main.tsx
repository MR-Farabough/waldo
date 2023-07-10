import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router.tsx';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</React.StrictMode>
);
