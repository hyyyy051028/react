import ListContent from './ListContent';
import ListHead from './ListHead';
import ListProvider from './ListProvider';
function App() {
  return (
    <div>
      hello App
      <ListProvider>
        <ListHead />
        <ListContent />
      </ListProvider>
    </div>
  );
}

export default App;
