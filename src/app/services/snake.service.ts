import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SnakeService {

  private _board: string[][] = [];

  constructor(private http: Http) { }

  public GetUpdatedBoard(): string[][] {
    this.http.get("http://localhost:59946/api/values")
      .subscribe((result) => {
        this._board = <string[][]>result.json();
      },
      (error) => {
      },
      () => {
      });

    return this._board;
  }

}
