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
import { Card, Col, Row, Space } from "antd";
import Github from "../images/github.png";
import Linkedin from '../images/linkedin.png'

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
const { Panel } = Collapse;
const { Meta } = Card;
const gridStyle = {
  width: "25%",
  textAlign: "center",
};

export default function ConnectWithMe(props) {
  return (
    <>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Title style={{ textAlign: "center" }}>ConnectWithMe</Title>
        <Card>
          <Card.Grid style={gridStyle} className="socialMedia">
            <img alt="example" id="Github_Logo" src={Github} />
            <Meta title="Github" description="www.instagram.com" />
          </Card.Grid>
          <Card.Grid style={gridStyle} className="socialMedia">
            <img alt="example" id="Github_Logo" src={Linkedin} />
            <Meta title="LinkedIn" description="www.instagram.com" />
          </Card.Grid>
        </Card>
        ,
      </div>
      <div style={{ minHeight: 14 }}></div>
    </>
  );
}
