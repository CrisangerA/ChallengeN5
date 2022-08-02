import { getIn } from 'formik';
import { TextField } from 'src/imports/mui';

const TextInput = ({ field, form, label, InputProps, disabled, onClick, multiline, type }) => {
  
  const { errors, touched } = form;
  const errorMessage = getIn(errors, field.name);
  const error = errorMessage?.substring(errorMessage.indexOf('.') + 1);
  const touch = getIn(touched, field.name);

  return (
    <TextField
      {...field}
      InputProps={InputProps}
      error={Boolean(errorMessage && touch)}
      label={label}
      disabled={disabled}
      helperText={error}
      variant="outlined"
      fullWidth
      multiline={multiline}
      onClick={onClick}
      type={type ?? 'text'}
    />
  );
};

export default TextInput;
