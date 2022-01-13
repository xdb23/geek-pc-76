import { Card, Form, Input, Button, Checkbox } from 'antd'
import logo from '../../assets/logo.png'
import './index.scss'
const Login = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='login'>
      <Card className='login-container'>
        <img className='login-logo' src={logo} alt='' />
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '手机号不能为空' }]}
          >
            <Input placeholder='请输入你的手机号' size='large' />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: '验证码不能为空' }]}
          >
            <Input placeholder='请输入验证码' size='large' />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ span: 24 }}>
            <Checkbox>我已阅读并同意[隐私条款]和[用户协议]</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button type="primary" htmlType="submit" size='large' block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
