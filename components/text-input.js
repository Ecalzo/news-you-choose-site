import React from "react";
import TextField from "@material-ui/core/TextField";

export default function TextInput({ onChange }) {
  return (
    <>
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        fullWidth
        rows={4}
        defaultValue="This was a good article!"
        variant="outlined"
        onChange={onChange}
      />
    </>
  );
}
