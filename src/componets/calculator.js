import {React, useState} from 'react';
import '../stylsheets/calculator.css'

function Button(props) {
    const btnClicked = (e)=>{
        props.BtnClicked(e.target.value);
    }
    return(
        <input className={props.btnClass} type="button" value={props.value} onClick={btnClicked}></input>
    )
}
export function Calculator(props) {
    const [valInput, setVal] = useState('');
    const GetValueBtn = (val)=>{
        if('Clear' === val){
            setVal('');
        }else{
            setVal(valInput+val);
        }
        
    }
    return(
        <>
            <div className="calculator">
                <div className='input'>
                    <input type="text" disabled autoFocus value={valInput}></input>
                </div>
                <div className='buttons'>
                    <Button BtnClicked={(val)=>{GetValueBtn(val)}} btnClass="f-row" value="1"/>
                    <Button BtnClicked={(val)=>{GetValueBtn(val)}} btnClass="s-row" value="2"/>
                    <Button BtnClicked={(val)=>{GetValueBtn(val)}} btnClass="t-row" value="3"/>
                    <Button BtnClicked={(val)=>{GetValueBtn(val)}} btnClass="c-row" value="+"/>
                    <Button BtnClicked={(val)=>{GetValueBtn(val)}} btnClass="f-row" value="4"/>
                    <Button BtnClicked={(val)=>{GetValueBtn(val)}} btnClass="s-row" value="5"/>
                    <Button BtnClicked={(val)=>{GetValueBtn(val)}} btnClass="t-row" value="6"/>
                    <Button BtnClicked={(val)=>{GetValueBtn(val)}} btnClass="c-row" value="-"/>
                    <Button BtnClicked={(val)=>{GetValueBtn(val)}} btnClass="f-row" value="7"/>
                    <Button BtnClicked={(val)=>{GetValueBtn(val)}} btnClass="s-row" value="8"/>
                    <Button BtnClicked={(val)=>{GetValueBtn(val)}} btnClass="t-row" value="9"/>
                    <Button BtnClicked={(val)=>{GetValueBtn(val)}} btnClass="c-row" value="*"/>
                    <Button BtnClicked={(val)=>{GetValueBtn(val)}} btnClass="f-row" value="="/>
                    <Button BtnClicked={(val)=>{GetValueBtn(val)}} btnClass="s-row" value="0"/>
                    <Button BtnClicked={(val)=>{GetValueBtn(val)}} btnClass="t-row" value="."/>
                    <Button BtnClicked={(val)=>{GetValueBtn(val)}} btnClass="c-row" value="/"/>
                    <Button BtnClicked={(val)=>{GetValueBtn(val)}} btnClass="clear" value="Clear"/>
                </div>
            </div>
        </>
    )
}