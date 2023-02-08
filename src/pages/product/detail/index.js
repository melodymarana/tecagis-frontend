import AppRouter from '../../../components/appRouter'
import Header from '../../../components/layouts/header'

export default function ProductDetail() {
	return (
		<>
			<AppRouter />
			<main className="main-area overflow-hidden">
				<Header />
				<section className="section-content product-detail">
					<div className="container">
						<div className="grid grid-cols lg:grid-cols-2 gap-4">
							<div className="product-image">
								<img src="https://picsum.photos/400/300" className="image" alt="product image" />
								<div className="badge green">โปรโมชั่น</div>
							</div>
							<div className="content">
								<p className="title">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
								</p>
								<div className="description">
									Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
									classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
									professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
									consectetur, from a Lorem Ipsum
								</div>
								<div className="product-price">
									<span className="normal-price mr-2">2,000 บาท</span>
									<span className="discount-price">1,200 บาท</span>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
