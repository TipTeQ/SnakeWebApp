import { Component } from '@angular/core';
// import { setTimeout } from 'timers';

import { COLOURS } from './app.constants';
import { SnakeService } from './services/snake.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public board: string[][] = [];

  constructor(private snakeService: SnakeService) { }

  ngOnInit() {
    this.UpdateBoard();
  }

  private UpdateBoard(): void {
    this.board = this.snakeService.GetUpdatedBoard();

    setTimeout(() => { this.UpdateBoard() }, 50);
  }

  public setColors(row: number, column: number): string {
    if (this.board[row][column] == "H") {
      return COLOURS.HEAD;
    } else if (this.board[row][column] == "X" || this.board[row][column] == "T") {
      return COLOURS.BODY;
    } else if (this.board[row][column] == "*") {
      return COLOURS.APPLE;
    }

    return COLOURS.BOARD;
  };
}
