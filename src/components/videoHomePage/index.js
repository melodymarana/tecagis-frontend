import VideoItem from './videoItem'

export default function VideoHomePage() {
	return (
		<section className="product-area z-20 relative pb-10 mt-10">
			<div className="container">
				<div className="section-title">
					<h3 className="title">Video</h3>
				</div>
				<div className="product-infinite grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
					<VideoItem />
					<VideoItem />
					<VideoItem />
					<VideoItem />
				</div>
			</div>
		</section>
	)
}
