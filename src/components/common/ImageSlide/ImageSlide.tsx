import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './index.module.scss';

import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

const imageNameList: string[] = ['image-slide-1.jpg', 'image-slide-2.jpg'];

function ImagesSlide() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [imageList, setImageList] = useState<Array<{ default: string }>>([]);

	const imageListRef = useRef<HTMLUListElement>(null);

	const handleClickNextButton = () => {
		setCurrentImageIndex((prev) =>
			prev === imageList.length - 1 ? 0 : prev + 1
		);
	};

	const handleClickPrevButton = () => {
		setCurrentImageIndex((prev) =>
			prev === 0 ? imageList.length - 1 : prev - 1
		);
	};

	// Dynamic import imageList
	useEffect(() => {
		imageNameList.forEach((imageName) => {
			import(`../../../assets/images/image-slide/${imageName}`).then(
				(image) => {
					setImageList((prev) => [...prev, image]);
				}
			);
		});
	}, []);

	// Set scroll after rendered
	useEffect(() => {
		const imageListElm = imageListRef.current as HTMLUListElement;

		imageListElm.style.transform = `translateX(-${
			currentImageIndex * 100
		}%)`;
	}, [currentImageIndex]);

	// Auto next slide
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			handleClickNextButton();
		}, 20000);

		return () => clearTimeout(timeoutId);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentImageIndex]);

	return (
		<section data-aos="fade-up" className={cx('images-slide-container')}>
			<button
				className={cx('prev-button')}
				onClick={handleClickPrevButton}
			>
				<FaChevronLeft />
			</button>

			{/* Image list */}
			<ul
				className={cx('image-list')}
				ref={imageListRef}
				onScroll={(e) => e.preventDefault()}
			>
				{imageList.map((image, index) => (
					<li key={index}>
						<img src={image.default} alt="" />
					</li>
				))}
			</ul>

			{/* Progress dot list */}
			<ul className={cx('progress-dot-list')}>
				{imageList.map((image, index) => (
					<li
						key={index}
						data-active={
							currentImageIndex === index ? 'true' : 'false'
						}
						onClick={() => setCurrentImageIndex(index)}
					></li>
				))}
			</ul>

			<button
				className={cx('next-button')}
				onClick={handleClickNextButton}
			>
				<FaChevronRight />
			</button>
		</section>
	);
}

export default ImagesSlide;
