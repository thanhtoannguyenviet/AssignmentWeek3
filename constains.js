const CHOICES = [
    {
      name: 'rock',
      uri: require('./assets/rock.png')
    },
    {
      name: 'paper',
      uri: require('./assets/paper.png')
    },
    {
      name: 'scissors',
      uri: require('./assets/scissor.png')
    }
  ];
const randomComputerChoice = () => CHOICES[Math.floor(Math.random() * CHOICES.length)];

const getRoundOutCome = (userChoice, computerChoice) => {
  let result;
  if (userChoice === 'rock') {
    result = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
  }
  if (userChoice === 'paper') {
    result = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
  }
  if (userChoice === 'scissors') {
    result = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
  }
  if (userChoice === computerChoice) result = 'Tie game!';
  return result;
};
  export {CHOICES,randomComputerChoice,getRoundOutCome}