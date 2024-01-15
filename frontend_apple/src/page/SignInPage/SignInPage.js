import React, { useEffect, useState } from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextHello,
  WrapperTextLight,
} from "./Style";
import InputForm from "../../components/InputForm/InputForm";
// import { useMutation } from "@tanstack/react-query";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Col, Row } from "antd";
import animateLogin from "../../assets/animate_pig.json";
import Lottie from "lottie-react";
import background_register from "../../assets/images/background_register.jpg";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMultationHook";
import { useDispatch } from "react-redux";
import * as message from "../../components/Message/Message";
import { jwtDecode } from "jwt-decode";
import { updateUser } from "../../redux/slides/userSlide";
// import Loading from "../../components/LoadingComponent/Loading";
const SignInPage = () => {
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutationHooks((data) => UserService.loginUser(data));
  console.log(mutation);
  const dispatch = useDispatch();
  const { data, isLoading } = mutation;
  const handleNavigateSignUp = () => {
    navigate("/sign-up");
  };

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnchangePassword = (value) => {
    setPassword(value);
  };
  const handleSignIn = () => {
    mutation.mutate({
      email,
      password,
    });
    console.log("sign in", email, password);
  };
  useEffect(() => {
    if (data?.status === "OK") {
      message.success("Login Successfull!");
      // handleNavigateHome();
      localStorage.setItem("access_token", data?.access_token);
      window.location.href = "/";
      if (data?.access_token) {
        const decoded = jwtDecode(data?.access_token);
        console.log("decode", decoded);
        if (decoded?.id) {
          handleGetDetailsUser(decoded?.id, data?.access_token);
        }
      }
    } else if (data?.status === "ERR") {
      message.error("Login Failed!");
    }
  }, [data]);
  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };

  return (
    <div
      style={{
        objectFit: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${background_register})`,
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
        <Row className="sm:flex justify-center items-center flex-col md:flex-row lg:flex-row">
          <Col span={14} className="sm:hidden md:hidden lg:block mb-80">
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
                  style={{ marginBottom: "20px" }}
                  value={email}
                  onChange={handleOnchangeEmail}
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
                    value={password}
                    onChange={handleOnchangePassword}
                    placeholder="password"
                    type={isShowPassword ? "text" : "password"}
                  />
                </div>
                <div
                  style={{
                    // display: "flex",
                    justifyContent: "center",
                    paddingBottom: "10px",
                  }}
                >
                  <div>
                    {data?.status === "ERR" && (
                      <span style={{ color: "red" }}>{data?.message}</span>
                    )}
                  </div>
                  <br />
                  {/* <Loading></Loading> */}
                  <div>
                    <ButtonComponent
                      onClick={handleSignIn}
                      disabled={!email.length || !password.length}
                      size={20}
                      styleButton={{
                        marginTop: "10px",
                        background: "#318CE7",
                        height: "48px",
                        border: "none",
                        borderRadius: "4px",
                        padding: "10px 20px",
                        width: "100%",
                      }}
                      styleTextButton={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                      textButton={"Đăng Nhập"}
                    ></ButtonComponent>
                  </div>
                </div>
                <p>
                  <WrapperTextLight>Quên mật khẩu?</WrapperTextLight>
                </p>
                <p>
                  Chưa có tài khoản?
                  <span className="pl-4">
                    <WrapperTextLight onClick={handleNavigateSignUp}>
                      Tạo tài khoản
                    </WrapperTextLight>
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
