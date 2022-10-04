import classNames from 'classnames/bind';
import Button from '../../common/Button';

import styles from './index.module.scss';
import newsThumb from '../../../assets/images/pages/home/home-news-thumb.jpg';

const cx = classNames.bind(styles);

function HomeNews() {
	return (
		<section className={cx('home-news')}>
			<img className={cx('thumb')} src={newsThumb} alt="" />

			<div className={cx('content-container')}>
				<h2 className={cx('title')}>Breaking News!</h2>

				<p className={cx('description')}></p>

				<Button>Learn more</Button>
			</div>
		</section>
	);
}

export default HomeNews;
