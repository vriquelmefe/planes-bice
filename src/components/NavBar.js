import React from 'react'
import Logo from '../imagenes/logo.png'
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar
}))
const NavBar = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar>
                <Toolbar>
                        <img src={Logo} alt='logo' width="160px" className="imagen-nav"/>
                    <Typography variant="6" > Prueba Trainee BiceVida</Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}

export default NavBar
