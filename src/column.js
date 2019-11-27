import React, { Component } from "react";
import Card from "./card";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  margin: 8px;
  border: solid 1px lightgray;
  border-radius: 5px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const CardList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? "#e0e0e0" : "white")};
`;

export default class Column extends Component {
  render() {
    //const { key, column, cards } = this.props;
    return (
      <Container>
        <Title>{this.props.column.title}</Title>

        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <CardList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.cards.map((cardMap, index) => (
                <Card key={cardMap.id} card={cardMap} index={index} />
              ))}
              {provided.placeholder}
            </CardList>
          )}
        </Droppable>
      </Container>
    );
  }
}
