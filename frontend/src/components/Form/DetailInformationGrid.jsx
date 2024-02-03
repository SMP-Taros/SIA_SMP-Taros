import {Grid, TextField, Typography} from "@mui/material";

export default function DetailInformationGrid({title, inputValue, onInputChange}) {
    return (
        <Grid container direction="row" spacing={1} sx={{py: 1}}>
            <Grid item xs={4}>
                <Typography variant="h5" gutterBottom sx={{pt: 2}}  >
                    {title}
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography variant="h5" gutterBottom sx={{pt: 2}}  >
                    :
                </Typography>
            </Grid>
            <Grid item xs={7}>
                <TextField onChange={onInputChange} name="nama" value={inputValue} sx={{width: "100%"}}/>
            </Grid>
        </Grid>
        )
}
