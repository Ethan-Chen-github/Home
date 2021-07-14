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
import Linkedin from "../images/linkedin.png";
import { Divider } from "antd";
import { Carousel, Radio } from "antd";
const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
const { Panel } = Collapse;
const { Meta } = Card;

const gridStyle = {
  width: "33%",
  maxHeight: "400px",
  textAlign: "center",
};

export default function HighlightProjects(props) {
  return (
    <>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 1000 }}
      >
        <Title style={{ textAlign: "center" }}>Highlight Projects</Title>
        <a href="https://github.com/Ethan-Chen-github">
          <Card.Grid style={gridStyle} className="socialMedia">
            <img alt="example" id="Github_Logo" src={Github} />
            <Meta title="ARS" description="www.instagram.com" />
          </Card.Grid>
        </a>
        <a href="https://www.linkedin.com/in/ethan-chen-sbu/">
          <Card.Grid style={gridStyle} className="socialMedia">
            <img alt="example" id="Github_Logo" src={Linkedin} />
            <Meta title="Weather Predition" description="www.instagram.com" />
          </Card.Grid>
        </a>
        <a href="https://github.com/Ethan-Chen-github">
          <Card.Grid style={gridStyle} className="socialMedia">
            <img alt="example" id="Github_Logo" src={Github} />
            <Meta title="ARS" description="www.instagram.com" />
          </Card.Grid>
        </a>
        <a href="https://www.linkedin.com/in/ethan-chen-sbu/">
          <Card.Grid style={gridStyle} className="socialMedia">
            <img alt="example" id="Github_Logo" src={Linkedin} />
            <Meta title="Weather Predition" description="www.instagram.com" />
          </Card.Grid>
        </a>
        <a href="https://github.com/Ethan-Chen-github">
          <Card.Grid style={gridStyle} className="socialMedia">
            <img alt="example" id="Github_Logo" src={Github} />
            <Meta title="ARS" description="www.instagram.com" />
          </Card.Grid>
        </a>
        <a href="https://www.linkedin.com/in/ethan-chen-sbu/">
          <Card.Grid style={gridStyle} className="socialMedia">
            <img alt="example" id="Github_Logo" src={Linkedin} />
            <Meta title="Weather Predition" description="www.instagram.com" />
          </Card.Grid>
        </a>
      </div>
      <div style={{ minHeight: 14 }}></div>
    </>
  );
}
