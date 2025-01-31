"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Row, Col } from "antd";
import { MdAssignmentAdd } from "react-icons/md";
import { MdFormatListNumbered } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";

import CustomOptionButton from "@/components/common/custom_option_card_button/CustomOptionButton";
import CustomPopover from "@/components/common/custom_popover/CustomPopover";

const HomepageOptionsPatient: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Row
        justify={"center"}
        align={"top"}
        gutter={[48, 12]}
        style={{
          display: "flex",
          flexFlow: "row wrap",
          width: "100%",
          paddingBlock: "13px",
          paddingInline: "22px",
        }}
      >
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={4}
          style={{
            padding: "13px 22px",
            display: "flex",
            flexFlow: "column wrap",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <CustomOptionButton
            iconCustomOptionButton={<MdAssignmentAdd size={"45px"} />}
            titleCustomOptionButton="Crear solicitud"
            textColorCustomOptionButton="#070707"
            iconColorCustomOptionButton="#3F97AF"
            backgroundColorCustomOptionButton="#EFF7F8"
            borderColorCustomOptionButton="#3F97AF"
            handleClickCustomOptionButton={async () => {
              await router.push("/patient/homepage/create_request", {
                scroll: true,
              });
            }}
            iconPopoverCustomOptionButton={
              <CustomPopover
                titleCustomPopover={"¿Qué puedo solicitar?"}
                contentCustomPopover={
                  "Aquí puedes solicitar historias clínicas, órdenes e incapacidades médicas."
                }
              />
            }
          />
        </Col>

        <Col
          xs={12}
          sm={12}
          md={6}
          lg={4}
          style={{
            padding: "13px 22px",
            display: "flex",
            flexFlow: "column wrap",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <CustomOptionButton
            iconCustomOptionButton={<MdFormatListNumbered size={"45px"} />}
            titleCustomOptionButton="Ver solicitudes realizadas"
            textColorCustomOptionButton="#070707"
            iconColorCustomOptionButton="#3F97AF"
            backgroundColorCustomOptionButton="#EFF7F8"
            borderColorCustomOptionButton="#3F97AF"
            handleClickCustomOptionButton={async () => {
              await router.push("/patient/homepage/request_list", {
                scroll: true,
              });
            }}
            iconPopoverCustomOptionButton={
              <CustomPopover
                titleCustomPopover={"¿Qué solicitudes puedo ver aquí?"}
                contentCustomPopover={
                  "Aquí puedes ver y gestionar todas las solicitudes que has realizado desde este portal."
                }
              />
            }
          />
        </Col>

        <Col
          xs={12}
          sm={12}
          md={6}
          lg={4}
          style={{
            padding: "13px 22px",
            display: "flex",
            flexFlow: "column wrap",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <CustomOptionButton
            iconCustomOptionButton={<FaUsers size={"45px"} />}
            titleCustomOptionButton="Ver núcleo familiar autorizado"
            textColorCustomOptionButton="#070707"
            iconColorCustomOptionButton="#3F97AF"
            backgroundColorCustomOptionButton="#EFF7F8"
            borderColorCustomOptionButton="#3F97AF"
            handleClickCustomOptionButton={async () => {
              await router.push("/patient/homepage/family_nucleus", {
                scroll: true,
              });
            }}
            iconPopoverCustomOptionButton={
              <CustomPopover
                titleCustomPopover={"¿Qué es el núcleo familiar autorizado?"}
                contentCustomPopover={
                  "Aquí puedes agregar familiares cercanos para que puedan acceder a tus documentos médicos desde el portal web, solo los que estén en la lista estarán autorizados de acceder a tu información médica."
                }
              />
            }
          />
        </Col>

        <Col
          xs={12}
          sm={12}
          md={6}
          lg={4}
          style={{
            padding: "13px 22px",
            display: "flex",
            flexFlow: "column wrap",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <CustomOptionButton
            iconCustomOptionButton={<RxUpdate size={"45px"} />}
            titleCustomOptionButton="Actualizar datos personales"
            textColorCustomOptionButton="#070707"
            iconColorCustomOptionButton="#3F97AF"
            backgroundColorCustomOptionButton="#EFF7F8"
            borderColorCustomOptionButton="#3F97AF"
            handleClickCustomOptionButton={async () => {
              await router.push("/patient/homepage/update_personal_data", {
                scroll: true,
              });
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default HomepageOptionsPatient;
