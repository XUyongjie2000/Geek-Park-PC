import { getChannels } from "@/store/actions";
import {
  Breadcrumb,
  Card,
  Form,
  Input,
  Select,
  Space,
  Button,
  Radio,
  Upload,
  message,
} from "antd";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import styles from "./index.module.sass";
// 富文本
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const Publish = () => {
  //校验封面类和图片张数
  const onFinish = async (values) => {
    if (type !== fileList.length) {
      return message.warning("请按照选择的封面类型上传图片");
    }
  };
  //根据封面类型 限制上图图片的张数
  const [fileList, setFileList] = useState([]);
  const onUploadChange = ({ fileList }) => {
    setFileList(fileList);
  };
  //封面类型渲染和切换
  const [type, setType] = useState(1);
  const onTypeChange = (e) => {
    setType(e.target.value);
    setFileList([]);
  };
  //频道数据
  const channels = useSelector((state) => state.todos.article.channels);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChannels());
  }, [dispatch]);
  return (
    <div className={styles.root}>
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
        <Form onFinish={onFinish} labelCol={{ span: 4 }}>
          <Form.Item
            label="文章标题"
            name="title"
            rules={[{ required: true, message: "请输入文章标题" }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }}></Input>
          </Form.Item>
          <Form.Item
            label="所属频道"
            name="channel_id"
            reles={[{ required: true, message: "请选择所属频道" }]}
          >
            <Select style={{ width: 400 }}>
              {channels.map((item) => {
                return <Select.Option key={item.id}>{item.name}</Select.Option>;
              })}
            </Select>
          </Form.Item>
          <Form.Item label="文章封面">
            {/* 一个FormItem只能有一个元素 */}
            <Form.Item style={{ marginBottom: 0 }}>
              <Radio.Group value={type} onChange={onTypeChange}>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            {type > 0 ? (
              <div style={{ marginTop: 16 }}>
                <Upload
                  name="image"
                  listType="picture-card"
                  action="http://geek.itheima.net/v1_0/upload"
                  fileList={fileList}
                  onPreview={() => {}}
                  onChange={onUploadChange}
                >
                  {fileList.length < type ? (
                    <div>
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  ) : null}
                </Upload>
              </div>
            ) : null}
          </Form.Item>
          <Form.Item
            label="文章内容"
            name="content"
            wrapperCol={{ span: 16 }}
            rules={[{ required: true, message: "请输入文章内容" }]}
            initialValue=""
          >
            <ReactQuill placeholder="请输入文章内容" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                发表文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default Publish;
