import "./caseblock.scss"
import {Button} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons";
export const Caseblock=({coverURL,title,subtitle})=>{
    coverURL=coverURL?coverURL:"/caseblock_example_cover.svg"
return(
    <div className={"caseblock"}>
        <img src={coverURL} alt={coverURL.substring(1)} className={"caseblock-img"}/>
        <div className="caseblock-info">
            <div className="caseblock-info-words">
                <div className={"caseblock-title"}>{title}</div>
                <div className="caseblock-subtitle">{subtitle}</div>
            </div>
            <Button type={"primary"} shape={"circle"} className={"caseblock-button"} icon={<ArrowRightOutlined  />} size={"large"}></Button>
        </div>
    </div>
)
}