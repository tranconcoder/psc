import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import footerImage from '../../../assets/images/common/footer-image-1.jpg';
import facebookIcon from '../../../assets/images/common/facebook.png';
import tiktokIcon from '../../../assets/images/common/tiktok.png';
import Button from '../Button';

const cx = classNames.bind(styles);

function Footer() {
	return (
		<footer className={cx('footer')}>
			<div className={cx('redirect-container')}>
				<div className={cx('link-list-container')}>
					<h2 className={cx('title')}>All about PsC</h2>

					<ul className={cx('link-list')}>
						<li>
							<Link to="#">About PsC</Link>
						</li>

						<li>
							<Link to="#">Founders & Mentor</Link>
						</li>

						<li>
							<Link to="#">Organization & Missons</Link>
						</li>

						<li>
							<Link to="#">Budget & Funding</Link>
						</li>
					</ul>
				</div>

				<div className={cx('image')}>
					<img src={footerImage} alt="" />
				</div>
			</div>

			<div className={cx('contact-container')}>
				<ul className={cx('option-list')}>
					<li>
						<Button>About PsC</Button>
					</li>

					<li>
						<Button>Languages</Button>
					</li>

					<li>
						<Button>Contact Us</Button>
					</li>
				</ul>

				<ul className={cx('contact-list')}>
					<li>
						<img src={facebookIcon} alt="" />
					</li>
					<li>
						<img src={tiktokIcon} alt="" />
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
