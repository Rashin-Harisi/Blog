import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CardAuthor = ({ avatar, field, name, sug }) => {
  return (
    <Card sx={{ maxWidth: "450", height: 550 }}>
      <CardMedia image={avatar.url} sx={{ height: 350 }} />
      <CardContent>
        <Typography component="h3" variant="h6" fontWeight={700} mt={1}>
          {name}
        </Typography>
        <Typography component="h3" variant="h6" color="text.secondary">
          {field}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions>
        <Link
          to={`/authors/${sug}`}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{ width: "100%", borderRadius: 3 }}
          >
            more details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardAuthor;
