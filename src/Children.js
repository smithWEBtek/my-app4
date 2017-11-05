import React from 'react';
import ReactDOM from 'react-dom';

export class Panel extends React.Component {
  render() {
    return (
      <div className="panel">
        <div className="panel-header"><h3>{this.props.title}</h3></div>
        <div className="panel-body">{this.props.children}</div>
      </div>
    );
  }
}

export class MovieBrowser extends React.Component {
  render() {
    const currentPlayingTitle = 'Mad Max: Fury Road';
 
    return (
      <div className="movie-browser">
        
        <h3>{this.props.title}</h3>
        {this.props.children}
      </div>      
    );
  }
}

export class Children extends React.Component{
  render(){
    return(
      <div>
        <h3> My child!</h3>
      </div>
    )
  }
}
 