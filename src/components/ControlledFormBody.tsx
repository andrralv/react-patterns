import { useReducer } from 'react';

const initialState = {
  location: '',
  favfood: ''
}

type State = {
  location: string,
  favfood: any
}

type Action = {
  type: 'location' | 'favfood',
  payload: any
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'location':
      return {...state, location: action.payload}
    case 'favfood':
      return {...state, favfood: action.payload}
    default:
      return state;
  }
}

const FormBody: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // otherwise
  // const [location, setLocation] = useState('');
  // const [favfood, setFavFood] = useState('');
  return (
  <div className="form-body">
    <label htmlFor="location">Location</label>
    <input type="text" name="location" value={state.location} onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch({type: 'location', payload: e.target.value})}></input>
    <label htmlFor="favfood">Favorite Food</label>
    <input type="text" name="favfood" value={state.favfood} onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch({type: 'favfood', payload: e.target.value})}></input>
  </div>)
}

export default FormBody;