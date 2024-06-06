"use client";

import React, { ReactNode } from "react";

import { Modal } from "antd";

const CustomModalNoContent: React.FC<{
  widthCustomModalNoContent: string;
  openCustomModalState: boolean;
  maskClosableCustomModal: boolean;
  closableCustomModal: boolean;
  contentCustomModal: ReactNode;
  handleCancelCustomModal?: () => void;
}> = ({
  widthCustomModalNoContent,
  openCustomModalState,
  maskClosableCustomModal,
  closableCustomModal,
  contentCustomModal,
  handleCancelCustomModal,
}) => {
  return (
    <Modal
      className="custom-modal-no-content"
      width={widthCustomModalNoContent}
      style={{
        minWidth: "345px",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        paddingBlock: "31px",
        margin: "0px",
      }}
      open={openCustomModalState}
      onCancel={handleCancelCustomModal}
      maskClosable={maskClosableCustomModal}
      closable={closableCustomModal}
      destroyOnClose={true}
      footer={null}
      centered
    >
      <div
        className="content-custom-modal-no-content"
        style={{
          display: "flex",
          flexFlow: "column wrap",
          textAlign: "center",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          marginBlock: "7px",
          marginInline: "7px",
        }}
      >
        {contentCustomModal}
      </div>
    </Modal>
  );
};

export default CustomModalNoContent;
