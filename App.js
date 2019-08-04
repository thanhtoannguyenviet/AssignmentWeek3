import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameStatus from './components/GameStatus'
import GamePlay from './components/GamePlay'
import ButtonGroup from './components/ButtonGroup'
import CountGroup from './components/CountGroup'
import {CHOICES,getRoundOutCome,randomComputerChoice} from './constains'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerChoice: {},
      computerChoice: {},
      result: "",
      countWin: "0",
      countLose: "0",
      countBattle:"0"
    }
  }
  onPressBtn = playerChoice => {
    const found = CHOICES.find(choice => choice.name === playerChoice)
    const computerChoice = randomComputerChoice();
    const result = getRoundOutCome(found.name, computerChoice.name);
    

    this.setState({
      playerChoice: found,
      computerChoice,
      result,
      countBattle:parseInt(this.state.countBattle)+1,
      countWin: result==='Victory!'?parseInt(this.state.countWin)+1:this.state.countWin,
      countLose:result==='Defeat!'?parseInt(this.state.countLose)+1:this.state.countLose
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.GameStatus}>
          <GameStatus result={this.state.result} />
        </View>
        <View style={styles.GamePlay}>
          <GamePlay playerName="Player" choice={this.state.playerChoice} />
          <GamePlay playerName="Computer" choice={this.state.computerChoice} />
        </View>
        <View>
          <CountGroup  Win={this.state.countWin} Lose={this.state.countLose} Battle={this.state.countBattle}/>
        </View>

        <View style={styles.ButtonGroup}>
          <ButtonGroup onPressButton={this.onPressBtn} choice={CHOICES} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  GameStatus: {
    flex: 0.15,
    alignItems: 'center',
    color: 'blue',
    backgroundColor: 'gray',
  },
  GamePlay: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin:20,
  },
  ButtonGroup: {
    margin:20,
    flex: 0.45,
    alignItems: 'center',
  }

});
