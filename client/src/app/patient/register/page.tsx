"use client";

import ValidatePatientExistForm from "@/components/register/ValidatePatientExistForm";
import RegisterPatientForm from "@/components/register/RegisterPatientForm";

import { Tabs } from "antd";
import { FaUser } from "react-icons/fa";
import { IoIosBusiness } from "react-icons/io";

const RegisterPatientPage: React.FC = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignContent: "center",
        alignItems: "center",
        marginBlock: 31,
      }}
    >
      <div
        className="background-page"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('/background/back-healt.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4,
        }}
      />
      <div
        className="content-page"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 13,
          }}
        >
          <img
            src="/logos/LOGO-BONNADONA.png"
            alt="Logo de Bonnadona"
            style={{ height: 77 }}
          />
        </div>
        <div>
          <Tabs
            onChange={onChange}
            type="card"
            centered
            tabBarGutter={13}
            tabBarStyle={{ marginBottom: 13 }}
            items={[
              {
                className: "patient-card",
                key: "1",
                label: "Pacientes",
                icon: <FaUser />,
                children: <ValidatePatientExistForm />,
              },
              {
                className: "eps-card",
                key: "2",
                label: "Eps",
                icon: <IoIosBusiness />,
                children: <RegisterPatientForm />,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPatientPage;
