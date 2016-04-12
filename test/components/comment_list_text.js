import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list'

describe('CommentList', ()=> {

    let component;

    beforeEach(() => {
        component = renderComponent(CommentList);
    });

    it('should have comment-list class', () => {
        expect(component).to.have.class('comment-list');
    });
});