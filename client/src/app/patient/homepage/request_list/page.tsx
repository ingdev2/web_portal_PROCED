"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRoleValidation } from "@/utils/hooks/use_role_validation";
import { UserRolType } from "../../../../../../api/src/utils/enums/user_roles.enum";

import CustomSpin from "@/components/common/custom_spin/CustomSpin";
import CustomMessage from "@/components/common/custom_messages/CustomMessage";
import RequestListLayout from "@/components/patient/request_list/RequestListLayout";

import { setIdNumberUserPatient } from "@/redux/features/patient/patientSlice";

import { useGetUserByIdNumberPatientQuery } from "@/redux/apis/users/usersApi";

const RequestListPage = () => {
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();

  const allowedRoles = [UserRolType.PATIENT];
  useRoleValidation(allowedRoles);

  const idNumberUserPatientLoginState = useAppSelector(
    (state) => state.patientUserLogin.id_number
  );
  const idNumberPatientState = useAppSelector(
    (state) => state.patient.id_number
  );

  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    data: userPatientData,
    isLoading: userPatientLoading,
    isFetching: userPatientFetching,
    error: userPatientError,
  } = useGetUserByIdNumberPatientQuery(idNumberUserPatientLoginState);

  useEffect(() => {
    if (!idNumberUserPatientLoginState) {
      setShowErrorMessage(true);
      setErrorMessage("¡Usuario no encontrado!");
    }
    if (!idNumberPatientState) {
      dispatch(setIdNumberUserPatient(userPatientData?.id_number));
    }
    if (status === "unauthenticated") {
      setShowErrorMessage(true);
      setErrorMessage("¡No autenticado!");
    }
  }, [status, idNumberUserPatientLoginState, idNumberPatientState]);

  return (
    <>
      {showErrorMessage && (
        <CustomMessage
          typeMessage="error"
          message={errorMessage || "¡Error en la petición!"}
        />
      )}

      {!idNumberUserPatientLoginState || status === "unauthenticated" ? (
        <CustomSpin />
      ) : (
        <div className="request-list-page-patient-content">
          <RequestListLayout />
        </div>
      )}
    </>
  );
};

export default RequestListPage;