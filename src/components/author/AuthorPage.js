import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import CardEl from "../../shared/CardEl";
import Loader from "../../shared/Loader";

const AuthorPage = () => {
  const { sug } = useParams();
  const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
    variables: { sug },
  });

  if (loading)
    return (
      <Loader/>
    );
  if (errors) return <h4>Something went wrong....</h4>;
  console.log(data);
  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar
            src={data.author.avatar.url}
            sx={{ width: 250, height: 250 }}
          />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {data.author.name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {data.author.field}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.author.description.html),
            }}
          ></div> 
        </Grid>
        <Grid item sx={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            {data.author.name}'s articles
          </Typography>
          <Grid container  spacing={2} mt={2}>
            {data.author.posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEl
                  title={post.title} 
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthorPage;
