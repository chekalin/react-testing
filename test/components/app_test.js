import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {

    let component;

    beforeEach(() => {
        component = renderComponent(App);
    });

    it('contains the correct text', () => {
        expect(component).to.contain('React simple starter');
    });

});