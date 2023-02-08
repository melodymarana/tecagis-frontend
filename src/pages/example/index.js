import AppRouter from '../../components/appRouter'
import FooterMain from '../../components/footerMain'
import HeaderMain from '../../components/headerMain'

export default function Example() {
	return (
		<>
			<AppRouter />
			<main className="main-area overflow-hidden">
				<HeaderMain />
				<div className="container mx-auto">
					<h1>Typography h1</h1>
					<h2>Typography h2</h2>
					<h3>Typography h3</h3>
					<h4>Typography h4</h4>
					<h5>Typography h5</h5>
					<h6>Typography h6</h6>
				</div>

				<FooterMain />
			</main>
		</>
	)
}
