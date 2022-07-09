import React, { useState } from 'react'
import Button from './button'
import classes from "./home.module.css"


const Home = () => {

    const [res, setRes] = useState("")

    const buttons = ["C", "9", "/","8","7","6","*","5","4","3","+","2","1","0","-",".","Del","="];

    const findval = () =>{
        let result = Function ("return " +res)();
        setRes(result.toString());
    }
    
    const handler = (arg) => {
        if(res ==="Infinity"){
            setRes("");
            return
        }
        if(arg === "C") setRes("");
        else if(arg === "=") findval();
        else if(arg === "Del"){
            let n= res.length;
            if(n>0)
            setRes(res.slice(0,n-1));
        }
        else setRes(res.concat(arg))
    }




  return (
    <div className={classes.home}>
        <div className={classes.inner}>
            <div className={classes.result}>
                <div className={classes.resbox}>{res}</div>
            </div>
            <div className={classes.btns}>
                {buttons.map((element,index) => {return <Button handler={handler} value={element} key={index} />})}
            </div>
        </div>
    </div>
  )
}

export default Home