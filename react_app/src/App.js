import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Registration from './components/Registration';
import Customer from './components/ExistingCustomer';


function App() {
	return (
		<Router>
			<div className="container-fluid bg-primary text-white p-3 ">
				<h1>Welcome to Telecom Customer Management System</h1>
			</div>
			<NavigationBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/registration" element={<Registration />} />
				<Route path="/Customer" element={<Customer />} />
			</Routes>
		</Router>
	);
}


export default App;