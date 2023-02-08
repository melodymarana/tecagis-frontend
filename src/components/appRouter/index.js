import { Transition } from '@headlessui/react'
import { Fragment } from 'react'

import { useEventClickOutside } from '../../hooks/useEventClickOutside'
import Menu01 from '../../svg/menu01'

import Nav01 from './nav01'

export default function AppRouter() {
	const { ref, isComponentVisible, isComponentVisibleSet } = useEventClickOutside(false)

	return (
		<div ref={ref}>
			<div className="absolute">
				<div className="flex items-end justify-end fixed cursor-pointer bottom-0 right-0 z-50 group mb-4 mr-4">
					<div
						className="w-16 h-16"
						onClick={() => {
							isComponentVisibleSet(true)
						}}
					>
						<div className="block w-full h-full rounded-full cursor-pointer bg-teal-50 transition-all shadow group-hover:shadow-lg transform group-hover:scale-110 group-hover:rotate-12">
							<Menu01 cssClass="w-full h-full p-4" />
						</div>
					</div>
				</div>
			</div>
			<Transition
				as={Fragment}
				show={isComponentVisible}
				enter="transition-opacity duration-150"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition-opacity duration-150"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<nav
					className="fixed top-0 right-0 z-50 rounded-md w-72 h-screen flex-col justify-between"
					onBlur={() => {
						isComponentVisibleSet(false)
					}}
				>
					<Nav01 />
				</nav>
			</Transition>
		</div>
	)
}
