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
import Iframe from "react-iframe";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

export default function Resume(props) {
  return (
    <>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Title style={{ textAlign: "center" }}>Resume</Title>
        <div id ='resume' >
        {/* <iframe frameBorder="0" id = 'resume'  width='100%' height='1000px' src="https://docs.google.com/document/d/e/2PACX-1vTi0LcIdMfKrXUUPNKByJlqNYK57Fp70hyethhbeFDwcIZ4IsSeOTjx2S8HoPbmwniW12QCFuGNnBIW/pub?embedded=true"></iframe> */}
      </div>
        {/* <Iframe
          url="https://docs.google.com/document/d/e/2PACX-1vTi0LcIdMfKrXUUPNKByJlqNYK57Fp70hyethhbeFDwcIZ4IsSeOTjx2S8HoPbmwniW12QCFuGNnBIW/pub?embedded=true"
          width="100%"
          height="100%"
          position="relative"
        /> */}
      </div>
      <div style={{ minHeight: 14 }}></div>
    </>
  );
}
