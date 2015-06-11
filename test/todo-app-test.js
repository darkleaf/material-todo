var jspm = require("jspm");
var expect = require('chai').expect;

describe('Component', () => {
  before(() => jspm.import('react').then(m => this.React = m));
  before(() => jspm.import('lib/components/todo-app').then(m => this.TodoApp = m.default));

  it('render', () => {
    var html = React.renderToString(TodoApp);
    expect(html).to.contain('Default')
  });
});
