import React, { Component, Fragment } from 'react';

class Ball extends Component {
    props: any;
    render() {
        const isActive = () => this.props.curIndex >= this.props.num || isNaN(this.props.num);
        const ballStyle = {
            backgroundColor: isActive() ? 'slateblue' : 'white',
            borderRadius: '50%',
            width: isNaN(this.props.num) ? '2em' : '1em',
            height: isNaN(this.props.num) ? '2em' : '1em',
            textAlign: 'center',
            paddingBottom: !isNaN(this.props.num) && '0.5em',
            paddingInline: '0.3em',
            display: 'inline-block',
            marginTop: '1em',
            border: isActive() ? '0.5px solid slateblue' : '0.5px solid lightgrey',
            color: isActive() ? 'white' : 'black',
            fontWeight: 'bold',
            fontSize: '1.5em',
            paddingTop: isNaN(this.props.num) && '0.5em'
        }
        return (
            <Fragment>
                <div style={ballStyle}>
                    {this.props.isCheck && <i className="fa fa-check" aria-hidden="true"></i>}
                    {this.props.num}
                </div>
            </Fragment>

        )
    }
}

export default Ball
