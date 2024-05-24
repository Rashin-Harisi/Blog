import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import Loader from "../../shared/Loader";
import { Container, Grid, Typography } from "@mui/material";
import CardEl from "../../shared/CardEl";

const BlogsPage = () => {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);

  if (loading) return <Loader />;
  if (errors) return <h4>Something went wrong....</h4>;

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
            All blogs
          </Typography>
        </Grid>
        <Grid container spacing={2} mt={2} ml={2}>
          {data.posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <CardEl {...post} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogsPage;
