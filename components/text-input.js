import React from "react";
import TextField from "@material-ui/core/TextField";

export default function TextInput({ onChange, defaultValue }) {
  return (
    <>
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        fullWidth
        rows={4}
        defaultValue={defaultValue}
        variant="outlined"
        onChange={onChange}
      />
    </>
  );
}