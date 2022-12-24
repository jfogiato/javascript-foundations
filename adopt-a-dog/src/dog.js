class Dog {
  constructor(object) {
    this.name = object.name;
    this.age = object.age;
    this.hungry = true;
    this.energyLevel = 5;
    this.friends = [];
  }
  eat() {
    if (this.hungry) {
      this.hungry = false;
      return 'Yum!';
    } else {
      return 'I refuse to eat.';
    }
  }
  fetchBall() {
    if (this.energyLevel > 3) {
      this.energyLevel -= 1;
      return 'This is fun!';
    } else {
      return 'Nah, I\'m going to sleep instead.';
    }
  }
  sleep() {
    if (this.energyLevel < 10) {
      this.energyLevel += 1;
    } else {
      return 'I have too much energy to rest. I\'m going to chew something instead.';
    }
  }
  makeNewFriend(friend) {
    this.friends.push(friend.name);
  }
}

module.exports = Dog;
