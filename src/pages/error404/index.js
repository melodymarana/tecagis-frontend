import AppRouter from '../../components/appRouter'
import Error404Section from '../../components/error404Section'
import FooterMain from '../../components/footerMain'
import HeaderMain from '../../components/headerMain'

export default function Error404() {
	return (
		<>
			<AppRouter />
			<main className="main-area overflow-hidden">
				<HeaderMain />
				<Error404Section />
				<FooterMain />
			</main>
		</>
	)
}
