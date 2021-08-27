import { Button } from './components/Button';
import styled from 'styled-components';

export default function App() {
  return (
    <Visual>
    <Button />
    </Visual>
   );
  
}

const Visual = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 98vh;
`;