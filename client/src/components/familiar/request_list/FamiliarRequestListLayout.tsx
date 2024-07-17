"use client";

import React from "react";

import CustomLayout from "@/components/common/custom_layout/CustomLayout";
import FamiliarHeaderLayout from "../header_layout/FamiliarHeaderLayout";
import FamiliarRequestListContent from "./request_list_content/FamiliarRequestListContent";

const FamiliarRequestListLayout: React.FC = () => {
  return (
    <CustomLayout
      customLayoutBackground="url('/background/back-healt-opacity.jpg')"
      customLayoutHeader={<FamiliarHeaderLayout />}
      customLayoutContent={<FamiliarRequestListContent />}
      customLayoutFooter={`Clínica Bonnadona © ${new Date().getFullYear()}`}
    ></CustomLayout>
  );
};

export default FamiliarRequestListLayout;
