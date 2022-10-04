import classNames from 'classnames/bind';
import { FunctionComponent } from 'react';
import Footer from '../../Footer';
import Header from '../../Header';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function Layout1({ Content }: { Content: FunctionComponent }) {
	return (
		<div className={cx('layout-1')}>
			<Header label="POST-ACUTE COVID-19" />

			<div className={cx('content')}>
				<Content />
			</div>

			<Footer />
		</div>
	);
}

export default Layout1;
