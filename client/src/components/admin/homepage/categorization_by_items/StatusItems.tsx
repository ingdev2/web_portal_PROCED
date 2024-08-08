"use client";

import React from "react";

import { Divider, Row } from "antd";
import { subtitleStyleCss } from "@/theme/text_styles";

import { useGetAllMedicalReqUsersQuery } from "@/redux/apis/medical_req/medicalReqApi";

import { RequirementStatusEnum } from "@/../../api/src/medical_req/enums/requirement_status.enum";

const StatusItems: React.FC = () => {
  const {
    data: allMedicalReqUsersData,
    isLoading: allMedicalReqUsersLoading,
    isFetching: allMedicalReqUsersFetching,
    error: allMedicalReqUsersError,
  } = useGetAllMedicalReqUsersQuery({});

  const { data: allMedicalReqStatusCreatedData } =
    useGetAllMedicalReqUsersQuery({
      status: RequirementStatusEnum.CREATED,
    });

  const { data: allMedicalReqStatusVisualizedData } =
    useGetAllMedicalReqUsersQuery({
      status: RequirementStatusEnum.VISUALIZED,
    });

  const { data: allMedicalReqStatusUnderReviewData } =
    useGetAllMedicalReqUsersQuery({
      status: RequirementStatusEnum.UNDER_REVIEW,
    });

  const { data: allMedicalReqStatusDeliveredData } =
    useGetAllMedicalReqUsersQuery({
      status: RequirementStatusEnum.DELIVERED,
    });

  const { data: allMedicalReqStatusRejectedData } =
    useGetAllMedicalReqUsersQuery({
      status: RequirementStatusEnum.REJECTED,
    });

  return (
    <Row
      align="middle"
      style={{
        height: "100%",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginBlock: "13px",
      }}
    >
      <h2
        style={{
          ...subtitleStyleCss,
          textAlign: "center",
          margin: "0px",
          paddingInline: "22px",
        }}
      >
        Total de&nbsp;
        <b>
          {allMedicalReqUsersData?.length}
          &nbsp;solicitud(es)
        </b>
      </h2>

      <h4
        style={{
          ...subtitleStyleCss,
          textAlign: "center",
          margin: "0px",
          color: "#013B5A",
        }}
      >
        Creadas:&nbsp;
        <b>{allMedicalReqStatusCreatedData?.length}</b>
      </h4>

      <Divider
        type="vertical"
        style={{
          height: "22px",
          borderWidth: "1.3px",
          borderColor: "#8C11117F",
        }}
      />

      <h4
        style={{
          ...subtitleStyleCss,
          textAlign: "center",
          margin: "0px",
          color: "#9960B0",
        }}
      >
        Visualizadas:&nbsp;
        <b>{allMedicalReqStatusVisualizedData?.length}</b>
      </h4>

      <Divider
        type="vertical"
        style={{
          height: "22px",
          borderWidth: "1.3px",
          borderColor: "#8C11117F",
        }}
      />

      <h4
        style={{
          ...subtitleStyleCss,
          textAlign: "center",
          margin: "0px",
          color: "#F4D03F",
        }}
      >
        En Revisión:&nbsp;
        <b>{allMedicalReqStatusUnderReviewData?.length}</b>
      </h4>

      <Divider
        type="vertical"
        style={{
          height: "22px",
          borderWidth: "1.3px",
          borderColor: "#8C11117F",
        }}
      />

      <h4
        style={{
          ...subtitleStyleCss,
          textAlign: "center",
          margin: "0px",
          color: "#137A2B",
        }}
      >
        Docs. Entregados:&nbsp;
        <b>{allMedicalReqStatusDeliveredData?.length}</b>
      </h4>

      <Divider
        type="vertical"
        style={{
          height: "22px",
          borderWidth: "1.3px",
          borderColor: "#8C11117F",
        }}
      />

      <h4
        style={{
          ...subtitleStyleCss,
          textAlign: "center",
          margin: "0px",
          color: "#8C1111",
        }}
      >
        Rechazadas:&nbsp;
        <b>{allMedicalReqStatusRejectedData?.length}</b>
      </h4>
    </Row>
  );
};

export default StatusItems;