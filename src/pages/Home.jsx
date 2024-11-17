import Carousel from '../../components/Carousel';
import Header from '../../components/Header';
import About from '../../section/About';
import Industries from '../../section/Industries';
import Product from '../../section/Product';

function Home() {
	return (
		<div>
			<Header />
			<Carousel />
			<About />
			<Product />
			<Industries />
		</div>
	);
}

export default Home;
