import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { T } from 'react-toast-mobile';
import './programerror.css';
export default class PageStatusSwitch extends Component {
    static propTypes = {
        status: PropTypes.number,
        className: PropTypes.string
    };

    static defaultProps = {
        status: 1
    }

    page_1() {//loading
        return null;
    }

    page_0() {//success
        T.loaded();
        return this.props.children;
    }

    page_2() {//failure
        T.loaded();
        return <div className="program-error">
            <h1>500</h1>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg" alt={'err'}/>
            <p>status状态异常：({this.props.status})</p>
            <p>后台程序出错，请联系相关开发人员</p>
        </div>
    }

    render() {
        return  (<div className={this.props.className} style={this.props.style}>
            {this['page_'+this.props.status]()}
        </div>)
    }
}
