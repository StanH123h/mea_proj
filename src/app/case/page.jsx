'use client'
import './page.scss'
import Image from "next/image";
import {Button, Card, Divider,  Typography} from "antd";
import {ArrowRightOutlined, RightOutlined} from "@ant-design/icons";
import React from "react";



export default function Page() {

  return(

    <div className={'case-page'}>
      <div className={'top'}>
        <div>
          <Image style={{objectFit:'cover' ,borderRadius:'50px'}} src={'/c461dc6ef740b2b21e008fb10b617e2f.jpg'} alt={'Teacher'} width={570} height={250}/>
        </div>
        <div className={'top-content'}>
          <Typography.Title level={3} style={{whiteSpace:'pre-wrap',textAlign:'right'}}>{`这些老师，在探月的平台中，\n学习并践行核心素养。`}</Typography.Title>
          <Typography.Paragraph type={"secondary"} style={{ width:'312px'}}>截止2023年，累计帮助234所学校，567名教育者。我们帮助过的学校包含如探月学院、学院、副标题副标题副标题</Typography.Paragraph>
          <Button type={'primary'} shape={'round'}>查看更多</Button>
        </div>
      </div>
      <div className={'case-card'}>
        <Card hoverable={true} cover={<Image style={{objectFit:'cover' ,borderRadius:'30px'}} src={'/f6dddb2f27fce924cf856425a70cf24a.png'} alt={'Teacher'} width={345} height={200}/>  } bordered={false} style={{borderRadius:'30px'}}>
          <Card.Meta title={'邓琦薇和她的社团课'} description={'一个总是被抢占的社团课，怎么玩出了学生能力成长的火花？'}/>
        </Card>
        <Card hoverable={true} cover={<Image style={{objectFit:'cover' ,borderRadius:'30px'}} src={'/b921b8607b9193f7be5807002a64b904.jpg'} alt={'Teacher'} width={345} height={200}/>} bordered={false} style={{borderRadius:'30px'}}>
          <Card.Meta title={'邓琦薇和她的社团课'} description={'一个总是被抢占的社团课，怎么玩出了学生能力成长的火花？'}/>
        </Card>
        <Card hoverable={true} cover={<Image style={{objectFit:'cover' ,borderRadius:'30px'}} src={'/b921b8607b9193f7be5807002a64b904.jpg'} alt={'Teacher'} width={345} height={200}/>} bordered={false} style={{borderRadius:'30px'}}>
          <Card.Meta title={'邓琦薇和她的社团课'} description={'一个总是被抢占的社团课，怎么玩出了学生能力成长的火花？'}/>
        </Card>

      </div>
      <Divider/>
      <div>
        <div style={{width:'100%' ,display:'flex',justifyContent:'center',marginBottom:'70px',marginTop:"-10px"}}>
          <Typography.Title style={{textAlign:"center"}}>助力学校实现核心素养的变革和落地。</Typography.Title>
        </div>
        <div className={'cases'}>
          <Image style={{objectFit:'cover' ,borderRadius:'30px'}} src={'/8ebae3333387f550869d03557e07540a.png'} alt={'club'} width={500} height={200}/>
          <div>
            <Typography.Title level={3}>百年职校</Typography.Title>
            <Typography.Text type={"secondary"}>百年职校的素养变革和它的素养模型</Typography.Text>
          </div>
          <Button type="primary" shape={'circle'} size={'large'} icon={<RightOutlined/>}/>

        </div>
        <Divider/>
        <div className={'cases'}>
          <Image style={{objectFit:'cover' ,borderRadius:'30px'}} src={'/8ebae3333387f550869d03557e07540a.png'} alt={'club'} width={500} height={200}/>
          <div>
            <Typography.Title level={3}>百年职校</Typography.Title>
            <Typography.Text type={"secondary"}>百年职校的素养变革和它的素养模型</Typography.Text>
          </div>
          <Button type="primary" shape={'circle'} size={'large'} icon={<RightOutlined/>}/>

        </div>
        <Divider/>
        <div className={'cases'}>
          <Image style={{objectFit:'cover' ,borderRadius:'30px'}} src={'/8ebae3333387f550869d03557e07540a.png'} alt={'club'} width={500} height={200}/>
          <div>
            <Typography.Title level={3}>百年职校</Typography.Title>
            <Typography.Text type={"secondary"}>百年职校的素养变革和它的素养模型</Typography.Text>
          </div>
          <Button type="primary" shape={'circle'} size={'large'} icon={<RightOutlined/>}/>

        </div>
        <Divider/>
        <Button type={"primary"} shape={"round"} icon={<ArrowRightOutlined />} iconPosition={'end'} size={"large"} style={{marginLeft:'auto',marginRight:'auto',display:"block"}}>更多案例</Button>
      </div>

    </div>
  )
}