/* eslint-disable */

import { expect } from 'chai';
import { sub, sum, div, mult } from './calc';

describe('Calc', () => {
  describe('smoke tests', () => {
    it('should exist the method `sum`', () => {
      expect(sum).to.exist;
    });
    it('should exist the method `sub`', () => {
      expect(sub).to.exist;
    });
    it('should exist the method `mult`', () => {
      expect(mult).to.exist;
    });
    it('should exist the method `div`', () => {
      expect(div).to.exist;
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when `sub(6,2)`', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });
    it('should return -4 when `sub(6,10)`', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('Mult', () => {
    it('should return 10 when `mult(5,3)`', () => {
      expect(mult(5, 3)).to.be.equal(15);
    });
    it('should return 60 when `mult(6,10)`', () => {
      expect(mult(6, 10)).to.be.equal(60);
    });
  });

  describe('Div', () => {
    it('should return 5 when `div(10/2)`', () => {
      expect(div(10, 2)).to.be.equal(5);
    });
    it('should return `Não é possível divisão por zero!` when divide by 0', () => {
      expect(div(5, 0)).to.be.equal('Não é possível divisão por zero!');
    });
  });
});
