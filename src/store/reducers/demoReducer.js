const initState = {
  demos: [
    { id: "1", title: "The Devils ride", artist: "Sweety" },
    { id: "2", title: "Smoking Bacon", artist: "Electric Hillbillies" },
    { id: "3", title: "Synergy", artist: "Samantha Shine" }
  ]
};

const demoReducer = (state = initState, action) => {
  return state;
};

export default demoReducer;
