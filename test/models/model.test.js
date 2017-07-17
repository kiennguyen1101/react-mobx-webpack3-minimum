import { expect } from 'chai';
import model from '../../src/models/model';

describe('Model' , () => {
	it('has timer', () => {
		expect(model.timer).to.not.be.undefined;
	});
});
