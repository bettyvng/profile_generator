const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)\nAns: ", (answer1) => {
  rl.question("What's an activity you like doing?\nAns: ", answer2 => {
    rl.question("What do you listen to while doing that?\nAns: ", answer3 => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)\nAns: ", answer4 => {
        rl.question("What's your favourite thing to eat for that meal?\nAns: ", answer5 => {
          rl.question("What is your superpower? In a few words, tell us what you are amazing at!\nAns: ", answer6 => {
            console.log("\n\n==== Here is your profile ====\n");
            console.log(`Hello, my name is ${answer1}.  In my free time, I love to go ${answer2} and put ${answer3} on repeat.`);
            console.log(`My favourite meal is to have ${answer5} for ${answer4}.  Last but not least, I have the following superpowers; ${answer6}\n\n`);
            rl.close();
          });
        });
      });
    });
  });
});
