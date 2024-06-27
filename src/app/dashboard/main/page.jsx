import {NavBar} from "@/app/components/navbar/navbar";
import "./page.scss"
import {Divider} from "antd";
import {Slideshow} from "@/app/components/slideshow/slideshow";

export default function MainPage() {
    return (
        <div className="main-page">
            <NavBar location={"feed"}/>
            <div className="block1">
                <div className="text">
                    <div className="title">加速素养教育新时代到来！</div>
                    <div className="subtitle">为落地践行素养教育的广大教育者提供实践百宝箱</div>
                </div>
                <img src="/main_page_example_pic_1.svg" alt="main_page_pic_1" className={"image"}/>
            </div>
            <div className="block2">
                <div className="small-block-1">
                    <div className="title">核心素养教育，让孩子有能力成为梦想的自己</div>
                    <div
                        className="subtitle">探月学校是一所根植中国、面向世界的十二年一贯制创新学校,致力于培养内心丰盈的个体,积极行动的公民。
                    </div>
                    <img src="/main_page_double_arrow.svg" alt="double_arrow_icon" className="double-arrow-icon"/>
                </div>
                <div className="small-block-2">
                    <img src="/main_page_example_pic_2.svg" alt="" className="image"/>
                    <div className="title">邓琦薇和她的社团课</div>
                    <div className="subtitle">一个总是被抢占的社团课，怎么玩出了学生能力成长的火花？</div>
                </div>
                <div className="small-block-3">
                    <img src="/main_page_example_pic_2.svg" alt="" className="image"/>
                    <div className="title">邓琦薇和她的社团课</div>
                    <div className="subtitle">一个总是被抢占的社团课，怎么玩出了学生能力成长的火花？</div>
                </div>
            </div>
            <Divider className={"divider-1"}/>
            <Slideshow/>
            <Divider className="divider-2"/>
            <div className="text-box">
                <div className="title">表现型评价，引领老师与学生实现素养发展</div>
                <div
                    className="subtitle">探月学校是一所根植中国、面向世界的十二年一贯制创新学校,致力于培养内心丰盈的个体,积极行动的公民。
                </div>
                <img src="/main_page_double_arrow.svg" alt="double_arrow_icon" className="double-arrow-icon"/>
            </div>
            <div className="block3">
                <div className="small-blocks">
                    <img src="/main_page_example_pic_2.svg" alt="" className="image"/>
                    <div className="title">邓琦薇和她的社团课</div>
                    <div className="subtitle">一个总是被抢占的社团课，怎么玩出了学生能力成长的火花？</div>
                </div>
                <div className="small-blocks">
                    <img src="/main_page_example_pic_2.svg" alt="" className="image"/>
                    <div className="title">邓琦薇和她的社团课</div>
                    <div className="subtitle">一个总是被抢占的社团课，怎么玩出了学生能力成长的火花？</div>
                </div>
                <div className="small-blocks">
                    <img src="/main_page_example_pic_2.svg" alt="" className="image"/>
                    <div className="title">邓琦薇和她的社团课</div>
                    <div className="subtitle">一个总是被抢占的社团课，怎么玩出了学生能力成长的火花？</div>
                </div>
            </div>
            <Divider className="divider-3"/>
            <div className="title-tools">
                好用工具
            </div>
            <div className="block4-tools">
                <div className="tool1">
                    <div className="gradient"/>
                    <img src="/main_page_example_pic_3(1).svg" alt="tool1" className="image"/>
                    <div className="name">素质教育目标手册</div>
                </div>
                <div className="tool2">
                    <div className="gradient"/>
                    <img src="/main_page_example_pic_3(2).svg" alt="tool2" className="image"/>
                    <div className="name">表现型任务原型库</div>
                </div>
                <div className="tool3">
                    <div className="gradient"/>
                    <img src="/main_page_example_pic_3(3).svg" alt="tool3" className="image"/>
                    <div className="name">卓越教师教学能力标准</div>
                </div>
            </div>
        </div>
    )
}