// import { message, Button } from 'antd';

// function App() {
//   const [messageApi, contextHolder] = message.useMessage();
//   const info = () => {
//     messageApi.info('Hello, Ant Design!');
//   };
//   return (
//     <>
//       {contextHolder}
//       <Button
//         type="primary"
//         onClick={info}
//       >
//         Display normal message
//       </Button>
//     </>
//   );
// }

// export default App;

import { message, Button } from 'antd';

function App() {
  const info = () => {
    message.info('Hello, Ant Design!');
  };
  return (
    <>
      <Button
        type="primary"
        onClick={info}
      >
        Display normal message
      </Button>
    </>
  );
}

export default App;

/* import { message, Button } from 'antd'
import {useContext, createContext } from 'react'

const Context = createContext()

function Title() {
  const value = useContext(Context)
  return value
}

function App() {
  const info = () => {
    message.info(<Title />)
  }
  return (
    <>
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
    </>
  )
}

function AppWrapper() {
  return (
    <Context.Provider value={123}>
      <App />
    </Context.Provider>
  )
}

export default AppWrapper */

/* 
import { message, Button } from 'antd'
import {useContext, createContext } from 'react'

const Context = createContext()

function Title() {
  const value = useContext(Context)
  return value
}

function App() {
  const [messageApi, contextHolder] = message.useMessage()
  const info = () => {
    messageApi.info(<Title />)
  }
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
    </>
  )
}

function AppWrapper() {
  return (
    <Context.Provider value={123}>
      <App />
    </Context.Provider>
  )
}

export default AppWrapper */

// import { Button, App } from 'antd'
// import {useContext, createContext } from 'react'

// const Context = createContext()

// function Title() {
//   const value = useContext(Context)
//   return value
// }

// function AppComponent() {
//   const { message } = App.useApp()
//   const info = () => {
//     message.info(<Title />)
//   }
//   return (
//     <>
//       <Button type="primary" onClick={info}>
//         Display normal message
//       </Button>
//     </>
//   )
// }

// function AppWrapper() {
//   return (
//     <Context.Provider value={123}>
//       <App>
//         <AppComponent />
//       </App>
//     </Context.Provider>
//   )
// }

// export default AppWrapper
