import { useId } from 'react';

function MyInput() {
  const password = useId();
  return (
    <>
      <label>
        密码:
        <input
          type="password"
          aria-describedby="{ password}"
        />
      </label>
      <p id="{password}">密码应该包括至少18个字符</p>
    </>
  );
}
function App() {
  return (
    <div>
      hello app
      <MyInput />
    </div>
  );
}
export default App;
