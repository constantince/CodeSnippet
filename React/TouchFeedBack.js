import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
export default class TouchFeedBack extends Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.element,
        onClick: PropTypes.func
    };

    state = {
      currentStyle: {}
    };

    touchStart = () => {
        this.setState({
            currentStyle: {
                opacity: .5,
                backgroundColor: 'transparent',
                WebkitTransform: 'translate(.03rem, .03rem)',
                WebkitTapHighlightColor : 'transparent',
                transform: 'translate(.03rem, .03rem)',
            }
        });
    };

    touchEnd = () => {
        this.setState({
            currentStyle: {}
        });
    };

    render() {
        const {className, children, style, onClick} = this.props;
        return(<div className={className + ' link-feedback '}
                    style={{...this.state.currentStyle, ...style}}
                    onTouchStart={this.touchStart}
                    onTouchEnd={this.touchEnd}
                    onClick={onClick}
            >
                {children}
            </div>
        )
    }
}
