import React from "react";
import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Rate,
  Typography,
  Space,
  Divider,
  Anchor,
  Affix,
  BackTop 
} from "antd";
import "./App.less";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import AboutMe from "./components/AboutMe";
import ConnectWithMe from "./components/ConnectWithMe";
import Experience from "./components/Experience";
import HighlightProjects from "./components/HighlightProjects";
import OtherWorks from "./components/OtherWorks";
import Resume from "./components/Resume";
import ContactMe from "./components/ContactMe";
import Github from './images/github.png'

import { Layout, Menu } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { Link } = Anchor;
const { Title } = Typography;

const App = () => (
  <Layout>
    <Sider
      theme="light"
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <img src={Github} id='Github_Logo'/>
        <Title level={5} style={{ textAlign: "center", paddingTop: "35px" }}>
          Quick Access
        </Title>
        <Divider />
        <Anchor style={{ paddingTop:'20px',paddingLeft: "24px" }} affix={true}>
          <Link href="#AboutMe" title="About Me" className = 'link'/>
          <Link href="#ConnectWithMe" title="Connect with me" className='link'/>
          <Link href="#Experience" title="Experience" className = 'link'/>
          <Link href="#HighlightProjects" title="Highlight Projects" className = 'link' />
          <Link href="#OtherWorks" title="Other Works"  className = 'link'/>
          <Link href="#Resume" title="Resume" className = 'link'/>
          <Link href="#ContactMe" title="Contact Me" className = 'link'/>
        </Anchor>
        <Divider type="vertical" style={{ height: "100%" }} />
    </Sider>
    <Layout>
      <Content style={{ margin: "10px 20px 0" }}>
          <h2 id ='AboutMe' />
          <AboutMe/>

          <h2 id ='ConnectWithMe' />
          <ConnectWithMe/>

          <h2 id ='Experience' />
          <Experience />

          <h2 id ='HighlightProjects' />
          <HighlightProjects />

          <h2 id ='OtherWorks' />
          <OtherWorks />

          <h2 id ='Resume' />
          <Resume />

          <h2 id ='ContactMe' />
          <ContactMe />
      </Content>
      <Footer style={{ textAlign: "center" , minHeight: 360}}>
        @2022 Created by Ethan Chen
      </Footer>
      <BackTop />
    </Layout>
  </Layout>
);

export default App;
