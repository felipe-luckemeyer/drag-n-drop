import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./column";
import initialData from "./assets/initial-data";

class Home extends Component {
  state = initialData;

  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const column = this.state.columns[source.droppableId];
    const newCardIds = Array.from(column.cardIds);
    newCardIds.splice(source.index, 1);
    newCardIds.splice(destination.index, 0, draggableId);
    const newColumn = {
      ...column,
      cardIds: newCardIds
    };
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn
      }
    };
    this.setState(newState);
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const cards = column.cardIds.map(cardId => this.state.cards[cardId]);
          return (
            <>
              <Column key={column.id} column={column} cards={cards} />
            </>
          );
        })}
      </DragDropContext>
    );
  }
}

export default Home;
