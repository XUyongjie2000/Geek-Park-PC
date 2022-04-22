import { Layout, Menu, Popconfirm, Button } from "antd";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.sass";
import {
  PieChartOutlined,
  SolutionOutlined,
  FileWordOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
//导入路由
import Dashboard from "../Dashboard";
import Article from "../Article";
import Publish from "../Publish";
import { Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const Home = () => {
  return (
    <Layout className="geek-layout">
      <Sider width={148}>
        <div className="logo">GEEK</div>
        <Menu defaultSelectedKeys={["1"]} mode="inline" theme="dark">
          <Menu.Item icon={<PieChartOutlined />} key="1">
            <Link to="/dashboard">数据面板</Link>
          </Menu.Item>
          <Menu.Item icon={<SolutionOutlined />} key="2">
            <Link to="/article">内容管理</Link>
          </Menu.Item>
          <Menu.Item icon={<FileWordOutlined />} key="3">
            <Link to="/publish">发布文章</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header>
          <span style={{ fontSize: 16 }}>极客园自媒体端</span>
          <div>
            <span>{"张三"}</span>
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
        <Content>内容</Content>
      </Layout>
      <Routes>
        <Route
          path="/home/*"
          exact
          render={() => <Navigate to="/dashboard" />}
        ></Route>
        <Route path="/dashboard" element={Dashboard} />
        <Route path="/article" element={Article} />
        <Route path="/publish/:id?" element={Publish} />
      </Routes>
    </Layout>
  );
};

export default Home;
