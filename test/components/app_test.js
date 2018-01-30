import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// // use `describe` to group together similar tests
// describe('App')
//
// // Use `it` to test a single attr of the target
// it('shows the correct text')
//
// // Use `expect` to make an `assertion` about a target
// expect
describe('App', () => {
  let component;

  beforeEach(() => {
      component = renderComponent(App);
  });

  it('show a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
