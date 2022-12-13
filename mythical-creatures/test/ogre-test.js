const assert = require('chai').assert;
const Ogre = require('../exercises/ogre');
const Human = require('../exercises/human');

describe('Ogre', () => {
  // Oh no! It looks like there's no text in the `it` blocks! I guess you'll have to read the tests SUPER carefully to know what the test is expecting!

  it('should return the ogres name', function() {
    const ogre = new Ogre({name:'Brak'});
    assert.equal(ogre.name, 'Brak');
  });

  it('should default home to being swamp', function() {
    const ogre = new Ogre({name: 'Brak'});
    assert.equal(ogre.home, 'Swamp');
  });

  it('should be able to have a new home', function() {
    const ogre = new Ogre({name: 'Brak', abode: 'The Ritz'});
    assert.equal(ogre.home, 'The Ritz');
  });

  it('should add an encounter every time it encounters a human', function() {
    const ogre = new Ogre({name: 'Brak'});
    const human = new Human('Jane');

    assert.equal(human.name, 'Jane');
    assert.equal(human.encounterCounter, 0)

    ogre.encounter(human);
    assert.equal(human.encounterCounter, 1);
  });

  it('human should notice the ogre after 3 encounters', function() {
    const ogre = new Ogre({name: 'Brak'});
    const human = new Human('Jane');

    ogre.encounter(human);
    ogre.encounter(human);
    assert.equal(human.noticesOgre(), false);

    ogre.encounter(human);
    assert.equal(human.noticesOgre(), true);
  });

  it('should not notice after 5 encounters, but again at 6', function() {
    const ogre = new Ogre({name: 'Brak'});
    const human = new Human('Jane');

    assert.equal(human.noticesOgre(), false);

    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    assert.equal(human.noticesOgre(), true);

    ogre.encounter(human);
    ogre.encounter(human);
    assert.equal(human.noticesOgre(), false);

    ogre.encounter(human);
    assert.equal(human.noticesOgre(), true);
  });

  it('should be able to swing at a human', function() {
    const ogre = new Ogre({name: 'Brak'});
    const human = new Human('Jane');

    assert.equal(ogre.swings, 0)
    ogre.swingAt(human);

    assert.equal(ogre.swings, 1);
  });

  it('should swing at a human if it the human notices it', function() {
    const ogre = new Ogre({name: 'Brak'});
    const human = new Human('Jane');

    ogre.encounter(human);
    assert.equal(ogre.swings, 0);

    ogre.encounter(human);
    ogre.encounter(human);

    assert.equal(human.noticesOgre(), true);
    assert.equal(ogre.swings, 1);
  });

  it('should knock out the human after swinging twice', function() {
    const ogre = new Ogre({name: 'Brak'});
    const human = new Human('Jane');

    assert.equal(human.knockedOut, false)
    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);

    assert.equal(human.encounterCounter, 6);
    assert.equal(ogre.swings, 2);
    assert.equal(human.knockedOut, true);
  });

  it('should revive the human when it apologizes', function() {
    const ogre = new Ogre({name: 'Brak'});
    const human = new Human('Jane');

    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    assert.equal(human.knockedOut, true);

    ogre.apologize(human);
    assert.equal(human.knockedOut, false);
  });
});
