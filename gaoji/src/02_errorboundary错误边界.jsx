
import { classNames } from "classnames"
import { ErrorBoundary } from "react-error-boundary"

function Head() {
  classNames()
  return (
    <div>
      hello Head
    </div>
  )
}

function App() {
  return (
    <div>
      hello App
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Head />
      </ErrorBoundary>
    </div>
  )
}

export default App