const initState = {
  demos: [
    { id: "1", title: "The Devils ride", artist: "Sweety" },
    { id: "2", title: "Smoking Bacon", artist: "Electric Hillbillies" },
    { id: "3", title: "Synergy", artist: "Samantha Shine" }
  ]
};

const demoReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_DEMO":
      console.log("created demo", action.demo);
      return state;
    case "CREATE_DEMO_ERROR":
      console.log("create demo error", action.err);
      return state;
    default:
      return state;
  }
};

export default demoReducer;
