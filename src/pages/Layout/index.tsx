import { Link, Route, useHistory, useLocation } from 'react-router-dom'
import Article from '../Article'
import Home from '../Home'
import Publish from '../Publish'
import style from './index.module.scss'
import { Layout, Menu, message, Popconfirm } from 'antd'
import logo from '@/assets/logo.png'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { logoutAction, userInfoAction } from '@/store/actions/user'
const { Header, Sider, Content } = Layout

function LayoutCom () {
  const location = useLocation()
  const { pathname } = location
  const dispatch = useDispatch()
  const history = useHistory()
  const info = useSelector((state: RootState) => state.user)
  const text = '确认退出吗？'

  function confirm () {
    message.info('已登出')
    dispatch(logoutAction())
    history.push('/login')
  }

  useEffect(() => {
    dispatch(userInfoAction())
  }, [])
  return (
    <div className={style.layout}>
      <Layout>
        <Sider>
          <img className='logo' src={logo} alt='' />
          <Menu defaultSelectedKeys={[pathname]} mode='inline' theme='dark'>
            <Menu.Item key='/home' icon={<HomeOutlined />}>
              <Link to='/home'>数据概览</Link>
            </Menu.Item>
            <Menu.Item key='/home/article' icon={<DiffOutlined />}>
              <Link to='/home/article'>内容管理</Link>
            </Menu.Item>
            <Menu.Item key='/home/publish' icon={<EditOutlined />}>
              <Link to='/home/publish'>发布文章</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header>
            <div className='right'>
              <img className='icon' src={info.photo} alt='' />
              <span className='username'>{info.name}</span>
              <span className='logout'>
                <Popconfirm
                  placement='bottomRight'
                  title={text}
                  onConfirm={confirm}
                  okText='Yes'
                  cancelText='No'
                >
                  <LogoutOutlined />
                  退出
                </Popconfirm>
              </span>
            </div>
          </Header>
          <Content>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route path='/home/article' component={Article}>
              <Article />
            </Route>
            <Route path='/home/publish'>
              <Publish />
            </Route>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default LayoutCom
