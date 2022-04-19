import React from "react";
import { Button, Input } from "@mui/material";
import { useForm } from "react-hook-form";
import { SignUpFormStyle } from "./styled";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SignUpFormStyle>
        <Input defaultValue="" placeholder="Name" {...register("Name")} />
        <Input defaultValue="" placeholder="Surname" {...register("Surname")} />
        <Input
          defaultValue=""
          placeholder="Email"
          {...register("Email")}
          type="email"
        />
        <Input
          defaultValue=""
          placeholder="Username"
          {...register("Username")}
        />
        <Input
          defaultValue=""
          type={"password"}
          placeholder="Password"
          {...register("Password")}
        />
        <Input
          defaultValue=""
          placeholder="Confirm Password"
          {...register("Password_Confirmed")}
          type={"password"}
        />
        <Button color="secondary" type="submit">
          Register
        </Button>
      </SignUpFormStyle>
    </form>
  );
}
