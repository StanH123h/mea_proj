import React from 'react';
import { Card, List, Typography, Row, Col } from 'antd';
import 'antd/dist/antd.css';

const data = [
  {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswMchsnSrPwUmiywcV.png',
    title: '百年职校',
    description: '百年职校的素养变革和它的素养模型',
  },
  {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswMchsnSrPwUmiywcV.png',
    title: '南宁梅沙幼儿园',
    description: '梅沙和它的国家课题，核心素养从娃娃抓起',
  },
  {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswMchsnSrPwUmiywcV.png',
    title: '筑桥小学',
    description: '筑桥小学和它的新教师们，素养在方方面面',
  },
];


const List = () => {
  return (
    <Row gutter={24}>
      {data.map((item, index) => (
        <Col key={index} xs={24} sm={24} md={12} lg={8}>
          <Card
            className="card-item"
            cover={<img alt={item.title} src={item.img} />}
            actions={[
              <a href="#">更多</a>,
            ]}
          >
            <Card.Meta
              title={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography.Title level={3}>{item.title}</Typography.Title>
                  <span style={{ marginLeft: 'auto' }}>→</span>
                </div>
              }
              description={item.description}
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default App;