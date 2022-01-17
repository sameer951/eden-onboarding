
import React, { Component, Fragment } from 'react'

class Line extends Component {
    props: any;
    render() {
        const { num, curIndex } = this.props;
        // const isFull = (num - 1) < curIndex;
        const isHalf = (num - 1) === curIndex;
        const isEmpty = (num - 1) > curIndex;
        const lineStyle = {
            width: isHalf ? '30px' : ' 60px',
            borderBottom: isEmpty ? '2px solid lightgrey' : '2px solid slateblue',
            display: 'inline-block',
            marginBottom: '10px'
        }
        return (
            <Fragment>
                <div style={lineStyle}> </div>
                {isHalf &&
                    <div style={{ ...lineStyle, borderBottom: '2px solid lightgrey' }}> </div>}
            </Fragment>
        )
    }
}

export default Line;