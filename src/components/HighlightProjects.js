import React from "react";
import { Timeline, Icon } from "antd";
import { Layout } from "antd";
import { Typography } from "antd";
import feyu from "../images/feyu.jpg";
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

export default function HighlightProjects(props) {
  return (
    <div
    className="site-layout-background"
    style={{ padding: 24, minHeight: 360 }}
  >
      <Title style={{ textAlign: "center" }}>HighlightProjects</Title>
      <br/>
    </div>
  );
}
