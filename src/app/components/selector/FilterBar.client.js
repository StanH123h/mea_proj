'use client'
import "./FilterBar.client.scss"
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
                        colorBorder:null,
                        buttonSolidCheckedColor:"black",
                        buttonSolidCheckedBg:"rgb(243, 243, 243)",
                        buttonSolidCheckedHoverBg:null,
                        buttonColor:"gray"
                    },
                }
            }}
        >
            <Flex vertical gap="middle" className={"filter-bar"}>
                <Radio.Group onChange={handleChange} defaultValue={"所有"} buttonStyle={"solid"} className={"radio-group"}>
                    {options.map(option => (
                        <Radio.Button key={option} value={option} className={"radio-button"}>
                            {option}
                        </Radio.Button>
                    ))}
                </Radio.Group>
            </Flex>
        </ConfigProvider>
    );
}
