import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
// import About from '../../section/Home/About';
import Industries from '../../section/Home/Industries';
import Product from '../../section/Home/Product';

function Home() {
	return (
		<div>
			<Header />
			<Carousel />
			{/* <About /> */}
			<Product />
			<Industries />
			<Footer />
		</div>
	);
}

export default Home;
