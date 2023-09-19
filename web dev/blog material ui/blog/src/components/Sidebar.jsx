import { Grid, Link, Paper, Typography } from "@mui/material";
import { sidebar } from "../Data/Data";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  card: {
    marginBottom: "1rem",
    padding: "1.5rem",
  },
  social: {
    marginTop: "1.5rem",
  },
}));
const SideBar = () => {
  const classes = useStyle();
  return (
    <Grid item xs={12} md={4} style={{marginTop:"50px"}}>
      <Paper elevation={0} className={classes.card}>
        <Typography variant="h5" gutterBottom>
          {sidebar?.title}
        </Typography>
        <Typography variant="p" gutterBottom>
          {sidebar?.description}
        </Typography>
      </Paper>
      <Typography variant="h5" gutterBottom>
        Archives
      </Typography>
      {sidebar?.archives.map((value, key) => (
        <Link display="block" variant="body1" herf={value.url} key={key}>
          {value?.title}
        </Link>
      ))}
      <Typography variant="h5" gutterBottom className={classes.social}>
        Social
      </Typography>
      {sidebar.social.map((value, key) => (
        <Link display="block" variant="body1" herf="#" key={key}>
          <Grid container direction="row" spacing={2} alignItem="center">
            <Grid item>
              <value.icon />
            </Grid>
            <Grid item>{value.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
};

export default SideBar;
