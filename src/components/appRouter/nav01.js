import { Link } from 'react-router-dom'

import ChatIcon01 from '../../svg/chatIcon01'
import Dashboard01 from '../../svg/dashboard01'
import Security01 from '../../svg/security01'

export default function Nav01() {
	return (
		<div className="bg-teal-10 h-full shadow-lg">
			<div className="pl-10">
				<ul className="space-y-8 pt-10">
					<li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
						<Dashboard01 />
						<Link to="/">Dashboard</Link>
					</li>
					<li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
						<Security01 />
						<Link to="/404">Error 404</Link>
					</li>
					<li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
						<ChatIcon01 />
						<Link to="/chat">Chat message</Link>
					</li>
					{/*<li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">*/}
					{/*  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"*/}
					{/*       stroke="currentColor">*/}
					{/*    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
					{/*          d="M13 10V3L4 14h7v7l9-11h-7z"/>*/}
					{/*  </svg>*/}
					{/*  <a href="">Activity</a>*/}
					{/*</li>*/}
					{/*<li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">*/}
					{/*  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"*/}
					{/*       stroke="currentColor">*/}
					{/*    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
					{/*          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>*/}
					{/*  </svg>*/}
					{/*  <a href="">Library</a>*/}
					{/*</li>*/}
					{/*<li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">*/}
					{/*  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"*/}
					{/*       stroke="currentColor">*/}
					{/*    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
					{/*          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>*/}
					{/*  </svg>*/}
					{/*  <a href="">Security</a>*/}
					{/*</li>*/}
					{/*<li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">*/}
					{/*  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"*/}
					{/*       stroke="currentColor">*/}
					{/*    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
					{/*          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>*/}
					{/*  </svg>*/}
					{/*  <a href="">Schedules</a>*/}
					{/*</li>*/}
					{/*<li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">*/}
					{/*  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"*/}
					{/*       stroke="currentColor">*/}
					{/*    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
					{/*          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>*/}
					{/*  </svg>*/}
					{/*  <a href="">Payouts</a>*/}
					{/*</li>*/}
					{/*<li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">*/}
					{/*  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"*/}
					{/*       stroke="currentColor">*/}
					{/*    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
					{/*          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>*/}
					{/*  </svg>*/}
					{/*  <a href="">Settings</a>*/}
					{/*</li>*/}
				</ul>
			</div>
		</div>
	)
}
