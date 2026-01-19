// import type { ReactNode, CSSProperties } from 'react';
import { type ReactNode, type CSSProperties } from 'react';

type ContainProps = {
	children: ReactNode;
	style?: CSSProperties;
};

const Container = ({ children, style }: ContainProps) => (
	<div
		style={{
			border: '2px dashed #888',
			padding: '1rem',
			borderRadius: '0.5rem',
			backgroundColor: '#f9f9f9',
			fontFamily: 'sans-serif',
			...style
		}}
	>
		{children}
	</div>
);

export default Container;
