// List.stories.js
import React from 'react';
import { List, Button, Typography } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const data = [
  {
    title: '百年职校',
    description: '百年职校的素养变革和它的素养模型',
    img: 'https://www.bing.com/images/search?q=%E5%9B%BE%E7%89%87&FORM=IQFRBA&id=47D2FC71BF8F58BAB16D19747AF69D22D9E079C7',
  },
  {
    title: '南宁梅沙幼儿园',
    description: '梅沙和它的面家课程，核心素养从娃娃抓起',
    img: 'https://www.bing.com/images/search?q=%E5%9B%BE%E7%89%87&FORM=IQFRBA&id=47D2FC71BF8F58BAB16D19747AF69D22D9E079C7',
  },
  {
    title: '筑桥小学',
    description: '筑桥小学和它的新家长们，素养在方方面面',
    img: 'https://www.bing.com/images/search?q=%E5%9B%BE%E7%89%87&FORM=IQFRBA&id=47D2FC71BF8F58BAB16D19747AF69D22D9E079C7',
  },
];

const CustomList = () => (
  <List
    itemLayout="vertical"
    size="large"
    dataSource={data}
    renderItem={item => (
      <List.Item
        key={item.title}
        extra={
          <img
            width={272}
            alt={item.title}
            src={item.img}
          />
        }
      >
        <List.Item.Meta
          title={<Typography.Title level={4}>{item.title}</Typography.Title>}
          description={item.description}
        />
        <Button type="primary" icon={<RightOutlined />}>查看详情</Button>
      </List.Item>
    )}
  />
);




// Storybook 配置
export default {
  title: 'Components/List',
  component: CustomList,
};

// 默认故事
export const BasicUsage = () => <CustomList />;

// 可选的额外故事，展示不同配置或状态
// export const WithCustomStyles = () => (
//   <ListComponent customProp="customValue" />
// );

// 注意：上述示例中直接使用了`ListComponent`作为组件名称进行导出和引用，
// 请确保你的组件文件名与导入导出的名称相匹配。
