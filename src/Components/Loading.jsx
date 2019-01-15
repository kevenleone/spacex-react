import React, { Component } from 'react'
import Lottie from 'react-lottie';
import rocket from '../Animations/rocket1.json'

export default class Loading extends Component {
  render() {
    
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: rocket,
      };

    return (
        <Lottie 
            options={this.props.option ? this.props.option : defaultOptions} 
            width={this.props.width ? this.props.width : '600px'} 
            height={this.props.height ? this.props.height : '500px'} />
    )
  }
}
