import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
	{ name: "Product", href: "#" },
	{ name: "Features", href: "#" },
	{ name: "Marketplace", href: "#" },
	{ name: "Company", href: "#" },
];

export default function Example() {
	return (
		<div className="max-w-7xl mx-auto px-4 lg:px-0 lg:pr-6 py-6 sm:py-12 lg:py-20">
			<div className="relative bg-white overflow-hidden">
				<div className="max-w-7xl mx-auto">
					<div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
						<svg
							className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
							fill="currentColor"
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
							aria-hidden="true"
						>
							<polygon points="50,0 100,0 50,100 0,100" />
						</svg>
						<div className="relative pt-6 "></div>
						<main className="mt-10 mx-auto sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
							<div className="sm:text-center lg:text-left">
								<h1 className="text-4xl tracking-tight font-bold  text-gray-900 sm:text-5xl md:text-6xl">
									<span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline py-3 font-semibold">
										DIGITAL LIBRARY
									</span>
									<span className="block xl:inline">About Us</span>{" "}
								</h1>
								<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
									Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
									qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
									occaecat fugiat aliqua.
								</p>
								<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
									<div className="rounded-md shadow">
										<a
											href="#"
											className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10 transition-all duration-500 bg-black"
										>
											Publications &nbsp;
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-6 h-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
												/>
											</svg>
										</a>
									</div>
									<div className="mt-3 sm:mt-0 sm:ml-3">
										<a
											href="#"
											className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10 transition-all duration-500 bg-gradient-to-t to-pink-600 via-black from-pink-600 bg-size-200 bg-pos-0 hover:bg-pos-100"
										>
											<span>Contact Us</span> &nbsp;
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-6 h-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
												/>
											</svg>
										</a>
									</div>
								</div>
							</div>
						</main>
					</div>
				</div>
				<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 ">
					<img
						className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
						src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}
