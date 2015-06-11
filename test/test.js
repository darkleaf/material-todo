import assert from 'assert';

import Component from 'src/component';

import React from 'react/addons';

const utils = React.addons.TestUtils;


describe('Array', () => {
    describe('#indexOf()', () => {
        it('should return -1 when the value is not present', () => {
            //console.log(document.body);

            let comp = utils.renderIntoDocument(<Component />);



            //console.log(comp.getDOMNode())

            //let node = comp.getDOMNode()//.getElementById('html');

            var input = utils.findRenderedDOMComponentWithTag(comp, 'div');


            


            utils.Simulate.click(input);

            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        });
    });
});
