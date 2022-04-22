import { Layout, Menu, Popconfirm, Button } from "antd";
import "./index.sass";
import {
  PieChartOutlined,
  SolutionOutlined,
  FileWordOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserInfo } from "@/store/actions";
const { Header, Sider, Content } = Layout;
//获取个人信息
const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.todos.user);
  console.log(user, "user");
  useEffect(() => {
    try {
      dispatch(getUserInfo());
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);
  const location = useLocation();
  // 激活菜单的key
  let defaultKey = location.pathname;
  return (
    <Layout className="geek-layout">
      <Sider width={148}>
        <div className="logo">GEEK</div>
        <Menu selectedKeys={[defaultKey]} mode="inline" theme="dark">
          <Menu.Item icon={<PieChartOutlined />} key="/home/dashboard">
            <Link to="/home/dashboard">数据面板</Link>
          </Menu.Item>
          <Menu.Item icon={<SolutionOutlined />} key="/home/article">
            <Link to="/home/article">内容管理</Link>
          </Menu.Item>
          <Menu.Item icon={<FileWordOutlined />} key="/home/publish">
            <Link to="/home/publish">发布文章</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header>
          <span style={{ fontSize: 16 }}>极客园自媒体端</span>
          <div className="user-info">
            <span className="user-name">{user.name}</span>

            <Popconfirm
              placement="bottomRight"
              title="您确认退出极客园自媒体端吗？"
              okText="确认"
              cancelText="取消"
            >
              <Button type="link" icon={<LogoutOutlined />}>
                退出
              </Button>
            </Popconfirm>
          </div>
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
