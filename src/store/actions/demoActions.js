export const createDemo = demo => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //async call to database

    const firestore = getFirestore();
    firestore
      .collection("demos")
      .add({
        ...demo,
        producerFirstName: "Jane",
        producerLastName: "Doe",
        producerId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_DEMO", demo });
      })
      .catch(err => {
        dispatch({ type: "CREATE_DEMO_ERROR", err });
      });
  };
};
