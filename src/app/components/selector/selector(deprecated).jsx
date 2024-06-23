'use client'
import FilterBar from "@/app/components/selector/FilterBar.client";
import Cases from "@/app/components/selector/Cases.client";
import {useEffect, useState} from "react";
import "./selector(deprecated).scss"
export default function SelectorDeprecated() {
    const [type, setType] = useState('all');
    const [ageGroup, setAgeGroup] = useState('all');
    const [data,setData]=useState()
    useEffect(
        ()=>{
        fetch("http://localhost:8085/case?type=all&ageGroup=all",{
            method:"GET",
            headers:{
                'Content-Type':"application/json"
            }
        }).then(res => res.json())
            .then(data=>{
                setData(data)
            })
        }
    ,[])
    useEffect(() => {

        fetch(`http://localhost:8085/case?type=${type}&ageGroup=${ageGroup}`,{
            method:"GET",
            headers:{
                'Content-Type':"application/json"
            }
        }).then(res => res.json())
            .then(data=>{
                setData(data)
                console.log(data[0])
            })
    }, [type, ageGroup])
    return (
        <div className={"selector"}>
            <FilterBar
                options={['所有', '学校', '教师']}
                onChange={(type) => {
                    setType(type)
                }}
                type={"type"}
            >
            </FilterBar>
            <br/>
            <FilterBar
                options={['所有', '小学', '初中','高中']}
                onChange={(ageGroup) => {
                    setAgeGroup(ageGroup)
                }}
                type={"ageGroup"}
            ></FilterBar>
            <Cases data={data}></Cases>
        </div>
    )
}