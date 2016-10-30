import chai from 'chai';
import dirtyChai from 'dirty-chai';
import Game from '../src/game.js';

const expect = chai.expect;
chai.use(dirtyChai);

var getValidGridFields = function () {
  return [
    [0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]
  ];
};
describe('game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('has an othodogonal grid of 3 rows and 3 columns', () => {
    const testValidGridFields = getValidGridFields();
    const testInvalidGridFields = [
      [-1,0], [100, 1], [3,2]
    ];

    testInvalidGridFields.forEach(pos => {
      expect(game.field(pos)).not.to.exist();
    });
    testValidGridFields.forEach(pos => {
      expect(game.field(pos)).to.equal(0);
    });
  });

  it('a player can take a field if not already taken', () => {
    const pos = [0, 0];
    game.takeField(pos, game.statePlayerOne);

    expect(game.field(pos)).to.equal(game.statePlayerOne);

    game.takeField(pos, game.statePlayerTwo);
    expect(game.field(pos)).to.equal(game.statePlayerOne);
  });

  it('players take turns taking fields until the game is over', () => {
      expect(false).to.be.true();
  });

  it('a game is over when all fields are taken', () => {
    const validGridFields = getValidGridFields();

    validGridFields.forEach(pos => {
      game.takeField(pos, game.statePlayerOne);
    });

    expect(game.isOver()).to.be.true();
  })
});
