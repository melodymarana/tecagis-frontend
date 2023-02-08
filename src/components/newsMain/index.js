import NewsItem from './newsItem'

export default function NewsMain() {
	return (
		<section className="blog-area z-20 relative">
			<div className="container">
				<div className="section-title">
					<h3 className="title">NEWS / EVENTS</h3>
				</div>
				<div className="blog-infinite grid grid-cols-1 sm:grid-cols-2 gap-6">
					<NewsItem />
					<NewsItem />
					<NewsItem />
					<NewsItem />
				</div>
			</div>
		</section>
	)
}
