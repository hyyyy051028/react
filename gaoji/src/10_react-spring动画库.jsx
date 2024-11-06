import { animated, useSpring } from '@react-spring/web';
import { useState } from 'react';

const FadeIn = ({ isVisible, children }) => {
  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24,
  });

  return (
    <animated.div style={styles}>
      {children}
      <animated.span>{styles.y.to((val) => val.toFixed(0))}</animated.span>
    </animated.div>
  );
};

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>点击</button>
      <FadeIn isVisible={isVisible}>hello App</FadeIn>
    </div>
  );
}
export default App;
