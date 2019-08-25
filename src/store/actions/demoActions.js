export const createDemo = demo => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //async call to database

    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const producerId = getState().firebase.auth.uid;

    firestore
      .collection("demos")
      .add({
        ...demo,
        producerFirstName: profile.firstName,
        producerLastName: profile.lastName,
        producerId: producerId,
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
