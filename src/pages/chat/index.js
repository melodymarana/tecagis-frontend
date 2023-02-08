import AppRouter from '../../components/appRouter'
import Chat01 from '../../components/chat01'
import FooterMain from '../../components/footerMain'
import HeaderMain from '../../components/headerMain'

export default function Chat() {
	return (
		<>
			<AppRouter />
			<main className="main-area overflow-hidden">
				<HeaderMain />
				<Chat01 />
				<FooterMain />
			</main>
		</>
	)
}
