import {
  Breadcrumb,
  Button,
  Card,
  ConfigProvider,
  DatePicker,
  Form,
  Image,
  Radio,
  Select,
  Space,
  Tag,
  Table,
} from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import FormItem from "antd/lib/form/FormItem";
import { Link } from "react-router-dom";
import styles from "./index.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getArticles, getChannels } from "@/store/actions";
import defaultImg from "@/assets/error.png";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const Article = () => {
  //改变分页和size重新查询
  const onPageChange = (page, pageSize) => {
    const params = {};
    params.page = page;
    params.per_page = pageSize;
    dispatch(getArticles(params));
  };
  //改变筛选条件
  const onFinish = (values) => {
    // console.log(value);
    const params = {};
    params.status = values.status;
    params.channel_id = values.channel_id;
    if (values.dateArr) {
      params.begin_pubdate = values.dateArr[0].format("YYYY-MM-DD HH:mm:ss");
      params.end_pubdate = values.dateArr[1].format("YYYY-MM-DD HH:mm:ss");
    } else {
      params.begin_pubdate = undefined;
      params.end_pubdate = undefined;
    }
    console.log(params, "11");
    dispatch(getArticles(params));
  };
  //阅读状态数据
  const statusLabel = [
    { text: "草稿", color: "default" },
    { text: "待审核", color: "blue" },
    { text: "审核通过", color: "green" },
    { text: "审核拒绝", color: "red" },
  ];
  const { channels, results, page, per_page, total_count } = useSelector(
    (state) => {
      return state.todos.article;
    }
  );
  console.log(results, "results");
  // console.log(channels);
  //组件第一次渲染dispatch 分发action
  const dispatch = useDispatch();
  useEffect(() => {
    //获取频道数据
    dispatch(getChannels());
    //获取文章数据
    dispatch(getArticles({}));
  }, [dispatch]);
  const columns = [
    {
      title: "封面",
      dataIndex: "cover",
      key: "cover",
      render: (cover) => (
        <Image
          src={cover?.images?.[0] || defaultImg}
          style={{ objectFit: "cover" }}
          width={200}
          height={120}
        />
      ),
    },
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const info = statusLabel[status];
        return <Tag color={info.color}>{info.text}</Tag>;
      },
    },
    {
      title: "发布时间",
      dataIndex: "pubdate",
      key: "pubdate",
    },
    {
      title: "阅读数",
      dataIndex: "read_count",
      key: "read_count",
    },
    {
      title: "评论数",
      dataIndex: "comment_count",
      key: "comment_count",
    },
    {
      title: "点赞数",
      dataIndex: "like_count",
      key: "like_count",
    },
    {
      title: "操作",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button type="link" icon={<EditOutlined />} />
          <Button type="link" icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];

  return (
    <div className={styles.root}>
      <Card
        title={
          //面包屑
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">首页</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>内容管理</BreadcrumbItem>
          </Breadcrumb>
        }
      >
        {/* from表单 */}
        <Form onFinish={onFinish}>
          <FormItem label="状态" name="status">
            <Radio.Group>
              <Radio value={undefined}>全部</Radio>
              <Radio value={0}>草稿</Radio>
              <Radio value={1}>待审核</Radio>
              <Radio value={2}>已通过</Radio>
              <Radio value={3}>已拒绝</Radio>
            </Radio.Group>
          </FormItem>
          <FormItem label="频道" name="channel_id">
            <Select style={{ width: 288 }}>
              {channels.map((item) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </FormItem>
          <ConfigProvider locale={zhCN}>
            <FormItem label="日期" name="dateArr">
              <DatePicker.RangePicker />
            </FormItem>
          </ConfigProvider>
          <FormItem>
            <Button type="primary" htmlType="submit">
              {" "}
              筛选
            </Button>
          </FormItem>
        </Form>
      </Card>
      <Card
        title={`根据筛选条件共查询到 100 条结果：`}
        style={{ marginTop: 24 }}
      >
        <Table
          columns={columns}
          dataSource={results}
          rowKey={(results) => results.id}
          pagination={{
            current: page,
            pageSize: per_page,
            total: total_count,
            onChange: onPageChange,
          }}
        ></Table>
      </Card>
    </div>
  );
};
export default Article;
