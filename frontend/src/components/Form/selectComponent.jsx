import {
  Grid,
  Select,
  MenuItem,
  Typography,
  InputLabel,
  FormControl,
} from "@mui/material";

export default function SelectComponent({
  title,
  inputValue,
  onInputChange,
  options,
  inputLabel,
  inputName,
}) {
  // console.log(inputValue);
  return (
    <Grid container direction="row" spacing={1} sx={{ py: 1 }}>
      <Grid item xs={4}>
        <Typography variant="h5" gutterBottom sx={{ pt: 2 }}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="h5" gutterBottom sx={{ pt: 2 }}>
          :
        </Typography>
      </Grid>
      <Grid item xs={7}>
        <FormControl fullWidth>
          <InputLabel>{inputLabel}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={inputValue}
            label="Tes"
            onChange={onInputChange}
            name={inputName}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}
