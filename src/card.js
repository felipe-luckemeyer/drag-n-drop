import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid ${props => (props.isDragging ? "null" : "gray")};
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDragging ? "#239140" : "white")};
`;

const Title = styled.label`
  color: ${props => (props.isDragging ? "#fff" : "#000")};
`;

export default class Card extends Component {
  render() {
    //const { key, card, index } = this.props;
    return (
      <Draggable draggableId={this.props.card.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <Title isDragging={snapshot.isDragging}>
              {this.props.card.content}
            </Title>
          </Container>
        )}
      </Draggable>
    );
  }
}
