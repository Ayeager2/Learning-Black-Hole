class SuperHero {
    #attack;
    constructor(phrase, attack, name) {
      this.phrase = phrase;
      this.#attack = attack;
      this.health = 200;
      this.name = name;
    }
    quip(){
      console.log(this.phrase);
    }
    attack(thing) {
      return this.#attack(thing);
    }
  }
  
  // get health or death of person
  function seeHealth(person) {
    if (person.health <= 0) {return (person.name + ' is dead.')} else {
    return (person.name + ' has ' + person.health + ' health left.')}
  }
  
  // flavor text for missed turns
  var missedTurn = [' twiddles their thumbs.', ' watches the fun.', ' was busy daydreaming.', ' forgot to fight.' , 'got distracted by shiny lights']
  
  // runs each round of battle
  function fightRound(battlers) {
    var result = [];
    var total = battlers.length;
    battlers.forEach((battler, i) => {
      var target = Math.floor(Math.random() * total);
      if (target != i) {result.push(battler.attack(battlers[target]));}
      else if (total == 2) {result.push(battler.attack(battlers.find(b => b.name != battler.name)))}
      else { result.push(battler.name + missedTurn[Math.floor(Math.random() * 4)])}
    })
    var healthUpdate = [];
    battlers.forEach(b => {
      healthUpdate.push(seeHealth(b));
      if (b.health <= 0) {
      (aliveFighter.splice(alive.indexOf(b), 1));
    }})
    console.log(result.join('  '))
    console.log(healthUpdate.join('  '))
  }

  function healersRound(healers, battlers){
      var result = [];
      var total =battlers.length;
      healers.forEach((healer, i)=>{
          var target = Math.floor(Math.random()* total)
          if(target != i){result.push(healer.attack(healers[target]));}
          else if (total == 2) {result.push(healer.attack(battlers.find(b => b.name != battler.name)))}
          else { result.push(healer.name + missedTurn[Math.floor(Math.random() * 4)])}    
      })
      var healthUpdate = [];
      battlers.forEach(b => {
        healthUpdate.push(seeHealth(b));
        if (b.health <= 0) {
        (aliveHealer.splice(alive.indexOf(b), 1));
      }})
      console.log(result.join('  '))
      console.log(healthUpdate.join('  '))
  }
  
  // initialize fighters
  fighters = [
  new SuperHero("Squeak squeakin'!", function(thing){
    thing.health -= 10;
    return ("SquirrelMan throws nuts at " + thing.name + '.')}, 'SquirrelMan'),
  
  new SuperHero("Quack for justice!", (thing) => {
    thing.health -= 50;
    return ("DuckGirl shoots flamethrower at " + thing.name + '.');}, 'DuckGirl'),
  
  new SuperHero("*monologue*", (thing) => {
    thing.health -= 25;
    return ("Baddie smacks " + thing.name + " with a bat.")}, 'Baddie'),

    new SuperHero("I'm part coffee mug!", (thing) => {
        thing.health -= 30;
        return ("CeramicBoy throws a brick at " + thing.name + " and yells obsenities.")}, 'CeramicBoy'),
          
  ]

  healers = [
    new SuperHero("*awe my bees!*", (thing) => {
        thing.health += 50;
        return ("Gir shoves cake into " + thing.name + " with his feet!")}, 'Gir'),  
  ]


  var aliveFighter;  
  var aliveHealer;

  var alive;
  // run battle
  function start() {
    fighters.forEach(f => f.health = 200);
    healers.forEach(h => h.health = 200);
    aliveFighter = fighters.slice();
    aliveFighter.forEach(x => x.quip());
    while(aliveFighter.length > 1) {
      fightRound(aliveFighter.slice());
      healersRound(aliveHealer.slice(), aliveFighter.slice());
    }
    console.log((alive.length ? alive[0].name : 'Nobody') + ' is victorious!');
  }