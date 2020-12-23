import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import ExitIcon from '@material-ui/icons/ExitToAppOutlined'
import Checkbox from '@material-ui/core/Checkbox'
import { useState } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const useStyle = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #000)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px',
    marginBlock: '15px'
  }
});

const GridExample = () => {
  return (
    <>
      <Grid container spacing="3" justify="center">
        <Grid item xs={12} sm={4} md={3}>
          <Paper style={{ height: 75, width: "%100" }}></Paper>
        </Grid >
        <Grid item xs={12} sm={4} md={3}>
          <Paper style={{ height: 75, width: "%100" }}></Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Paper style={{ height: 75, width: "%100" }}></Paper>
        </Grid>
      </Grid>
      <Grid container >
      <Grid item >
        <Paper style={{ height: 75, width: "10px", backgroundColor:'red'}}>a</Paper>
      </Grid >
      <Grid item>
        <Paper style={{ height: 75, width: "10px", backgroundColor: 'yellow' }}></Paper>
      </Grid>
      <Grid item >
        <Paper style={{ height: 75, width: "10px" }}></Paper>
      </Grid>
    </Grid>
    </>

  )
}


function CheckboxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel control={
      <Checkbox
        checked={checked}
        onChange={(e) => { setChecked(e.target.checked) }}
        icon={<SaveIcon />}
        checkedIcon={<ExitIcon />}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    }
      label="Check control" />
  )
}

function StyledButton() {
  const classes = useStyle()
  return (
    <Button className={classes.root}>
      Test styled button
    </Button>
  )
}

function Education() {
  return (
    <Container maxWidth="lg">
      <GridExample />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '%100', height: '%100', margin: '0 auto' }}>
        <Typography variant="h1">
          This is Heading
      </Typography>
        <StyledButton />
        <TextField
          variant="outlined"
          color='secondary'
          type="text"
          label="abcde"
          placeholder="put spmething"
        />
        <CheckboxExample />
        <ButtonGroup>
          <Button variant="contained"
            color="primary"
            startIcon={<SaveIcon />}>
            Save
          </Button>
          <Button variant="contained"
            color="secondary"
            startIcon={<ExitIcon />}>
            Exit
          </Button>
        </ButtonGroup>
      </div>
    </Container>
  );
}

export default Education;