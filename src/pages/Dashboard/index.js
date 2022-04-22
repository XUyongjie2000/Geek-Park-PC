import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
const Dashboard = () => {
  const chartRef = useRef();
  const options = {
    // 标题
    title: {
      text: "柱状图",
    },
    // 提示框组件
    tooltip: {
      // trigger: 'axis'
    },
    // 图例组件
    legend: {
      //     data:['销量'],
      //     show:true
    },
    // x轴
    xAxis: {
      type: "category",
      data: ["冬瓜", "茄子", "丝瓜", "玉米", "红薯", "西红柿", "芹菜"],
    },
    // y轴
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [20, 9, 39, 43, 60, 18, 50],
        // type: 'line' 折线图
        type: "bar", // 柱状图
        name: "销量",
      },
    ],
  };

  useEffect(() => {
    // 创建一个echarts实例，返回echarts实例。不能在单个容器中创建多个echarts实例
    const chart = echarts.init(chartRef.current);

    // 设置图表实例的配置项和数据
    chart.setOption(options);

    // 组件卸载
    return () => {
      // myChart.dispose() 销毁实例。实例销毁后无法再被使用
      chart.dispose();
    };
  });

  return (
    // 宽度要大，不然y轴有些名称可能不会显示
    <div style={{ width: "100%", height: "100%" }} ref={chartRef}></div>
  );
};
export default Dashboard;
