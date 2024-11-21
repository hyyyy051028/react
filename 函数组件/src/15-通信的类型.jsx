
import PropTypes from 'prop-types';

function Welcome({ count, msg }) {
    return (
        <div>
            你好，欢迎，{count}，{msg}
        </div>
    );
}

Welcome.propTypes = {
    count: PropTypes.number.isRequired, // 确保 count 是必需的数字
    msg: PropTypes.string.isRequired,    // 确保 msg 是必需的字符串
};

function App() {
    return (
        <div>
            你好，应用
            {/* 传递有效的 count 值 */}
            <Welcome count={5} msg="你好，React" />
            {/* 这里可以传递默认值，避免错误 */}
            <Welcome count={0} msg="没有消息" />
        </div>
    );
}

export default App; // 确保组件可以被外部使用
