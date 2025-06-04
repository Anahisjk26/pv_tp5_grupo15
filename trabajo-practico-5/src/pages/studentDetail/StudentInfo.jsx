  import { Card, CardContent, Typography, Grid, Avatar, Box } from "@mui/material";
  import SchoolIcon from '@mui/icons-material/School';
  import MenuBookIcon from '@mui/icons-material/MenuBook';
  import EmailIcon from '@mui/icons-material/Email';
  import PhoneIcon from '@mui/icons-material/Phone';
  import HomeIcon from '@mui/icons-material/Home';

  export const StudentInfo = ({ alumno }) => {
    if (!alumno) return null; //PROTECCION EXTRA

    const info = [
      { label: "Curso", value: alumno.curso, icon: <MenuBookIcon color="primary" sx={{ mr: 1 }} /> },
      { label: "Email", value: alumno.email, icon: <EmailIcon color="primary" sx={{ mr: 1 }} /> },
      { label: "Teléfono", value: alumno.telefono, icon: <PhoneIcon color="primary" sx={{ mr: 1 }} /> },
      { label: "Domicilio", value: alumno.domicilio, icon: <HomeIcon color="primary" sx={{ mr: 1 }} /> },
    ];

    return (
      <Card elevation={8} sx={{ mt: 4, p: 3, maxWidth: 700, mx: "auto", bgcolor: "aliceblue", borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h4" fontWeight="bold" align="center" gutterBottom color="black">
            
            Perfil del Alumno

          </Typography>

          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item>
              <Avatar sx={{ bgcolor: "primary.main", width: 64, height: 64 }}>
                <SchoolIcon fontSize="large" />
              </Avatar>
            </Grid>
            <Grid item>
              <Typography variant="h5" fontWeight="bold" align="center">
                {alumno.nombre} {alumno.apellido}
              </Typography>
              <Typography sx={{ fontWeight: "bold", color: "black", bgcolor: "whitesmoke", px: 2, py: 0.5, borderRadius: 1, mt: 0.5, textAlign: 'center' }}>
                LU: {alumno.Lu}
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3} mt={3} justifyContent="center">
            {info.map(({ label, value, icon }) => (
              <Grid item xs={12} sm={6} key={label}>
                <Box sx={{ bgcolor: "white", p: 2, borderRadius: 2, boxShadow: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="primary" sx={{ mr: 1 }}>
                    {label}
                  </Typography>
                  {icon}
                  <Typography variant="body1" sx={{ ml: 1 }}>
                    {value}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    );
  };
