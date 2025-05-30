import { Card, CardContent, Typography, Grid, Avatar } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';

export const StudentInfo = ({ alumno }) => {
  if (!alumno) return null; // COMO UNA PROTECCION EXTRA

  return (
    <Card elevation={4} sx={{ mt: 4, p: 2 }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar sx={{ bgcolor: "primary.main", width: 56, height: 56 }}>
              <SchoolIcon />
            </Avatar>
          </Grid>

          <Grid item>
            <Typography variant="h5" component="div">
              {alumno.nombre} {alumno.apellido}
            </Typography>
            <Typography color="text.secondary">LU: {alumno.Lu}</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1"><strong>Curso:</strong> {alumno.curso}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1"><strong>Email:</strong> {alumno.email}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1"><strong>Teléfono:</strong> {alumno.telefono}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1"><strong>Domicilio:</strong> {alumno.domicilio}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
