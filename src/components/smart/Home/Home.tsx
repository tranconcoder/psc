import classNames from 'classnames/bind';
import ImagesSlide from '../../common/ImageSlide/ImageSlide';
import HomeNews from '../../dump/HomeNews';
import HomeRedirectButton from '../../dump/HomeRedirectButton/HomeRedirecButton';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function Home() {
	return (
		<div>
			<HomeRedirectButton />

			<ImagesSlide />

			<HomeNews />
		</div>
	);
}

export default Home;
