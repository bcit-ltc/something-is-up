import React, { Component } from 'react';
import { ImageAssets, AudioAssets, UtilityFunctions as UF } from "./utility.js";

class HoverSvg extends Component {

  constructor(props){
    super(props);

    this.state = {
      isHover: false,
      isCurrentStep: false,
      isEnabled: this.props.isEnabled
    }
  }  

  static get SvgTypes() {
      return Object.freeze({
        CIRCLE: "circle",
      });
  }

  renderSvg() {
    switch(this.props.svgType){
        case HoverSvg.SvgTypes.CIRCLE:
        return <circle 
            cx={this.props.cx} cy={this.props.cy} r={this.props.r} 
            fill={(this.state.isHover && this.state.isEnabled) || (this.state.isCurrentStep) ? "rgba(255, 255, 0, 0.5)" : "transparent"} 
            onMouseEnter={() => {this.setState({ isHover : true })}}
            onMouseLeave={() => {this.setState({ isHover : false })}}
            onClick={() => {
                if(this.state.isEnabled){
                    this.setState({ isCurrentStep: true });
                    this.props.clickEvent(this.props.name);
                }
            } }
        />
      default:
          console.error("No associated SVG type given");
          return;
    }
  }

  render() {
        return this.renderSvg();
    }
}

export default HoverSvg;