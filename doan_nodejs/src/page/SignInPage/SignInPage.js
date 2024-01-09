import React from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextHello,
  WrapperTextLight,
} from "./Style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Col, Row } from "antd";
import animateLogin from "../../assets/animate_pig.json";
import Lottie from "lottie-react";
import { NavLink } from "react-router-dom";
import background_register from "../../assets/images/background_register.jpg";

const SignInPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        background: `url(${background_register})`,
      }}
    >
      <div
        style={{
          width: "1000px",
          height: "480px",
          borderRadius: "6px",
          background: "#fff",
        }}
      >
        <Row>
          <Col span={14}>
            <WrapperContainerLeft
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="p-20">
                <Lottie animationData={animateLogin} loop={true} />
              </div>
            </WrapperContainerLeft>
          </Col>
          <Col
            span={10}
            style={{
              marginTop: "50px",
            }}
          >
            <div
              style={{
                padding: "20px",
              }}
            >
              <WrapperContainerRight className="space-y-5">
                <WrapperTextHello>Welcome to my website</WrapperTextHello>
                <p>Đăng nhập và tạo tài khoản</p>
                <InputForm
                  placeholder="abc@gmail.com"
                  style={{ marginBotton: "20px" }}
                />
                <InputForm placeholder="password" />
                <ButtonComponent
                  bordered={false}
                  size={20}
                  styleButton={{
                    marginTop: "30px",
                    backgroundColor: "#318CE7",
                    height: "48px",
                    border: "none",
                    borderRadius: "4px",
                    padding: "10px 20px",
                    width: "220px",
                  }}
                  styleTextButton={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                  textButton={"Đăng Nhập"}
                />
                <p>
                  <WrapperTextLight>Quên mật khẩu?</WrapperTextLight>
                </p>
                <p>
                  Chưa có tài khoản?
                  <span className="pl-4">
                    <NavLink to={"/sign-up"}>
                      <WrapperTextLight>Tạo tài khoản</WrapperTextLight>
                    </NavLink>
                  </span>
                </p>
              </WrapperContainerRight>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SignInPage;
