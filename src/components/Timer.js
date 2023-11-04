import React, { useState, useEffect, useRef } from "react";
import '../style/Home.scss'
function Countdown() {
    let refInstance = useRef(null);
    let [counter, setCountdown] = useState( "00:00:00");
    let getCounter = (e) => {
        let all = Date.parse(e) - Date.parse(new Date());
        let s = Math.floor((all / 1000) % 60);
        let m = Math.floor((all / 1000 / 60) % 60);
        let h = Math.floor((all / 1000 / 60 / 60) % 24);
        let d = Math.floor((all/ 1000 / 60 / 60 /60 ) %20);
        return {
        all,
        s,
        m,
        h,
        d,
        };
    };
    let initCounter = (e) => {
        let { all, h, m, s, d,  } = getCounter(e);
        if (all >= 0) {
        setCountdown(
            (d > 9 ? d : "0" + d) +
            ":" +
            (h > 9 ? h : "0" + h) +
            ":" +
            (m > 9 ? m : "0" + m) +
            ":" +
            (s > 9 ? s : "0" + s),
        );
        }
    };
    let reset = (e) => {
        setCountdown("00:00:00:00");
        if (refInstance.current) clearInterval(refInstance.current);
        let id = setInterval(() => {
        initCounter(e);
        }, 1000);
        refInstance.current = id;
    };
    let voidTime = () => {
        let voidZone = new Date();
        voidZone.setSeconds(voidZone.getSeconds() + 90000* 1000*9000 );
        return voidZone;
    };
    useEffect(() => {
        reset(voidTime());
    }, []);
    let onReset = () => {
        reset(voidTime());
    };
    return (
        <>
        <div className="Timer">
        <h2>Deal of the day</h2>
        <h1 >End In : {counter}</h1>
        </div>
        </>
    );
}
export default Countdown;