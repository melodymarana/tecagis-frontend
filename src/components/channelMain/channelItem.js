export default function ChannelItem() {
	return (
		<div className="card-creator-style p-4 bg-white shadow rounded transition duration-500 hover:shadow-lg">
			<div className="card-creator-image relative mb-6">
				<img
					className="w-full object-cover h-32 lg:h-20 rounded"
					src="https://firebasestorage.googleapis.com/v0/b/backlink-329804.appspot.com/o/frontend%2FDuckdev84%2Fimages%2Fchannel%2Fbanner-2.jpg?alt=media&amp;token=bcc4a3ab-1781-415a-9cee-e9937a16fc97"
					alt="Duckdev84"
				/>
				<div className="card-creator-author flex w-20 ml-auto mr-auto relative -mt-10">
					<img
						className="w-20 h-20 object-cover rounded-lg border-2 border-white"
						src="https://firebasestorage.googleapis.com/v0/b/backlink-329804.appspot.com/o/frontend%2FDuckdev84%2Fimages%2Fchannel%2FAKedOLQSeMQyym9ESOLY_SYsixuYvU6FR-tYgSBlVIEh%3Ds800-c-k-c0x00ffffff-no-rj.jpg?alt=media&amp;token=26210b7c-462c-4d12-9d56-4d589878b5ec"
						alt="Duckdev84"
					/>
					<span className="flex justify-center items-center bg-blue-500 w-6 h-6 rounded-full absolute bottom-1 -right-0.5">
						<img className="h-2" src="assets/images/sign-icon.png" alt="title" />
					</span>
				</div>
			</div>
			<div className="card-creator-intro relative mb-4">
				<h4 className="text-coolGray-900 font-bold text-center transition duration-500 hover:text-teal-400">
					<a target="_blank" href="https://www.youtube.com/channel/UCxBtvAh2ByaZpfUCMgW2SyA" rel="noreferrer">
						Duckdev84
					</a>
				</h4>
			</div>
			<div className="social-share flex items-center justify-center mb-4 space-x-2">
				<a
					className="flex items-center justify-center w-8 h-8 bg-white rounded-lg border border-teal-400 transition duration-500 hover:bg-teal-400"
					target="_blank"
					href="https://duckdev84.medium.com"
					rel="noreferrer"
				>
					<img className="h-3" src="assets/images/social-icon1.png" alt="title" />
				</a>
				<a
					className="flex items-center justify-center w-8 h-8 bg-white rounded-lg border border-teal-400 transition duration-500 hover:bg-teal-400"
					target="_blank"
					href="https://www.instagram.com/duckdev84"
					rel="noreferrer"
				>
					<img className="h-3" src="assets/images/social-icon2.png" alt="title" />
				</a>
				<a
					className="flex items-center justify-center w-8 h-8 bg-white rounded-lg border border-teal-400 transition duration-500 hover:bg-teal-400"
					target="_blank"
					href="https://lin.ee/88Dr6Ua"
					rel="noreferrer"
				>
					<img className="h-3" src="assets/images/social-icon5.png" alt="title" />
				</a>
			</div>
			<div className="card-creator-info flex items-center justify-between mb-6">
				<div className="text-center">
					<h5 className="text-coolGray-900 font-bold">0</h5>
					<p className="leading-4 text-sm font-normal text-coolGray-600">ผู้ติดตาม</p>
				</div>
				<div className="text-center">
					<h5 className="text-coolGray-900 font-bold">3</h5>
					<p className="leading-4 text-sm font-normal text-coolGray-600">วีดีโอ</p>
				</div>
			</div>
			<a
				className="btn-style-1 cursor-pointer flex items-center justify-center border border-teal-400 text-coolGray-600 text-sm font-medium rounded-full transition-all duration-500 hover:text-white px-4 py-2"
				target="_blank"
				href="https://www.youtube.com/channel/UCxBtvAh2ByaZpfUCMgW2SyA"
				rel="noreferrer"
			>
				<span className="mr-2">
					<img className="h-3" src="assets/images/follow-plus-icon.png" alt="title" />
				</span>
				ไปที่ช่อง
			</a>
		</div>
	)
}
