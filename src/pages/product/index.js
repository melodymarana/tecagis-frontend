import { Tab, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useTimeoutFn } from 'react-use'

import AppRouter from '../../components/appRouter'
import Header from '../../components/layouts/header'
import PageTitle from '../../components/pageTitle'
import ProductItem from '../../components/productItem'

export default function Product() {
	const [selectedIndex, setSelectedIndex] = useState(0)

	const [isShowing, setIsShowing] = useState(true)
	const [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 100)

	return (
		<>
			<AppRouter />
			<main className="main-area overflow-hidden">
				<Header />
				
				<PageTitle title="สินค้า" />

				<Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
					<Tab.List className="tab-list">
						<Tab
							className="list-item"
							onClick={() => {
								setIsShowing(false)
								resetIsShowing()
							}}
						>
							ทั้งหมด
						</Tab>
						<Tab
							className="list-item"
							onClick={() => {
								setIsShowing(false)
								resetIsShowing()
							}}
						>
							โปรโมชั่น
						</Tab>
						<Tab className="list-item">Tab 3</Tab>
					</Tab.List>
					<Tab.Panels className="panels">
						<Tab.Panel>
							<Transition
								as={Fragment}
								show={isShowing}
								enter="transform transition duration-300"
								enterFrom="opacity-0 translate-y-full"
								enterTo="opacity-100 translate-y-0"
								leave="transform duration-300 transition ease-in-out"
								leaveFrom="opacity-100  ranslate-y-0"
								leaveTo="opacity-0 translate-y-full"
							>
								<div className="container">
									<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
										<ProductItem badgeColor="red" badgeLabel="ลดราคา" />
										<ProductItem badgeColor="green" badgeLabel="โปรโมชั่น" />
										<ProductItem badgeColor="pink" badgeLabel="ขายดี" />
										<ProductItem badgeColor="yellow" badgeLabel="แนะนำ" />
									</div>
								</div>
							</Transition>
						</Tab.Panel>
						<Tab.Panel>
							<Transition
								as={Fragment}
								show={isShowing}
								enter="transform transition duration-300"
								enterFrom="opacity-0 translate-y-full"
								enterTo="opacity-100 translate-y-0"
								leave="transform duration-300 transition ease-in-out"
								leaveFrom="opacity-100  ranslate-y-0"
								leaveTo="opacity-0 translate-y-full"
							>
								<div className="container">
									<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 tab-panel">
										<ProductItem badgeColor="red" badgeLabel="ลดราคา" />
										<ProductItem badgeColor="green" badgeLabel="โปรโมชั่น" />
										<ProductItem badgeColor="pink" badgeLabel="ขายดี" />
										<ProductItem badgeColor="yellow" badgeLabel="แนะนำ" />
									</div>
								</div>
							</Transition>
						</Tab.Panel>
						<Tab.Panel>3</Tab.Panel>
					</Tab.Panels>
				</Tab.Group>
				{/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
						<ProductItem badgeColor="red" badgeLabel="ลดราคา" />
						<ProductItem badgeColor="green" badgeLabel="โปรโมชั่น" />
						<ProductItem badgeColor="pink" badgeLabel="ขายดี" />
						<ProductItem badgeColor="yellow" badgeLabel="แนะนำ" />
					</div> */}
			</main>
		</>
	)
}
