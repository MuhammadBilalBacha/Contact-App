const initialState = [
  {
    id: 1,
    name: "Bilal",
    email: "bilal.se.iiui@gmail",
    number: "03130148486",
  },
  {
    id: 2,
    name: "Ismail",
    email: "ismail.bangash.iiui@gmail",
    number: "03450148486",
  },
];

const ReducerFunc = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return (state = [...state, action.payload]);
    case "UPDATE_CONTACT":
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = contactUpdate;
      return state;
    case "DELETE_CONTACT":
      const contactFilter = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = contactFilter;
      return state;
    default:
      return state;
  }
};

export default ReducerFunc;
