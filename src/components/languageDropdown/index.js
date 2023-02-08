import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function LanguageDropdown() {
	return (
		<Menu as="div" className="select-language dropdown relative text-left">
			<Menu.Button className="flex items-center justify-center">
				<img
					src="/assets/img/lang/th.svg"
					alt="lang th"
					className="lang-icon hover:outline hover:outline-offset-1 hover:outline-teal-400 cursor-pointer"
				/>
			</Menu.Button>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-10 mt-3 w-56 origin-top-right rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						<Menu.Item>
							{({ active }) => (
								<a href="#" className={classNames(active ? 'bg-grey-50' : 'text-grey-600', 'menu-item')}>
									<img src="/assets/img/lang/th.svg" alt="lang th" className="lang-icon" />
									<p className="ml-4">ภาษาไทย</p>
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a href="#" className={classNames(active ? 'bg-grey-50' : 'text-grey-600', 'menu-item')}>
									<img src="/assets/img/lang/en.svg" alt="lang en" className="lang-icon" />
									<p className="ml-4">ภาษาอังกฤษ</p>
								</a>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	)
}
