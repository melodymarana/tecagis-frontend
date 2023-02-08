import ProductItem from '../../productItem'

export default function SectionProduct() {
	return (
		<>
			<section className="section-product">
				<div className="container">
					<div className="section-title">
						<h3 className="title">Product</h3>
					</div>
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
						<ProductItem badgeColor="red" badgeLabel="ลดราคา" />
						<ProductItem badgeColor="green" badgeLabel="โปรโมชั่น" />
						<ProductItem badgeColor="pink" badgeLabel="ขายดี" />
						<ProductItem badgeColor="yellow" badgeLabel="แนะนำ" />
					</div>
				</div>
			</section>
		</>
	)
}
