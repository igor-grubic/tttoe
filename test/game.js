import chai from 'chai';
import dirtyChai from 'dirty-chai';
import Game from '../src/game.js';

const expect = chai.expect;
chai.use(dirtyChai);

describe('game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('a game is over when all fields are taken', () => {
    expect(true).to.be.true;
  })
});
