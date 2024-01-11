import React from "react";

import { WrapperButtonMore, WrapperProducts } from "../HomePage/style";
// import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider-4.jpg";
import slider2 from "../../assets/images/slide5.jpg";
import slider3 from "../../assets/images/slider-6.jpg";
import CardComponent from "../../components/CardComponent/CardComponent";
// import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";

const HomePage = () => {
  return (
    <div style={{ padding: "0 50px" }}>
      {/* <WrapperTypeProduct>
        {arr.map((item, index) => {
          return <TypeProduct name={item} key={index} />;
        })}
      </WrapperTypeProduct> */}
      <div style={{ width: "100%", backgroundColor: "#êfef" }}>
        <div
          id="container"
          style={{
            height: "auto",
            background: "#EDEAE0",
            paddingBottom: "40px",
            width: "100%",
            margin: "0 aut",
            marginTop: "10px",
          }}
        >
          <SliderComponent arrImages={[slider1, slider2, slider3]} />
          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <WrapperButtonMore
              textButton="Xem Thêm"
              type="outline"
              styleButton={{
                border: "1px solid rgb(11,116,229)",
                color: "rgb(11,116,229)",
                width: "240px",
                height: "38px",
                borderRadius: "4px",
              }}
              styleTextButton={{ fontWeight: "500" }}
            />
          </div>
          {/* <NavbarComponent></NavbarComponent> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
