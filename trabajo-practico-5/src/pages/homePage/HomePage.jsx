import { useState } from "react";
import React from "react";
import {
  // ... importaciones de Material UI
  Grid,
  Container,
  Box,
  CssBaseline,
  Typography,
} from "@mui/material";
import { MiCard } from "../../components/cards/MiCard";

export const HomePage = () => {
  const cardData = [
    {
      accion: "Agregar Alumno",
      descripcion: "Permite agregar nuevos estudiantes al sistema.",
      imagen:
        "https://static.wixstatic.com/media/fb5636_8b1412ac176547298d75b6620dda0945~mv2.jpg/v1/fill/w_528,h_352,al_c,lg_1,q_80,enc_avif,quality_auto/fb5636_8b1412ac176547298d75b6620dda0945~mv2.jpg",
    },
    {
      accion: "Listar Alumnos",
      descripcion: "Muestra la lista de todos los alumnos registrados.",
      imagen:
        "https://media.istockphoto.com/id/1438969575/es/foto/joven-estudiante-universitario-sonriente-con-auriculares-de-pie-en-un-aula.jpg?s=612x612&w=0&k=20&c=vYBEmD-AcLhEbM02BBKtTAFeIS4A0O71_RpS6KtMUk8=",
    },
    {
      accion: "Editar Alumno",
      descripcion: "Permite modificar la información de un alumno existente.",
      imagen:
        "https://www.aauniv.com/s/blog/wp-content/uploads/2020/04/estudiar-online-en-casa-para-universitarios.jpg",
    },
    {
      accion: "Eliminar Alumno",
      descripcion:
        "Elimina un alumno del sistema, actualizando la lista de estudiantes.",
      imagen:
        "https://media.istockphoto.com/id/475772532/es/foto/tecla-suprimir.jpg?s=612x612&w=0&k=20&c=6zd1ialIP0BB_0NMPnB0gEsjs9x3QKkb6yqdoYq_HSA=",
    },
    {
      accion: "Consultar Alumno",
      descripcion: "Permite buscar y ver los detalles de un alumno específico.",
      imagen:
        "https://imagenes.noticiasrcn.com/ImgNoticias/subsidio-universitarios.webp?w=480",
    },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url('https://media.licdn.com/dms/image/v2/C4E1BAQFAX0CpC7mnew/company-background_10000/company-background_10000/0/1584319529701/facultad_de_ingenieria_unju_cover?e=2147483647&v=beta&t=B30SB46xfrLw2PNDe3R8_7kKy8Fl0rsWoAo5bah7gy4')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "40vh",
          display: "flex",
        }}
      ></Box>
      <Typography gutterBottom variant="h3" align="center" sx={{ mt: 4 }}>
        Bienvenido al Sistema de Gestión de Alumnos
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        boxSizing={"border-box"}
        align="center"
        sx={{ mb: 4, px: 2, maxWidth: "80vh", margin: "0 auto" }}
      >
        Les presentamos el sistema de gestión de alumnos, una herramienta
        diseñada para facilitar la administración y seguimiento de estudiantes.
        Con esta plataforma, podrás agregar, editar, eliminar y consultar
        información detallada de los alumnos de manera eficiente y organizada.
        Desarrollada entorno a ReactDom por los estudiantes de la materia
        Programacion Visual 2025.
        <br />
        <br />
        En este sistema, podrás gestionar de manera sencilla y rápida las
        siguientes funcionalidades.
      </Typography>

      <Container fixed sx={{ mt: 4 }}>
        <Grid container spacing={2} justifyContent="left">
          {cardData.map((card, index) => (
            <MiCard
              key={index}
              accion={card.accion}
              descripcion={card.descripcion}
              imagen={card.imagen}
            />
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
