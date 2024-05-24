import { useQuery } from "@apollo/client";
import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import Loader from "../../shared/Loader";
import CardAuthor from "../../shared/CardAuthor";

const AuthorsPage = () => {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);
  if (loading) return <Loader />;
  if (errors) return <h4>Something went wrong....</h4>;
  console.log(data);
  return (
    <Container maxWidth="lg">
      <Grid container mt={5}>
        <Grid item xs={12} px={3}>
          <Typography
            component="h2"
            variant="h4"
            fontWeight={700}
            color="black"
          >
            Authors
          </Typography>
        </Grid>
        <Grid container spacing={2} mt={2} ml={2}>
          {data.authors.map((author) => (
            <Grid item xs={12} sm={6} md={4} key={author.id}>
              <CardAuthor {...author} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthorsPage;
