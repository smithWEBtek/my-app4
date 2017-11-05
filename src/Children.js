import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Panel extends Component {
  render() {
    return (
      <div className="panel">
        <div className="panel-header"><h3>{this.props.title}</h3></div>
        <div className="panel-body">{this.props.children}</div>
      </div>
    );
  }
}

export class Children extends Component{
  render(){
    return(
      <div>
        <h3> My child!</h3>
      </div>
    )
  }
}
 
export class MovieBrowser extends Component {
  render(){
    const currentPlayingTitle = 'Mad Max: Fury Road';
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        isPlaying: child.props.title === currentPlayingTitle
      });
    });

    return (
      <div className="movie-browser">
        <p>{this.props.children}</p>
        {childrenWithExtraProp}
      </div>      
    );
  }
};

export class SomeComponent extends Component {
  render() {
    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
      return (
        <div className="some-component-special-class">{child}</div> 
      );
    });
 
    return (
      <div className="some-component">
        <p>This component has {React.Children.count(this.props.children)} children.</p>
        {childrenWithWrapperDiv}        
      </div>      
    );
  }
}