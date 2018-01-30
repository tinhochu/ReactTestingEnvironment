import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = {
      comments: [
        'new Comment',
        'Other new comment'
      ]
    };

    component = renderComponent(CommentList, null, props);
  });

  it('show an LI for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('show each comment that is provided', () => {
    expect(component).to.contain('new Comment');
    expect(component).to.contain('Other new comment');
  });
});
