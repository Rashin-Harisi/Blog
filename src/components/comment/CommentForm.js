import { useMutation } from "@apollo/client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { SEND_COMMENT } from "../../graphql/mutations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CommentForm = ({ slug }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [sendComment, {loading, data, errors}] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });
  console.log(data);
  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
    } else {
      toast.warn("Please fill all sections!", {
        position: "top-center",
      });
    }
  };

  if (data){
    toast.success("Your comment has been sent and is awaiting confirmation.", {
        position: "top-center",
    })
  }
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1)0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          Comment Form
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="User's name"
          variant="outlined"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="Email"
          variant="outlined"
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="Comment"
          variant="outlined"
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          minRows={4}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            Is sending...
          </Button>
        ) : (
          <Button variant="contained" onClick={sendHandler}>
            Post
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default CommentForm;
