import { message } from "antd";
import logo from "../../assets/logo.png";
import "./index.sass";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "@/store/actions";

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const onFinish = async (values) => {
    const { mobile, code } = values;
    try {
      await dispatch(login(mobile, code));
      message.success("登陆成功");
      history("/home");
    } catch (e) {
      //console.log(e);
      message.error(e.response?.data?.message || "登陆失败");
    }
  };
  return (
    <div className="login">
      <div className="login-container">
        <img className="login-logo" src={logo} alt=""></img>

        <Form
          onFinish={onFinish}
          initialValues={{
            mobile: "13911111111",
            code: "246810",
            isAgree: true,
          }}
          name="basic"
          size="large"
          validateTrigger={["onChange", "onBlur"]}
        >
          <Form.Item
            label="手机号"
            name="mobile"
            rules={[
              { required: true, message: "手机号码为必填项" },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: "手机号码格式不正确",
              },
            ]}
          >
            <Input placeholder="请输入手机号码" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            label="验证码"
            name="code"
            rules={[
              { required: true, message: "验证码为必填项" },
              { len: 6, message: "请输入六位验证码" },
            ]}
          >
            <Input.Password
              placeholder="请输入验证码"
              prefix={<LockOutlined />}
            />
          </Form.Item>

          <Form.Item
            name="isAgree"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) => {
                  if (value === true) return Promise.resolve();
                  else return Promise.reject(new Error("请勾选我已阅读同意"));
                },
              },
            ]}
          >
            <Checkbox>我已阅读并同意「用户协议」和「隐私条款」</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" block htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
