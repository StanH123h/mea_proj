import {Button, Carousel} from "antd";
import "./slideshow.scss"
export const Slideshow=({cases=[
    {
        image:"/caseblock_example_cover.svg",
        title:"这些耳熟能详的学校，都是我们的常客",
        subtitle:"累计帮助234所学校，567名教育者。我们帮助过的学校包含如探月学院、学院。这是第一所学校"
    },
    {
        image:"/caseblock_example_cover.svg",
        title:"这些耳熟能详的学校，都是我们的常客",
        subtitle:"累计帮助234所学校，567名教育者。我们帮助过的学校包含如探月学院、学院。这是第二所学校"
    },
    {
        image:"/caseblock_example_cover.svg",
        title:"这些耳熟能详的学校，都是我们的常客",
        subtitle:"累计帮助234所学校，567名教育者。我们帮助过的学校包含如探月学院、学院。这是第三所学校"
    }//注意此处是默认值不是伪代码，不要删，直接往里传参就覆盖了
]})=>{
return(
    <div className={"slideshow"}>
    <Carousel autoplay >
        {cases.map(item=>{
            return (
                <div className={"single-case"}>
                    <div className="textarea">
                        <div className="title">
                            {item.title}
                        </div>
                        <div className="subtitle">
                            {item.subtitle}
                        </div>
                        <Button type={"primary"} className={"single-case-textarea-button"}>查看案例</Button>
                    </div>
                    <img src={item.image} alt={item.image}/>
                </div>
            )
        })}
    </Carousel>
    </div>
)
}