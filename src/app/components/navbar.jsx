'use client'
import "./navbar.scss"
import Image from "next/image";
import {Button} from "antd";
export const NavBar=({location})=>{
return(
    <div className={"nav-bar"}>
    <Image src={"/mea_logo.svg"} alt={"mea_logo"} width={60} height={60}/>
        <div className="selections">
            <Button type={location==="intro"?"primary":""} shape="round">
                核心素养入门
            </Button>
            <Button type={location==="case"?"primary":""} shape="round">
                案例
            </Button>
            <Button type={location==="resource"?"primary":""} shape="round">
                资源
            </Button>
            <Button type={location==="about_us"?"primary":""} shape="round">
                关于我们
            </Button>
        </div>
        <Button shape="round">
            联系我们
        </Button>
    </div>
)
}