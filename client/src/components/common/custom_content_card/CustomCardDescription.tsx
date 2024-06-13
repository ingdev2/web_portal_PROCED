"use client";

import React, { ReactNode } from "react";

import { Space } from "antd";

const CustomCardDescription: React.FC<{
  descriptionCard1: string;
  tagComponentCard1: ReactNode;
  descriptionCard2?: string;
  tagComponentCard2?: ReactNode;
  descriptionCard3?: string;
  itemCard1?: ReactNode;
  descriptionCard4?: string;
  itemCard2?: ReactNode;
}> = ({
  descriptionCard1,
  tagComponentCard1,
  descriptionCard2,
  tagComponentCard2,
  descriptionCard3,
  itemCard1,
  descriptionCard4,
  itemCard2,
}) => {
  return (
    <Space size={"small"} direction="vertical">
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "31px",
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBlock: "2px",
          }}
        >
          {descriptionCard1}

          {tagComponentCard1}
        </div>

        <div
          style={{
            width: "100%",
            height: "31px",
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBlock: "2px",
          }}
        >
          {descriptionCard2}

          {tagComponentCard2}
        </div>

        <div
          style={{
            width: "100%",
            height: "31px",
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBlock: "2px",
          }}
        >
          {descriptionCard3} <b>{itemCard1}</b>
        </div>

        <div
          style={{
            width: "100%",
            height: "31px",
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBlock: "2px",
          }}
        >
          {descriptionCard4}
          <b>{itemCard2}</b>
        </div>
      </div>
    </Space>
  );
};

export default CustomCardDescription;