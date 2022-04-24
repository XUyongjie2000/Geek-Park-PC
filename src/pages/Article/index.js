import {
  Breadcrumb,
  Button,
  Card,
  ConfigProvider,
  DatePicker,
  Form,
  Radio,
  Select,
} from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import FormItem from "antd/lib/form/FormItem";
import { Link } from "react-router-dom";
import styles from "./index.module.sass";
import { useSelector } from "react-redux";
const Article = () => {
  const { channels } = useSelector((state) => {
    return state.todos.article;
  });
  // console.log(channels);
  //组件第一次渲染dispatch 分发action
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   //获取频道数据
  //   dispatch(getChannels());
  //   //获取文章数据
  //   dispatch(getArticles({}));
  // }, [dispatch]);
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
        <Form>
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
            <FormItem label="日期">
              <DatePicker.RangePicker />
            </FormItem>
          </ConfigProvider>
          <FormItem>
            <Button type="primary"> 筛选</Button>
          </FormItem>
        </Form>
      </Card>
    </div>
  );
};
export default Article;
