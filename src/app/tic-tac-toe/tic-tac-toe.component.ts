import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css'],
})
export class TicTacToeComponent {
  isEnded: boolean = false;
  currentPlayer: string = '⭕';
  p1Score: number = 0;
  p2Score: number = 0;
  winner: string = '';
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  play(line: number, col: number) {
    if (this.board[line][col] == '' && this.winner == '') {
      this.board[line][col] = this.currentPlayer;
      // verificar vencedor
      if (this.checkWinner(this.currentPlayer)) {
        this.winner = this.currentPlayer;
        this.handleLeaderBoard(this.currentPlayer)
        this.isEnded = true;
      }
      if (this.currentPlayer == '⭕') {
        this.currentPlayer = '❌';
      } else {
        this.currentPlayer = '⭕';
      }
    }
  }

  checkWinner(player: string): boolean {
    for (let i = 0; i < this.board.length; i++) {
      if (
        this.board[i][0] == player &&
        this.board[i][1] == player &&
        this.board[i][2] == player
      ) {
        return true;
      }
    }

    for (let i = 0; i < this.board.length; i++) {
      if (
        this.board[0][i] == player &&
        this.board[1][i] == player &&
        this.board[2][i] == player
      ) {
        return true;
      }
    }

    if (
      this.board[0][0] == player &&
      this.board[1][1] == player &&
      this.board[2][2] == player
    ) {
      return true;
    }
    if (
      this.board[0][2] == player &&
      this.board[1][1] == player &&
      this.board[2][0] == player
    ) {
      return true;
    }


    return false;
  }

  handleLeaderBoard(player){
    if(player === '⭕'){
      console.log('Player 1 wins')
      ++this.p1Score
    }
    else if(player === '❌'){
      console.log('Player 2 wins')
      ++this.p2Score
    }
  }

  reset() {
    this.currentPlayer = '⭕';
    this.winner = '';
    this.isEnded = false;
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }

  powerOff(){
    this.currentPlayer = '⭕';
    this.winner = '';
    this.isEnded = false;
    this.p1Score = 0;
    this.p2Score = 0;
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }
}
