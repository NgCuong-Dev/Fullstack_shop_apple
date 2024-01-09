import React from "react";
import { Badge, Col } from "antd";
import {
  WrapperHeader,
  // WrapperTextHeader,
  WrapperHeaderAccount,
  WrapperTextHeaderSmall,
} from "./style";
import {
  CaretDownOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import tiki from "../../assets/images/logo_tiki.png";
import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={4}>
          <img
            width={80}
            style={{ objectFit: "cover" }}
            height={50}
            src={tiki}
            alt="#"
          />
        </Col>
        <Col span={14} style={{ paddingTop: "5px", marginTop: "10px" }}>
          <ButtonInputSearch
            size="large"
            textButton="Tìm Kiếm"
            placeholder="Bạn tìm gì hôm nay"
            bordered={false}
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "20px", marginTop: "4px" }}
        >
          <WrapperHeaderAccount gutter={16}>
            <UserOutlined style={{ fontSize: "30px" }} />
            <div>
              <NavLink to={"/sign-in"}>
                <WrapperTextHeaderSmall
                  style={{ fontSize: "12px", color: "black" }}
                >
                  Đăng Nhập/Đăng Ký
                </WrapperTextHeaderSmall>
              </NavLink>
              <div>
                <span style={{ fontSize: "12px" }}>Tài Khoản</span>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div className="pt-6 ml-4">
            <Badge count={4} size="small">
              <ShoppingCartOutlined
                style={{ fontSize: "30px", color: "#000000" }}
              />
            </Badge>
            {/* <WrapperTextHeaderSmall style={{ fontSize: "12px" }}>
              Giỏ hàng
            </WrapperTextHeaderSmall> */}
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
