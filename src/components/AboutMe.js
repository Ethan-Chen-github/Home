import React from "react";
import { Timeline, Icon } from "antd";
import { Layout } from "antd";
import { Typography } from "antd";
import ethan from "../images/ethan.jpg";
import csg from "../images/csg.png";
import ecomm from "../images/e-comm.png";
import MMA from "../images/MMA.png";
import { Collapse } from "antd";
import twitter from "../images/twitter.jpg";
import c4me from "../images/c4me.png";
import webgen from "../images/Webgen.png";
import { Card, Col, Row } from "antd";
const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

export default function AboutMe(props) {
  return (
    <>
    <div
    className="site-layout-background"
    style={{ padding: 24, minHeight: 360 }}
  >
      <Title style={{ textAlign: "center" }}>About Me</Title>
      <img src={ethan} alt="Avatar" class="prof_picture"></img>
      <Typography className="typolog">
        <Title>Ethan Chen</Title>
        <Paragraph className="self_intro">
          My name is Fenghsi Yu. Completed both Master and Bachelor degrees at
          Stony Brook University. I'm currently a full-time software developer
          at General Motors in Arizona .
        </Paragraph>
      </Typography>
    </div>
    <div style={{  minHeight: 14 }}></div>
    </>
  );
}
