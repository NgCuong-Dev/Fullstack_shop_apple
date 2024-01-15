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
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const handleNavigateLogin = () => {
    navigate("/sign-in");
  };
  return (
    <div>
      <WrapperHeader>
        <Col span={5}>
          <img
            width={80}
            style={{ objectFit: "cover" }}
            height={50}
            src={tiki}
            alt="#"
          />
        </Col>
        <Col span={13} style={{ paddingTop: "5px", marginTop: "10px" }}>
          <ButtonInputSearch
            size="large"
            textButton="Tìm Kiếm"
            placeholder="Bạn tìm gì hôm nay"
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "54px", marginTop: "4px" }}
        >
          <WrapperHeaderAccount gutter={16}>
            <UserOutlined style={{ fontSize: "30px" }} />
            <div onClick={handleNavigateLogin} style={{ cursor: "pointer" }}>
              <WrapperTextHeaderSmall
                style={{ fontSize: "12px", color: "black" }}
              >
                Đăng Nhập/Đăng Ký
              </WrapperTextHeaderSmall>
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
