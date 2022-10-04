import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function SleepingPageContent() {
	return (
		<iframe
			width="1154"
			height="562"
			src="https://www.youtube.com/embed/5MuIMqhT8DM"
			title="Sleep is your superpower | Matt Walker"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		></iframe>
	);
}

export default SleepingPageContent;
