'use client'
import React, {useState} from 'react';
import { ConfigProvider, Flex, Radio } from 'antd';
export default function FilterBar({options=[],onChange,type}) {
    const [barType,setBarType]=useState(type)
    const handleChange = (e) => {

        console.log(e.target.value)
        console.log(barType)
        if(barType==="type"){
            let type
            switch(e.target.value) {
                case "所有":
                    type="all"
                    break
                case "教师":
                    type="teacher"
                    break
                case "学校":
                    type="school"
                    break
            }
            onChange(type)
        }
        else{
            let ageGroup
            switch(e.target.value) {
                case "所有":
                    ageGroup="all"
                    break
                case "小学":
                    ageGroup="primarySchool"
                    break
                case "初中":
                    ageGroup="middleSchool"
                    break
                case "高中":
                    ageGroup="highSchool"
                    break
            }
            onChange(ageGroup)
        }

    };
    return (
        <ConfigProvider
            theme={{
                components: {
                    Radio: {
                        buttonBg:null,
                        buttonCheckedBg:null,
                        colorBorder:null
                    },
                }
            }}
        >
            <Flex vertical gap="middle">
                <Radio.Group onChange={handleChange} defaultValue={"所有"}>
                    {options.map(option => (
                        <Radio.Button key={option} value={option}>
                            {option}
                        </Radio.Button>
                    ))}
                </Radio.Group>
            </Flex>
        </ConfigProvider>
    );
}
