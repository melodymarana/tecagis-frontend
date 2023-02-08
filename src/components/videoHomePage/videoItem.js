export default function VideoItem() {
	return (
		<a href="/" target="_blank">
			<div className="card-product-style bg-white rounded transition duration-500 hover:shadow-lg cursor-pointer">
				<div className="card-product-image relative">
					<img
						className="w-full rounded inset-0 object-cover"
						style={{ height: '180px' }}
						src="https://firebasestorage.googleapis.com/v0/b/backlink-329804.appspot.com/o/frontend%2FDuckdev84%2Fimages%2Fvideos%2F2F6lT1H8SgM%2Fhqdefault.jpg?alt=media&token=7a6ce4f8-8411-406b-8d3c-d506cab76555"
						alt="test"
					/>
					<span className="card-product-date absolute bottom-4 left-4 bg-white rounded-full text-coolGray-600 text-sm font-normal flex justify-center items-center py-0.5 px-3">
						<span className="mr-1">
							<img className="h-4" src="assets/images/clock-icon.png" alt="title" />
						</span>
						<span className="text-xs">12:59:59</span>
					</span>
				</div>
				<div className="card-product-content px-4 py-6">
					<div className="card-product-collection">
						<p className="text-teal-400 font-medium text-sm flex items-center mb-2">
							Tecagis
							<span className="ml-2">
								<img className="h-4" src="assets/images/verified-icon.png" alt="title" />
							</span>
						</p>
					</div>
					<h2 className="text-coolGray-900 text-lg font-bold transition duration-500 hover:text-teal-400 mb-2 line-clamp-2">
						<span className="">Mocking video</span>
					</h2>
					<div className="card-porduct-price text-sm flex items-center mb-6">
						<p className="text-coolGray-600 font-medium flex items-center">1 ส.ค. 2565</p>
						<p className="text-coolGray-600 ml-2">10 views</p>
					</div>
					<p className="btn-style-1 inline-flex items-center justify-center border border-teal-400 text-coolGray-600 text-sm font-medium rounded-full transition-all duration-500 hover:text-white px-4 py-1.5">
						รับชม
					</p>
				</div>
			</div>
		</a>
	)
}
