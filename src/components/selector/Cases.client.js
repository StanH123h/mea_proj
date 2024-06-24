'use client'
import React from 'react';
import {Divider, List} from 'antd';
import {Caseblock} from "@/components/caseblock/caseblock";
import "./Cases.client.scss"

export default function Cases({data}) {
    console.log(data)
    return(
        <div className={"cases"}>
            <List
                grid={{
                    column:2,
                    gutter:20,
                }}
                className={"cases-list"}
                dataSource={data}
                renderItem={(item, index) => (
                    <>
                        {index % 2 === 0 && index !== 0 && <Divider className={"cases-list-divider"}/>}
                        <List.Item>
                            <Caseblock title={item.title} subtitle={item.subtitle} coverURL={item.cover}/>
                        </List.Item>
                    </>
                )}
            />
        </div>
    );
}