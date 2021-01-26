import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";

import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../components/PageHeader";
import { Button } from "../../components/controls/Controls";
import Popup from "../../components/Popup";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
  newButton: {
    position: "absolute",
    right: "10px",
  },
}));

const Employees = () => {
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  const addOrEdit = (employee, resetForm) => {
    // insertar empleados
  };

  return (
    <>
      <PageHeader
        title="Nuevo Empleado"
        subTitle="Registrar y consultar"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Button
        text="Agregar nuevo empleado"
        variant="outlined"
        startIcon={<AddIcon />}
        className={classes.newButton}
        onClick={() => {
          setOpenPopup(true);
          setRecordForEdit(null);
        }}
      />
      <Popup
        title="Formulario de Empleado"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EmployeeForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
    </>
  );
}

export default Employees;
