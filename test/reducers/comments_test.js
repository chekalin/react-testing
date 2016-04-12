import {expect} from '../test_helper';
import commentReducer from '../../src/reducers/comments'
import {SAVE_COMMENT} from '../../src/actions/types'

describe('commentReducer', () => {

    it('handles action with unknown type', () => {
        expect(commentReducer()).to.be.instanceOf(Array);
        expect(commentReducer()).to.eql([]);
    });

    it('SAVE_COMMENT', () => {
        const action = {type: SAVE_COMMENT, payload: 'new comment'};
        const state = ['existing comment'];
        const newState = commentReducer(state, action);
        expect(newState).to.eql(['existing comment', 'new comment']);

    });

});