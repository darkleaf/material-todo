var assert = require("assert");

var jspm = require("jspm");
function jspmImport(path){
    var module = '';
    before(function() { return jspm.import(path).then(function(m){ module = m; }); });
    return module;
}

var React = jspmImport('react').default;

describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){

            console.log(React);

            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        })
    })
})
