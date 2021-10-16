import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        control={control}
        
        required={required}
        error={isError}
        render={({
            field: { onChange, onBlur, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
          }) => (
            <TextField
              onBlur={onBlur}
              label={label}
              fullWidth
              onChange={onChange}
              inputRef={ref}
            />
          )}
      />
    </Grid>
  );
}

export default FormInput;