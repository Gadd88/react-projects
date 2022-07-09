import React from 'react'
import classes from "./home.module.css"


const home = () => {
  return (
    <div className={classes.home}>
        <div className={classes.inner}>
            <div className={classes.result}>
                <div className={classes.resbox}></div>
            </div>
            <div className={classes.btns}>

            </div>
        </div>
    </div>
  )
}

export default home