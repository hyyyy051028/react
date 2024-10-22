import PropTypes from 'prop-types'
function Head() {
    return (
        <div>
            hello head
        </div>
    );
}

function Welcome({children}) {
    return (
        <div>
            hello welcome
            {children}
        </div>
    );
}
Welcome.propTypes = {
    children: PropTypes.node, // 允许任何可渲染的内容
};
function App() {
    return (
        <div>
            hello app
            <Welcome>
                <Head />           
            </Welcome>
        </div>
    );
}

export default App;