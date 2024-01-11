import React, { useState } from "react";
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
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";

const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");

  // const handleOnchangePassword = (value) => {
  //   setPassword(value);
  // };

  // const handleOnchangeEmail = (value) => {
  //   setEmail(value);
  // };

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
        backgroundImage: `url(${background_register})`, // Sửa thành 'backgroundImage' để set hình nền
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
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="p-40">
                <Lottie
                  style={{
                    position: "absolute",
                    top: "0%",
                    left: "10%",
                  }}
                  animationData={animateLogin}
                  loop={true}
                />
              </div>
            </WrapperContainerLeft>
          </Col>

          <Col span={10} style={{ marginTop: "50px" }}>
            <div style={{ padding: "20px" }}>
              <WrapperContainerRight className="space-y-5">
                <WrapperTextHello>Login Account</WrapperTextHello>
                <p>Đăng nhập và tạo tài khoản</p>
                <InputForm
                  placeholder="abc@gmail.com"
                  style={{ marginBottom: "20px" }} // Sửa thành 'marginBottom'
                />
                <div style={{ position: "relative" }}>
                  <span
                    onClick={() => setIsShowPassword(!isShowPassword)}
                    style={{
                      zIndex: 10,
                      position: "absolute",
                      top: "4px",
                      right: "8px",
                    }}
                  >
                    {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
                  </span>
                  <InputForm
                    placeholder="password"
                    type={isShowPassword ? "text" : "password"}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "10px",
                  }}
                >
                  <ButtonComponent
                    bordered={false}
                    size={20}
                    styleButton={{
                      marginTop: "10px",
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
                </div>
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
