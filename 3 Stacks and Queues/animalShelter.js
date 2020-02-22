
// Animal Shelter: An animal shelter, which holds only dogs and cats, operates on a strictly"first in, first out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animal they would like. Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat. You may use the built-in Linked L is t data structure.

// O: stack
// I: N/A
// C: N/A
// E: N/A

3.6
function AnimalShelter() {
  var instance = {};
  var storage = {
    cat: {},
    dog: {},
    both: {}
  };
  var catCounter = 0;
  var dogCounter = 0;
  var bothCounter = catCounter + dogCounter;
  var bothDog = 0;
  var bothCat = 0;
  instance.enqueue = animal => {
    if (animal === 'cat') {
      catCounter++;
      storage.cat[catCounter] = animal;
    } else {
      dogCounter++;
      storage.dog[dogCounter] = animal;
    }
    bothCounter = catCounter + dogCounter
    storage.both[bothCounter] = animal;
    return storage
  }
  instance.dequeueAny = () => {
    var dequeue = storage.both[bothCounter];
    delete storage.both[bothCounter];
    if (dequeue === 'cat') {
      delete storage.cat[catCounter];
      catCounter--;
    } else {
      delete storage.dog[dogCounter];
      dogCounter--;
    }
    bothCounter--
    return dequeue;
  }
  instance.dequeueDog = () => {
    console.log('DOG', catCounter, dogCounter)
    var dequeue = storage.dog[dogCounter];
    delete storage.dog[dogCounter];
    delete storage.both[catCounter + dogCounter];
    dogCounter--
    return dequeue;
  }
  instance.dequeueCat = () => {
    console.log('CAT', catCounter, dogCounter)
    var dequeue = storage.cat[catCounter];
    delete storage.cat[catCounter];
    delete storage.both[catCounter + dogCounter];
    catCounter--
    return dequeue;
  }
  instance.storage = () => {
    return storage
  }
  return instance
}

// Time:
// Space:

// var g = AnimalShelter();
// console.log(g.enqueue('cat'))
// console.log(g.enqueue('dog'))
// console.log(g.enqueue('cat'))
// console.log(g.enqueue('cat'))
// console.log(g.dequeueAny())
// console.log(g.enqueue('dog'))
// console.log(g.enqueue('cat'))
// console.log(g.enqueue('cat'))
// console.log(g.dequeueCat())
// console.log(g.storage())
// console.log(g.dequeueDog())
// console.log(g.storage())