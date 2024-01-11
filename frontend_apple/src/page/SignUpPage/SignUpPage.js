import React, { useState } from "react";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Col, Row } from "antd";
import animateLogin from "../../assets/animate_login.json";
import Lottie from "lottie-react";
import background_register from "../../assets/images/background_register.jpg";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextHello,
} from "../SignUpPage/Style";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setisShowConfirmPassword] = useState(false);
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
            <WrapperContainerLeft>
              <Lottie animationData={animateLogin} loop={true} />
            </WrapperContainerLeft>
          </Col>
          <Col
            span={10}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                padding: "20px",
              }}
            >
              <WrapperContainerRight className="center-content space-y-5">
                <WrapperTextHello>Register Account</WrapperTextHello>
                <p>Đăng ký tài khoản</p>
                <InputForm
                  placeholder="abc@gmail.com"
                  style={{ marginBotton: "20px" }}
                />
                <div style={{ position: "relative" }}>
                  <span
                    onClick={() => setIsShowPassword(!isShowPassword)}
                    style={{
                      zIndex: 10,
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                    }}
                  >
                    {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
                  </span>
                  <span
                    onClick={() =>
                      setisShowConfirmPassword(!isShowConfirmPassword)
                    }
                    style={{
                      zIndex: 10,
                      position: "absolute",
                      top: "40px",
                      right: "8px",
                    }}
                  >
                    {isShowConfirmPassword ? (
                      <EyeFilled />
                    ) : (
                      <EyeInvisibleFilled />
                    )}
                  </span>
                  <InputForm
                    style={{ marginBotton: "20px" }}
                    placeholder="password"
                    type={isShowPassword ? "text" : "password"}
                  />
                  <InputForm
                    placeholder="confirm password"
                    type={isShowConfirmPassword ? "text" : "password"}
                  />
                </div>
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
                  textButton={"Đăng Ký"}
                />
                {/* <p>
                  <WrapperTextLight>Quên mật khẩu?</WrapperTextLight>
                </p>
                <p>
                  Chưa có tài khoản?
                  <span className="pl-4 pt-1">
                    <WrapperTextLight>Tạo tài khoản</WrapperTextLight>
                  </span>
                </p> */}
              </WrapperContainerRight>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SignUpPage;
