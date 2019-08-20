import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        isActive={this.props.active.indexOf(i) > -1}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const squareRows = [];
    for (let row = 0; row < 3; row++) {
      let squareRow = [];
      for (let col = 0; col < 3; col++) {
        squareRow.push(this.renderSquare(row * 3 + col));
      }
      squareRows.push(squareRow);
    }

    return (
      <div>
        {squareRows.map((row, index) => {
          return (
            <div className="board-row" key={index}>
              {row}
            </div>
          )
        })}
      </div>
    );
  }
}