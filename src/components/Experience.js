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

export default function Experience(props) {
  return (
    <>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Title style={{ textAlign: "center" }}>Experience</Title>
        <Timeline mode="alternate">
          <Timeline.Item>
            <h3>Aug 2017 (Start Bachelor Degree)</h3>Start Bachelor degree in
            Computer Science at Stony Brook University
          </Timeline.Item>
          <Timeline.Item color="green">
            <h3>Jan 2019-May 2019 (Teaching Assistant)</h3>Teaching Assistant
            for Object Rriented Programming
          </Timeline.Item>
          <Timeline.Item color="brown">
            <h3>Jan 2019 - Dec 2020 (Web Developer)</h3> Work in Stony Brook
            University CEAS College as a Web Developer in New York
          </Timeline.Item>
          <Timeline.Item color="brown">
            <h3>Dec 2020 (Graduated)</h3>Completed <b>Bachelor Degree</b> at{" "}
            <b>Stony Brook University</b>
          </Timeline.Item>
          <Timeline.Item>
            <h3>Jan 2020 (Start Master Degree)</h3>Start Master degree in
            Computer Science at Stony Brook University
          </Timeline.Item>
          <Timeline.Item color="purple">
            <h3>May 2021 - Aug 2021 (Software Engineering Intern)</h3> Software
            Engineering Intern at <b>BP plc</b> in Houston,TX
          </Timeline.Item>
          <Timeline.Item color="red">
            <h3>Now</h3>
          </Timeline.Item>
        </Timeline>
      </div>
      <div style={{ minHeight: 14 }}></div>
    </>
  );
}
