export default function HeaderMain() {
	return (
		<header className={`header-area relative z-40 w-full py-3 header-sticky bg-white`}>
			<div className="header-area-inner relative px-4 z-20">
				<nav className="header-nav flex items-center justify-between relative">
					<div className="header-logo">
						<a
							href="/Users/vorapart.cho/Documents/dev/tecagis/customer-frontend-ui/public"
							className="flex items-center flex-shrink-0 mr-6"
						>
							<img
								src={`https://firebasestorage.googleapis.com/v0/b/backlink-329804.appspot.com/o/frontend%2FDuckdev84%2Fimages%2Flogo%2Flogo.png?alt=media&token=96f4fafe-e56f-431c-9fc6-c4a1357dcf3a`}
								height="27"
								width="27"
								alt="tecagis"
							/>
							<h1 className="ml-2 text-2xl font-bold text-gray-700">TECAGIS</h1>
						</a>
					</div>
					<div className="flex-grow lg:flex lg:items-center lg:w-auto">
						<ul className="toggle-menu-class dropdown-menu bg-white lg:bg-transparent shadow lg:shadow-none absolute lg:relative inset-x-0 hidden lg:flex lg:flex-grow items-center mt-10 lg:mt-0 mobile-hover">
							<li className="relative lg:mr-4">&nbsp;</li>
						</ul>
						<ul className="dropdown-menu right-side-menu flex flex-shrink-0">
							<li className="flex relative ml-4 dropdown items-center">
								<img
									src="/images/flag_th.png"
									alt="lang th"
									className="object-cover w-8 h-8 rounded-full hover:outline hover:outline-offset-1 hover:outline-teal-400 cursor-pointer"
								/>
							</li>
							<li className="hidden lg:flex relative dropdown ml-4">
								<ul className="hidden lg:block bg-white lg:absolute rounded top-full right-0 shadow-lg lg:w-60 px-6 py-2 submenu">
									<li>
										<p className="pt-4 flex items-center text-teal-400 font-bold transition duration-500 hover:text-teal-400">
											tecagis
										</p>
									</li>
									<li>
										<a
											href="/Users/vorapart.cho/Documents/dev/tecagis/customer-frontend-ui/public"
											className="py-2 border-b border-coolGray-300 flex items-center text-coolGray-600 font-medium transition duration-500 hover:text-teal-400"
										>
											Profile
										</a>
									</li>
									<li className="cursor-pointer">
										<a
											href="/Users/vorapart.cho/Documents/dev/tecagis/customer-frontend-ui/public"
											className="py-2 flex items-center text-coolGray-600 font-medium transition duration-500 hover:text-teal-400"
										>
											Log out
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	)
}
