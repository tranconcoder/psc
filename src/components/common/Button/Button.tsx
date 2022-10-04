import classNames from 'classnames/bind';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

type ElementType =
	| ButtonHTMLAttributes<HTMLButtonElement>
	| AnchorHTMLAttributes<HTMLAnchorElement>;

function Button({
	children,
	to,
	...attributes
}: ElementType & {
	children: ReactNode;
	to?: {
		path: string;
		openNewTab?: boolean;
	};
} & ElementType) {
	const Tag = to ? 'a' : 'button';

	const navigation = useNavigate();
	const handleClick = to
		? // Redirect to link onClick
		  (e: any) => {
				attributes?.onClick && attributes?.onClick(e);

				if (to.openNewTab) window.open(to.path);
				else navigation(to.path);
		  }
		: // Normal
		  (e: any) => {
				attributes?.onClick && attributes?.onClick(e);
		  };

	return (
		<Tag
			{...(attributes as any)}
			onClick={handleClick}
			className={cx('button') + ` ${attributes.className}`}
		>
			{children}
		</Tag>
	);
}

export default Button;
