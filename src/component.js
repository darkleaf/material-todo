import React from 'react';

const A = React.createClass({
  handleClick(){
    console.log('aaasfdgdfgsdfgsdgfdsgsdfgsdfgdsfgdfsgsdg');

  },
  render() {
    return <div ref='button' id='button' onClick={this.handleClick}>html</div>;
  }
});



//export default React.createClass({
//
//  getInitialState(){
//    return {a: 1};
//  },
//
//  handleClick(){
//    console.log(this);
//  },
//
//
//  componentDidMount(){
//    console.log('atata')
//  },
//
//    render() {
//        return <A ref='a' />;
//    }
//});

export default class Component extends React.Component {
  handleClick(){
    console.log('click');
    console.log(this);
  }

  render(){
    return <A ref='a' />;
  }
}
