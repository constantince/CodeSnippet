import React, { Component } from 'react';
import PropTypes from 'prop-types';

const USE_ACTIVE_STYLE = {
    opacity: .5,
    backgroundColor: 'transparent',
    WebkitTransform: 'translate(2px, 2px)',
    WebkitTapHighlightColor : 'transparent',
    transform: 'translate(2px, 2px)',
}

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
            currentStyle: USE_ACTIVE_STYLE
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
                    onMouseDown={this.touchStart}
                    onMouseUp={this.touchEnd}
                    onClick={onClick}
            >
                {children}
            </div>
        )
    }
}
