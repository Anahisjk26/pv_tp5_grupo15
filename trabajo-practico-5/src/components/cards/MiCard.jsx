import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const MiCard = ({ accion, descripcion, imagen }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {imagen && (
          <CardMedia component="img" height="140" image={imagen} alt={accion} />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {accion}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
