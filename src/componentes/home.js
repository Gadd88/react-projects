import React from 'react'
import Button from './button'
import classes from "./home.module.css"



const home = () => {

    const buttons = ["C", "9", "/","8","7","6","*","5","4","3","+","2","1","0","-",".","Del","="]



  return (
    <div className={classes.home}>
        <div className={classes.inner}>
            <div className={classes.result}>
                <div className={classes.resbox}></div>
            </div>
            <div className={classes.btns}>
                {buttons.map((element,index) => {return <Button value={element} key={index} />})}
            </div>
        </div>
    </div>
  )
}

export default home