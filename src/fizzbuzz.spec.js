/* eslint-disable */

import { expect } from 'chai';
import fizzBuzz from './fizzBuzz';

describe('FizzBuzz', () => {
  it('should return `Fizz` when multiple of 3', () => {
    expect(fizzBuzz(3)).to.be.equal('Fizz');
    expect(fizzBuzz(9)).to.be.equal('Fizz');
  });
  it('should return `Buzz` when multiple of 5', () => {
    expect(fizzBuzz(5)).to.be.equal('Buzz');
    expect(fizzBuzz(35)).to.be.equal('Buzz');
  });
  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(fizzBuzz(15)).to.be.equal('FizzBuzz');
  });
  it('should return the number when not multiple', () => {
    expect(fizzBuzz(7)).to.be.equal(7);
  });
});
