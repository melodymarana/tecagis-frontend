export default function NewsItem() {
	return (
		<div className="card-blog-style-1 p-5 bg-white relative rounded transition duration-500 hover:shadow-lg">
			<span className="card-blog-date uppercase text-coolGray-300 font-bold rotate-90 absolute mt-0.5 top-14 -left-7">
				1 ส.ค. 2565
			</span>
			<div className="block xl:flex pl-5">
				<div className="card-blog-left flex-shrink-0 w-full xl:w-40 2xl:w-64 rounded">
					<a href="/" target="_blank">
						<img
							className="w-full h-48 2xl:h-64 object-cover rounded mb-6"
							src="https://firebasestorage.googleapis.com/v0/b/backlink-329804.appspot.com/o/frontend%2FDuckdev84%2Fimages%2Fnews%2F1659586411671%2F1_6fqOnSDu-gDr4zQYpMBdug.jpeg?alt=media&token=eedc2e4a-f92c-4fca-b14d-df3fd81637be"
							alt="test"
						/>
					</a>
				</div>
				<div className="card-blog-right xl:ml-6">
					<h4 className="blog-title text-2xl 2xl:text-3xl text-coolGray-900 font-bold transition duration-500 hover:text-teal-400 mt-2 xl:mt-0 mb-4">
						<a href="/" target="_blank">
							express.js global router configurations.
						</a>
					</h4>
					<p className="blog-excerpt text-coolGray-600 leading-7 font-normal my-4">
						After creating a simple express.js I would like to make many services, route names. I found that so
						complicated
					</p>
				</div>
			</div>
		</div>
	)
}
