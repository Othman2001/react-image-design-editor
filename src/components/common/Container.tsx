import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Spin } from 'antd';

interface IProps {
	title?: React.ReactNode;
	leftSider?: React.ReactNode;
	content?: React.ReactNode;
	rightSider?: React.ReactNode;
	className?: string;
	loading?: boolean;
}

class Container extends Component<IProps> {
	static propTypes = {
		title: PropTypes.any,
		leftSider: PropTypes.any,
		content: PropTypes.any,
		rightSider: PropTypes.any,
		className: PropTypes.string,
	};

	static defaultProps = {
		className: 'rde-content-layout-main',
	};

	render() {
		const { title, leftSider, content, rightSider, className } = this.props;
		return (
			<Layout className="rde-content-layout">
				{title}
				<Layout
					style={{
						overflowY: 'auto',
						overflowX: 'hidden',
						//height: '100%',
						//minHeight: '100%',
						minHeight: `calc(100vh - ${title ? 98 : 60}px)`,
						height: `calc(100vh - ${title ? 98 : 60}px)`,
					}}
					className={className}
				>
					{leftSider}
					{content}
					{rightSider}
				</Layout>
			</Layout>
		);
	}
}

export default Container;
