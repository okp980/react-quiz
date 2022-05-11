import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 1,
    },
    toolbarTitle: {
        flexGrow: 1,
    }
    
}))

export default function Header(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <AppBar
                position='static'
                color='default'
                elevation={0}
            >
                <Toolbar>
                    <Typography
                        variant='h6'
                        color='inherit'
                        className={classes.toolbarTitle}>
                        Quizz
                    </Typography>
                </Toolbar>

            </AppBar>
        </div>
    )
}
