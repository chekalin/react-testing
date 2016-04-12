import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {

    let component;

    beforeEach(() => {
        component = renderComponent(App);
    });

    it('shows comment box', () => {
        console.log(component);
        expect(component.find('.comment-box')).to.exist;
    });

});