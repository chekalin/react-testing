import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list'

describe('CommentList', ()=> {

    let component;

    beforeEach(() => {
        const props = {comments: ['New comment', 'Other new comment']};
        component = renderComponent(CommentList, null, props);
    });

    it('should have comment-list class', () => {
        expect(component).to.have.class('comment-list');
    });

    it('shows an LI for each element', () => {
        expect(component.find('li').length).to.equal(2);
    });

    it('shows each component that is provided', () => {
        expect(component).to.contain('New comment');
        expect(component).to.contain('Other new comment');
    });
});