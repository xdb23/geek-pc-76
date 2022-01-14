import ReactDOM from 'react-dom'
import App from './App'
// 先导入 antd 样式文件
import 'antd/dist/antd.css'
// 导入自己的样式
import './index.scss'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
