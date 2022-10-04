import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function BreathingPageContent() {
	return (
		<iframe
			className={cx('breathing-video')}
			width="1150"
			height="506"
			src="https://www.youtube.com/embed/F28MGLlpP90"
			title="15 Minute Deep Breathing Exercise | City of Hope"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		></iframe>
	);
}

export default BreathingPageContent;
