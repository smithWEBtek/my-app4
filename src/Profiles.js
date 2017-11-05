import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export class Profile extends Component{
  render() {
    return (
      <div className="profile">
        <h2>{this.props.firstName}{this.props.lastName}</h2>
        <small>Gender: {this.props.gender}</small>
        <p>TV Show: {this.props.tvshow}</p>
      </div>
    );   
  };
}

Profile.defaultProps = {
  // gender: ['male', 'female', 'unknown']
  gender: 'unknown'
}

export class Order extends Component{
  render() {
    return (
      <div className="order">
        <ul>
          <li>{this.props.cone ? 'Cone' : 'Cup'}</li>
          <li>{this.props.size}</li>
          <li>{this.props.scoops.length} scoops: {this.props.scoops.join(', ')}</li>
          <li>Ordered by {this.props.orderInfo.customerName} at {this.props.orderInfo.orderedAt}.</li>
        </ul>
      </div>
    );
  }
}

Order.defaultProps = {
  cone: true,
  size: 'regular',
  scoops: ['vanilla', 'chocolate', 'coconut']
};

Order.PropTypes = {
  cone: PropTypes.bool,
  size: PropTypes.string,
  // scoops: PropTypes.array.isRequired
  scoops: PropTypes.arrayOf.isRequired,
  orderInfo: PropTypes.shape({
    customerName: PropTypes.string.isRequired,
    orderedAt: PropTypes.number.isRequired
  }).isRequired
};
