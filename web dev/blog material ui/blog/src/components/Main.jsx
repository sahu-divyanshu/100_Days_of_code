import { Divider, Grid, Typography } from "@mui/material"
import {posts }  from "../Data/Data";
import Markdown from "markdown-to-jsx"

const Main = () => {
  return (
    <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom style={{marginTop:"40px"}}>
        From the Firehose
        </Typography>
        <Divider/>
        {posts.map((value) => (
        <Markdown key={value?.body}>{value?.body}</Markdown>
      ))}
    </Grid>
  )
}

export default Main
