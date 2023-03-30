import Login from "./components/login"
import Register from "./components/register"

import classNames from "classnames/bind";
import styles from "./App.scss";
const cx = classNames.bind(styles);

function App() {
  return <div className={cx('app')}>
    <Login />

  </div>
}

export default App;
  