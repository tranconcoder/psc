import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function HomeRedirectButton() {
	return (
		<section className={cx('redirect-button')}>
			<ul className={cx('redirect-button-list')}>
				<li className={cx('breathing')}>
					<Button to={{ path: '/breathing' }}>Brething</Button>
				</li>

				<li className={cx('sleeping')}>
					<Button to={{ path: '/sleeping' }}>Sleeping</Button>
				</li>

				<li className={cx('news')}>
					<Button to={{ path: '/news' }}>News</Button>
				</li>

				<li className={cx('nutrions')}>
					<Button to={{ path: '/nutrions' }}>Nutrions</Button>
				</li>

				<li className={cx('question-and-answer')}>
					<Button to={{ path: '/question-and-answer' }}>
						Frequently Asked Q&A
					</Button>
				</li>
			</ul>
		</section>
	);
}

export default HomeRedirectButton;
