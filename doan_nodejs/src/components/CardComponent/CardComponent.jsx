import React from "react";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperDiscountText,
  WrapperImagesStyle,
  WrapperPriceText,
  WrapperReportText,
  WrapperStyleTextSell,
} from "./style";
import logo from "../../assets/images/kiemduyet.png";
import { StarFilled } from "@ant-design/icons";
// const { Meta } = Card;

const CardComponent = () => {
  return (
    <div>
      <WrapperCardStyle
        bodyStyle={{ padding: "10px" }}
        hoverable
        headStyle={{ width: "300px", height: "300px" }}
        style={{
          width: 200,
        }}
        cover={
          <img
            alt="example"
            src="https://salt.tikicdn.com/cache/750x750/ts/product/a2/38/6c/ce008c63f4ac771550439da44f5f8ee8.png.webp"
          />
        }
      >
        <WrapperImagesStyle preview={false} src={logo} alt="#" />
        <StyleNameProduct>Iphone 13 128GB</StyleNameProduct>
        <WrapperReportText style={{ margin: "flex", justifyContent: "center" }}>
          <span>
            <span>
              4.96{" "}
              <StarFilled
                style={{ fontSize: "10px", color: "rgb(253,216,54)" }}
              />
              <StarFilled
                style={{ fontSize: "10px", color: "rgb(253,216,54)" }}
              />
              <StarFilled
                style={{ fontSize: "10px", color: "rgb(253,216,54)" }}
              />
              <StarFilled
                style={{ fontSize: "10px", color: "rgb(253,216,54)" }}
              />
              <StarFilled
                style={{ fontSize: "10px", color: "rgb(253,216,54)" }}
              />
            </span>
          </span>
          <WrapperStyleTextSell>|Đã bán 1000</WrapperStyleTextSell>
        </WrapperReportText>
        <WrapperPriceText
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "3px",
          }}
        >
          30.000.000đ
          <WrapperDiscountText
            style={{ paddingTop: "4px", paddingLeft: "5px" }}
          >
            -5%
          </WrapperDiscountText>
        </WrapperPriceText>
        <button
          style={{
            width: "100%",
            height: "35px",
            background: "red",
            borderRadius: "10px",
            color: "white",
          }}
        >
          Mua ngay
        </button>
      </WrapperCardStyle>
    </div>
  );
};

export default CardComponent;
