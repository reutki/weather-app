import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "@mui/material";
import { FormStyle, FormContent } from "./styled";

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <FormStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContent>
          <Input defaultValue="" placeholder="Login" {...register("Login")} />
          <Input
            defaultValue=""
            placeholder="Password"
            type={"password"}
            {...register("Password")}
          />
          <Button color="secondary" type="submit">
            Submit
          </Button>
        </FormContent>
      </form>
    </FormStyle>
  );
}
