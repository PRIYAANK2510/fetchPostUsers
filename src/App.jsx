import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
	const [name, setName] = useState('');
	const [datas, setDatas] = useState(null);
	function handleAddName() {
		axios
			.post('https://jsonplaceholder.typicode.com/users', { name })
			.then((response) => {
				console.log('Added name:', response.data);
			})
			.catch((error) => {
				console.error('Error adding name:', error);
			});
		setDatas([...datas, { name: name }]);
	}
	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				setDatas(response.data);
			})
			.catch((error) => {
				console.error('Error fetching name:', error);
			});
	}, []);

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Digikull Students</h1>
			</header>
			<main>
				<h4>Hello User</h4>
				<div className='search'>
					<label>Name:</label>
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<button onClick={handleAddName}>Add</button>
				</div>
				{datas && (
					<div className='output'>
						{datas.map((obj, index) => (
							<p key={index}>{obj.name}</p>
						))}
					</div>
				)}
			</main>
		</div>
	);
}

export default App;
