import React from 'react';

export default React.createClass({
    handleClick(){
        alert('aaasfdgdfgsdfgsdgfdsgsdfgsdfgdsfgdfsgsdg');
    },
    render() {
        return <div id='html' onclick={this.handleClick}>html</div>;
    }
});
