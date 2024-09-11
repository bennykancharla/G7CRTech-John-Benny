import React, { useState, useEffect } from 'react';


export interface LabeledInputProps {
    value: any,
    id: string,
    onUpdate: (value: any, id: string) => void

    label?: string,
    type?: string,
    placeholder?: string,
    errorClass?: string,
    validators?: any[],
    componentBuilder?: any
}


export const LabeledInput = ({ value, id, onUpdate, label = id, componentBuilder, placeholder = label, type = "text", validators }: LabeledInputProps) => {

    var res:any = null ;
    var temp;
    // const [res, setRes] = useState<any>(null);

    const any = (validators: any,v:string) => {
        for (var i in validators) {
            res = validators[i](v);
            console.log(res)
            if(res){
                return res;
            }

            // console.log(temp)
            // if (temp) {
            //     return;
            // }
        }
        // console.log(res);
        // return;
    }
    // if (temp) {
    //     setRes(temp);
    // } else {
    //     setRes(null)
    // }

    // console.log(res);

    const handleUpdate = (e: any) => {
        onUpdate(e.target.value, id);
        any(validators,e.target.value)
    }




    let _props = {
        value,
        id,
        onChange: handleUpdate,
        placeholder,
        type,
        className: `form-control`,
        //"aria-describedby":"basic-addon3 basic-addon4"
    }



    return (

        <div className="mb-3">
            {/* <label htmlFor="basic-url" className="form-label">Your vanity URL</label> */}
            <div className={`input-group `}>
                <span className="input-group-text" >{label}</span>

                {componentBuilder !== undefined ? componentBuilder(_props) : <input {..._props} />}
            </div>
            {res && <div className="form-text" style={{ "color": "red" }} id="basic-addon4">{`${res.message}`}</div>}
        </div>
    );

}


export const TextArea = (props: any) => (
    <textarea {...props}>
    </textarea>
);
