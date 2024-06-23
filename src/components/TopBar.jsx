import Image from "next/image";
import {Button} from "antd";
import 'TopBar.scss'

export const TopBar = () => {
  const Logo = () => {
    return(
      <Image src={"/logo.png"} alt={"MEA"} width={100} height={100}/>
    )
  }

  return (
    <div className={"top-bar"}>
      <Button className={"flex-1"} type={"text"} shape={"circle"}>Logo</Button>
      <div>
        <Button type={"primary"}>案例</Button>
        <Button type={"text"}>资源</Button>
        <Button type={"text"}>关于我们</Button>
      </div>

      <Button type={"default"}>联系我们</Button>
    </div>
  )
}