import React from "react";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WrapperNavbar, WrapperProducts } from "./style";

const TypeProductPage = () => {
  const onChange = {};
  return (
    <div style={{ padding: "0 120px", background: "efefef" }}>
      <Row
        style={{
          flexWrap: "nowrap",
          paddingTop: "10px",
        }}
      >
        <WrapperNavbar>
          <NavbarComponent></NavbarComponent>
        </WrapperNavbar>
        {/* ----------------------------------- */}
        <Col span={20}>
          <WrapperProducts>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
          </WrapperProducts>
        </Col>
      </Row>
      <Pagination
        showSizeChanger
        onShowSizeChange={onChange}
        defaultCurrent={3}
        total={100}
        style={{ textAlign: "center" }}
      />
    </div>
  );
};

export default TypeProductPage;
