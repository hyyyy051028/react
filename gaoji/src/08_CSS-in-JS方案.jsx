import { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 200px;
  height: 200px;
  display: ${({ show }) => (show ? 'block' : 'none')};
  background: red;
  p {
    color: white;
  }
`;
const Link = styled.a`
  text-decoration: underline;
  color: red;
  &:hover {
    color: yellow;
  }
`;

function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      hello App
      <button onClick={() => setShow(!show)}>点击</button>
      <Div
        title="hello world"
        show={show}
      >
        <p>pppppppp</p>
      </Div>
      <Link href="https://www.baidu.com">去百度</Link>
    </div>
  );
}
export default App;
