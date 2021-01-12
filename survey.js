const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable ', (name) => {
  rl.question('What activity do you like doing? ', (activity) => {
    rl.question('What music do you like listening to while doing the above activity? ', (music) => {
      rl.question('Which meal is your favourite? ', (meal) => {
        rl.question('What is your favourite thing to eat for that meal? ', (food) => {
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (power) => {
  console.log(`${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport and is amazing at ${power}.`);



  rl.close();
            });
          });
        });
      });
    });
 });
});
