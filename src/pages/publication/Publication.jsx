import React, { useEffect, useState } from "react";
import axios from "axios";
import AnimatedPage from './../../components/AnimatedPage';

const Publication = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetchBooks();
	}, []);

	const fetchBooks = async () => {
		await axios
			.get(`http://localhost:8000/api/add-student`)
			.then(({ data }) => {
				console.log(data);
				setBooks(data);
			});
	};
	const files = [
		{
			id: 1,
			title: "IMG_4985.HEIC",
			size: "3.9 MB",
			source:
				"https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
		},
		{
			id: 2,
			title: "IMG_4985.HEIC",
			size: "3.9 MB",
			source:
				"https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
		},
	];
	return (
    <AnimatedPage>
		<div className="max-w-7xl mx-auto px-4 sm:px-6 h-screen ">
			<ul
				role="list"
				className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 py-10"
			>
				{files.map((file) => (
					<li key={file.id} className="relative">
						<div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
							<img
								src={file.source}
								alt=""
								className="object-cover pointer-events-none group-hover:opacity-75"
							/>
							<button
								type="button"
								className="absolute inset-0 focus:outline-none"
							>
								<span className="sr-only">View details for {file.title}</span>
							</button>
						</div>
						<p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
							{file.title}
						</p>
						<p className="block text-sm font-medium text-gray-500 pointer-events-none">
							{file.size}
						</p>
					</li>
				))}
			</ul>
		</div>
    </AnimatedPage>
	);
};

export default Publication;
