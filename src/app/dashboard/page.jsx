'use client'
import FilterBar from "@/app/dashboard/FilterBar.client";
import Cases from "@/app/dashboard/Cases.client";
import {useEffect, useState} from "react";
export default function CasePage() {
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
                console.log(data[0])
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
        <>
            <FilterBar
                options={['所有', '学校', '教师']}
                onChange={(type) => {
                    setType(type)
                }}
                type={"type"}
            >
            </FilterBar>
            <FilterBar
                options={['所有', '小学', '初中','高中']}
                onChange={(ageGroup) => {
                    setAgeGroup(ageGroup)
                }}
                type={"ageGroup"}
            ></FilterBar>
            <Cases data={data}></Cases>
        </>
    )
}