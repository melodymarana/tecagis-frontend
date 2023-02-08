import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import LanguageDropdown from '../../languageDropdown'

export default function Header() {
	const [open, setOpen] = useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	return (
		<>
			<header className="header">
				<div className="header-inner">
					<nav className="header-nav">
						<div className="header-logo flex-1">
							<a href="/" className="flex items-center flex-shrink-0 mr-6">
								<img
									src={`https://firebasestorage.googleapis.com/v0/b/backlink-329804.appspot.com/o/frontend%2FDuckdev84%2Fimages%2Flogo%2Flogo.png?alt=media&token=96f4fafe-e56f-431c-9fc6-c4a1357dcf3a`}
									height="40"
									width="40"
									className="logo-image"
									alt="tecagis"
								/>
								<h5 className="ml-2 font-semibold">TECAGIS</h5>
							</a>
						</div>
						<form className="flex-1 w-full hidden md:flex">
							<div className="search">
								<input className="input" type="text" placeholder="ค้นหา..." />
								<button className="button-search" type="submit">
									<i className="fa-regular fa-magnifying-glass" />
								</button>
							</div>
						</form>
						<div className="menu-bar flex-1">
							<div className="flex items-center ml-auto">
								<div className="items-center hidden md:flex">
									<a href="#" className="text-link">
										<i className="fa-regular fa-arrow-right-to-bracket icon" />
										<span className="hidden lg:flex">ลอคอิน</span>
									</a>
									<span className="divider-y">|</span>
									<a href="#" className="text-link">
										<i className="fa-regular fa-user icon" />
										<span className="hidden lg:flex">สมัครสมาชิก</span>
									</a>
								</div>
								<LanguageDropdown />
								<button id="btn-side-menu" onClick={handleClickOpen} className="ml-6">
									{/* <img src="/assets/img/menu-bar.svg" alt="menu" className="action-icon" /> */}
									<div className="bars">
										<span className="line"></span>
										<span className="line"></span>
										<span className="line"></span>
									</div>
								</button>
							</div>
						</div>
					</nav>
				</div>
			</header>
			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" className="drawer" onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="ease-in-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in-out duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="drawer-backdrop" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-hidden">
						<div className="absolute inset-0 overflow-hidden">
							<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
								<Transition.Child
									as={Fragment}
									enter="transform transition ease-in-out duration-300"
									enterFrom="translate-x-full"
									enterTo="translate-x-0"
									leave="transform transition ease-in-out duration-300"
									leaveFrom="translate-x-0"
									leaveTo="translate-x-full"
								>
									<Dialog.Panel className="drawer-body">
										<div className="drawer-container side-menu">
											<div className="drawer-header">
												<Dialog.Title className="text-3xl font-semibold">เมนู</Dialog.Title>
												<button type="button" className="rounded-md" onClick={() => setOpen(false)}>
												{/* 	<img src="/assets/img/close.svg" alt="close" className="action-icon" /> */}
													<div className="bars close">
														<span className="line line-l"></span>
														<span className="line line-r"></span>
													</div>
												</button>
											</div>
											<div className="relative mt-6 flex-1 px-4 sm:px-6">
												<div className="absolute inset-0 px-4 sm:px-6">
													<div className="h-full" aria-hidden="true">
														<ul className="flex flex-col justify-center">
															<li className="menu-item">
																<a href="/" className="menu-link">
																	menu 1
																</a>
															</li>
															<li className="menu-item">
																<a href="/" className="menu-link">
																	menu 2
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	)
}
