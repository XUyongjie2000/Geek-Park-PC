import { getChannels } from "@/store/actions";
import { Breadcrumb, Card, Form, Input, Select, Space, Button } from "antd";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Publish = () => {
  //频道数据
  const channels = useSelector((state) => state.todos.article.channels);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChannels());
  }, [dispatch]);
  return (
    <div>
      <Card
        title={
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">首页</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/home/article">内容管理</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>发布文章</BreadcrumbItem>
          </Breadcrumb>
        }
      >
        <Form labelCol={{ span: 4 }}>
          <Form.Item label="文章标题" name="title">
            <Input placeholder="请输入文章标题" style={{ width: 400 }}></Input>
          </Form.Item>
          <Form.Item label="所属频道" name="channel_id">
            <Select style={{ width: 400 }}>
              {channels.map((item) => {
                return <Select.Option key={item.id}>{item.name}</Select.Option>;
              })}
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button type="primary">发表文章</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default Publish;
