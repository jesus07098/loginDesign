import React from "react";
import { Grid, TextField } from "@material-ui/core";

import {
  RadioGroup,
  Select,
  Checkbox,
  Button,
} from "../../components/controls/Controls";
import Form from "../../components/Form";
import { useForm } from "../../hooks/useForm";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const selectOption = [
  { id: "1", title: "Development" },
  { id: "2", title: "Marketing" },
  { id: "3", title: "Accounting" },
  { id: "4", title: "HR" },
];

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

const EmployeeForm = ({ addOrEdit }) => {
  const [ values, handleInputChange, resetForm ] = useForm(
    initialFValues
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEdit(values, resetForm);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={(e) => handleInputChange(e, /[a-zA-Z]+/)}
          />
          <TextField
            variant="outlined"
            label="Email"
            name="email"
            value={values.email}
            onChange={(e) =>
              handleInputChange(
                e,
                /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
              )
            }
          />
          <TextField
            variant="outlined"
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={(e) => handleInputChange(e, /[0-9]{10}/)}
          />
          <TextField
            variant="outlined"
            label="City"
            name="city"
            value={values.city}
            onChange={(e) => handleInputChange(e, /[a-zA-Z]+/)}
          />
        </Grid>
        <Grid item xs={6}>
          <RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Select
            name="departmentId"
            label="Department"
            //   value={values.departmentId}
            //   onChange={handleInputChange}
            options={selectOption}
            //   error={errors.departmentId}
          />
          <Checkbox
            name="isPermanent"
            label="Permanent Employee"
            //   value={values.isPermanent}
            //   onChange={handleInputChange}
          />

          <div>
            <Button type="submit" text="Submit" />
            <Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
