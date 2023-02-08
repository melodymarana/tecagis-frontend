import ChannelItem from './channelItem'

export default function ChannelMain() {
	return (
		<section className="creator-area pb-10">
			<div className="container">
				<div className="section-title">
					<h3 className="title">Channel</h3>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					<ChannelItem />
					<ChannelItem />
					<ChannelItem />
					<ChannelItem />
				</div>
			</div>
		</section>
	)
}
