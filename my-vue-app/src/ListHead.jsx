import { useContext } from 'react';
import { ListDispatchContext } from './ListProvider';

function ListHead() {
  const listDispatch = useContext(ListDispatchContext);
  return (
    <>
      <input type="text" />
      <button onClick={() => listDispatch({ type: 'add' })}>添加</button>
    </>
  );
}
export default ListHead;
