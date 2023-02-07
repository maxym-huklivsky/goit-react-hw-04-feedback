// eslint-disable-next-line import/no-anonymous-default-export
export default function (state, action) {
  console.log(state);
  switch (action.type) {
    case 'good':
      return { ...state, good: state.good + action.payload };

    case 'neutral':
      return { ...state, neutral: state.neutral + action.payload };

    case 'bad':
      return { ...state, bad: state.bad + action.payload };

    default:
      return;
  }
}
