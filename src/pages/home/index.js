// import { Routes, Route, Link } from "react-router-dom";
import AppRouter from '../../components/appRouter'
import Banner01 from '../../components/banner01'
import BannerMain from '../../components/bannerMain'
import ChannelMain from '../../components/channelMain'
import FooterMain from '../../components/footerMain'
import Header from '../../components/layouts/header'
import NewsMain from '../../components/newsMain'
import SectionProduct from '../../components/section/product'
import VideoHomePage from '../../components/videoHomePage'

export default function Home() {
	return (
		<>
			<AppRouter />
			<main className="main-area overflow-hidden">
				<Header />
				<BannerMain />
				<SectionProduct />
				<VideoHomePage />
				<Banner01 />
				<ChannelMain />
				<NewsMain />
				<FooterMain />
			</main>
		</>
	)
}
