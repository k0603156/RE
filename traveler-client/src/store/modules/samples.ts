const ADD_SAMPLE = "samples/ADD" as const;
const DELETE_SAMPLE = "samples/DELETE" as const;

export const add_sample = (sample: string) => ({
  type: ADD_SAMPLE,
  payload: sample
});
export const delete_sample = (sample: string) => ({
  type: DELETE_SAMPLE,
  payload: sample
});

interface SampleStateType {
  samples: string[];
}

const initialState: SampleStateType = {
  samples: []
};

type SampleActionType =
  | ReturnType<typeof add_sample>
  | ReturnType<typeof delete_sample>;

export default function samples(
  state = initialState,
  action: SampleActionType
): SampleStateType {
  switch (action.type) {
    case ADD_SAMPLE:
      return {
        samples: [...state.samples, action.payload]
      };
    case DELETE_SAMPLE:
      return {
        samples: state.samples.filter(sample => sample !== action.payload)
      };
    default:
      return state;
  }
}
