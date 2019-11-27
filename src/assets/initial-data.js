const initialData = {
  cards: {
    "card-1": { id: "card-1", content: "Dragão Mestre" },
    "card-2": { id: "card-2", content: "Gigante de Lava" },
    "card-3": { id: "card-3", content: "Merlin" },
    "card-4": { id: "card-4", content: "Dragão Dourado" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Em Defesa",
      cardIds: ["card-1", "card-2", "card-3", "card-4"]
    }
  },
  columnOrder: ["column-1"]
};
export default initialData;
