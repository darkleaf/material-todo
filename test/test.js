var jspm = require("jspm");
var expect = require('chai').expect;

describe('Component', () => {
  before(() => jspm.import('react').then(m => this.React = m));
  before(() => jspm.import('lib/main').then(m => this.App = m.default));

  it('render', () => {
    var html = React.renderToString(App);
    expect(html).to.contain('hello world')
  });
});
