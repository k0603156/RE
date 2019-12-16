const ADD_SAMPLE = "samples/ADD";
const DELETE_SAMPLE = "samples/DELETE";

export const add_sample = sample => ({ type: ADD, sample });
export const delete_sample = sample => ({ type: DELETE, sample });

const initialState = {
  samples: []
};

export default function samples(state = initialState, action) {
  switch (action.type) {
    case ADD_SAMPLE:
      return {
        samples: [...state.samples, action.sample]
      };
    case DELETE_SAMPLE:
      return {
        samples: state.samples.filter(sample => sample !== action.sample)
      };
    default:
      return state;
  }
}
