import * as C from './styles';

import { ErrorMessage } from '../MainComponents';

type Props = {
  title: string;
  type: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  error: string;
  maxLength?: number;
}

function Input({title, type, state, setState, error, maxLength}: Props) {
  return ( 
    <C.Container error={error}>
      <label>
        {title}
        <input 
          type={type}
          value={state}
          onChange={(e) => setState(e.target.value)}
          maxLength= {maxLength ? maxLength : undefined}
        />
        {error ? <ErrorMessage>{error}</ErrorMessage> : ''}
      </label>
    </C.Container>
   );
}

export default Input;