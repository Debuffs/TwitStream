import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component{
	renderSubtitle() {
		if (this.props.subtitle) {
			return <h2 className="titlebar__subtitle">{this.props.subtitle}</h2>
		}
	}
	render() {
		return (
			<div className="titlebar">
				<div className="wrapper">
					<h1>{this.props.title}</h1>
					{this.renderSubtitle()}
				</div>
			</div>
		);
	}
}
