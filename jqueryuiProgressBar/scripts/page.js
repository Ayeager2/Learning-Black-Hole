// /// <reference path="jquery-1.6.2.js" />
// /// <reference path="jquery-ui-1.8.16.custom.js" />

// $(function () {

//     $("#dialog").dialog(
//         {
//             autoOpen: false,
//             modal: true,
//             resizable: false,
//             draggable: false,
//             position: "top",
//             buttons: {
//                 "Yes, I do!": function () {
//                     $("#dialog").dialog("close");
//                     $("#dialogDecision").text("Yes you did!!");
//                 },
//                 "No": function () { }
//             }
//         }
//      );

//     $("#openDialog").click(function () {
//         $("#dialog").dialog("open");
//     });

//     //$("#progress").progressbar({ value: 60 });

//     $("#progress").progressbar({ value: 0 });

//     var value = 0;
//     var experiencePoints =0;
//     countdown();

//     function countdown() {
//         value++;
//         $("#progress").progressbar("option", "value", value);
//         $("#countdown").text(value);

//         if (value < 100) {
//             setTimeout(countdown, 10);
//         }
//         else {
//             $("#countdown").text("completed");
//             value = 0;
//             experiencePoints++;
//             $("#experience").text(experiencePoints);
//             countdown();
//         }
//     }

//     $("#slider").slider({ min: 0, max: 100, value: 100, slide: function (event, ui) {
//         $("#slider").prev().css({ opacity: ui.value / 100 });
//     }
//     });

//     $("#tabs").tabs();

//     $("#accordian").accordion({autoHeight: false, collapsible: true,
//     change: function (event, ui) {
//         console.log(event);
//         console.log(ui);
//       }
//     });
//     $("#accordian").accordion("activate",0);

//     var classes = [
//         "C#",
//         "LINQ",
//         "Entity Framework",
//         "ASP .NET MVC",
//         "jQuery UI",
//         "CSS",
//         "JQuery",
//         "JavaScript",
//         "Test driven development",
//         "Design patterns",
//     ]
//     $("#search").autocomplete({
//         source: classes,
//         // source: "autocompletejason.ashx"
//     });

// });



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
  var missedTurn = [' twiddles their thumbs.', ' watches the fun.', ' was busy daydreaming.', ' forgot to fight.']
  
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
      (alive.splice(alive.indexOf(b), 1));
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
  ]
  
  var alive;
  
  // run battle
  function start() {
    fighters.forEach(f => f.health = 200);
    alive = fighters.slice();
    alive.forEach(x => x.quip());
    while(alive.length > 1) {
      fightRound(alive.slice());
    }
    console.log((alive.length ? alive[0].name : 'Nobody') + ' is victorious!');
  }