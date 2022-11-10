/* This example requires Tailwind CSS v2.0+ */
export default function ContactHeader() {
	return (
		<div className="max-w-7xl mx-auto pb-16 px-4 pt-2 sm:px-6 lg:px-8">
			<div className="relative bg-indigo-800 rounded-3xl shadow-2xl">
				<div className="absolute inset-0">
					<img
						className="w-full h-full object-cover rounded-3xl"
						src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
						alt=""
					/>
					<div
						className="absolute inset-0 bg-indigo-800 mix-blend-multiply rounded-3xl"
						aria-hidden="true"
					/>
				</div>
				<div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
					<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
						Get in touch
					</h1>
					<p className="mt-6 text-xl text-indigo-100 max-w-3xl">
						Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
						lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
						consectetur. Sit justo viverra non adipisicing elit distinctio.
					</p>
				</div>
			</div>
		</div>
	);
}
