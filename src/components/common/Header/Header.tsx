import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import headerBackground from '../../../assets/images/common/header-background.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Header({ label = 'News' }: { label?: string }) {
	const [fillColorNav, setFillColorNav] = useState(false);

	useEffect(() => {
		const handleFillColorNav = () => {
			if (window.scrollY === 0) {
				setFillColorNav(false);
			} else {
				setFillColorNav(true);
			}
		};

		window.addEventListener('scroll', handleFillColorNav);

		return () => {
			window.removeEventListener('scroll', handleFillColorNav);
		};
	}, []);

	return (
		<header className={cx('header')}>
			<nav
				className={cx('nav', {
					'fill-color': fillColorNav,
				})}
			>
				<h3 className={cx('logo')}>PsC</h3>

				<ul className={cx('redirect-links')}>
					<li className={cx('link')}>
						<Link to="/">Home</Link>
					</li>
					<li className={cx('link')}>
						<Link to="/breathing">Breathing</Link>
					</li>
					<li className={cx('link')}>
						<Link to="/sleeping">Sleeping</Link>
					</li>
					<li className={cx('link')}>
						<Link to="/nutrions">Nutrions</Link>
					</li>
					<li className={cx('link')}>
						<Link to="/news">News</Link>
					</li>
					<li className={cx('link')}>
						<Link to="/question-and-answer">Q&A</Link>
					</li>
					<li className={cx('link')}>
						<Link to="/search">
							<AiOutlineSearch />
						</Link>
					</li>
				</ul>
			</nav>

			<h1 className={cx('label', 'home-label')}>{label}</h1>

			{/* Background */}
			<img
				className={cx('background')}
				src={headerBackground}
				alt="header-background"
			/>
		</header>
	);
}

export default Header;
