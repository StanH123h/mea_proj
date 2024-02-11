'use client'
import React from 'react';
import {Divider, List, Typography, Space, Card} from 'antd';

export default function Cases({data}) {
    console.log(data)
    return(
        <>
            <Divider orientation="left">Default Size</Divider>
            <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={(item) => (
                    <Card title={item.name} extra={<a href="#">More</a>} style={{width: 300}}>
                        <p></p>
                    </Card>
                )}
            />
        </>
    );
}