import { login } from '@/api'
import { setToken } from '@/utils'
import { Card, Form, Input, Button, Checkbox, message } from 'antd'
import { useHistory } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './index.scss'

type FormData = { mobile: string; code: string; remember: boolean }
const Login = () => {
  // history
  const history = useHistory()
  const onFinish = async (values: FormData) => {
    // console.log('Success:', values);
    const { mobile, code } = values
    const res = await login(mobile, code)
    console.log('res', res)
    message.success('登录成功')
    setToken(res.data.data.token)
    history.push('/home')
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className='login'>
      <Card className='login-container'>
        <img className='login-logo' src={logo} alt='' />
        <Form
          name='basic'
          labelCol={{ span: 8 }}
          validateTrigger={['onChange', 'onBlur']}
          wrapperCol={{ span: 24 }}
          initialValues={{
            remember: true,
            mobile: '13911111111',
            code: '246810'
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            name='mobile'
            rules={[
              { required: true, message: '手机号不能为空' },
              {
                pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
                message: '手机号格式有误'
              }
            ]}
          >
            <Input placeholder='请输入你的手机号' size='large' />
          </Form.Item>

          <Form.Item
            name='code'
            rules={[
              { required: true, message: '验证码不能为空' },
              { pattern: /^\d{6}$/, message: '验证码格式有误' }
            ]}
          >
            <Input placeholder='请输入验证码' size='large' />
          </Form.Item>

          <Form.Item
            name='remember'
            valuePropName='checked'
            rules={[
              {
                validator: (_, value) => {
                  return value
                    ? Promise.resolve()
                    : Promise.reject(new Error('请勾选用户协议！'))
                }
              }
            ]}
            wrapperCol={{ span: 24 }}
          >
            <Checkbox>我已阅读并同意[隐私条款]和[用户协议]</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button type='primary' htmlType='submit' size='large' block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
