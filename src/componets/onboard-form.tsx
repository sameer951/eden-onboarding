import React, { Fragment, useState } from 'react';
import Ball from './circle-text';

const inputStyle = {
    width: '100%',
    padding: '10px 10px',
    margin: '8px 0',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '4px',
}
const labelStyle = { display: 'block', textAlign: 'start' };
const formContainerStyle = { width: '15em', transform: 'translateX(85%)' };
const submitStyle = {
    width: '110%',
    backgroundColor: 'slateblue',
    color: 'white',
    padding: '10px 10px',
    margin: ' 8px 0',
    display: 'inline-block',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
}
const cardStyle = {
    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    transition: '0.3s',
    width: '40 %',
    borderRadius: '5px',
    maxWidth: '30%',
    display: 'inline-block',
    margin: '10px',
    padding: '10px 5px',
    textAlign: 'start'
}
// const Ball = React.lazy(() => import("./circle-text"));
function OnboardForm({ data, onSubmit, curIndex, ...props }) {
    const [state, setState] = useState();

    const strParse = (str) => {
        return str.split(' ').map(word => word.charAt(0) === '$' ? state[word.slice(1)] : word).join(' ');
    }
    const updateForm = (data: any, fieldName: string) => {
        setState((s) => { return { ...s, [fieldName]: data } });
    }

    const checkFields = () => {
        if (data?.type === 'input') return data?.inputData.every(i => i.isOptional || (state && state[i.fieldName]));
        else if (data?.type === 'data-radio') return state && state[data?.fieldName];
        return true;
    }
    const checkSubmit = () => {
        if (data?.isLastQue) alert('Thank You')
        else if (checkFields()) { onSubmit({ ...state }) }
        else console.log('all fields are mandatory.')
    }

    return (<Fragment>
        <div style={{ marginTop: '1em' }}>
            {data?.type === 'thankyou' && <Ball isCheck={true} curIndex={state?.curIndex} style={{ position: 'relative' }} />}
            <div style={{ fontSize: '35px', }}><b>{strParse(data?.title)} </b></div>
            <p>{data?.subtitle}</p>
            {data?.type === 'input' && data?.inputData?.map(({ label, example, fieldName, isOptional }, ix) => <div key={ix + '_input_' + curIndex} style={formContainerStyle}>
                <label htmlFor={fieldName} style={labelStyle}> {label} {isOptional && <p style={{ color: 'grey', display: 'inline' }}>(Optional)</p>} </label>
                <input type="text" id={fieldName} placeholder={example} style={inputStyle}
                    onChange={(e) => { updateForm(e.target.value, fieldName) }} />
            </div>)}
            {data?.type === 'data-radio' && data?.inputData?.map(({ label, desc, id }, ix) => (
                <div onClick={() => { updateForm(id, data?.fieldName) }} key={ix + '_input_' + curIndex} style={{ ...cardStyle, boxShadow: state && state[data?.fieldName] === id ? '0 0 0 2px slateblue':'0 4px 8px 0 rgba(0, 0, 0, 0.2)'}}>
                    <div>{id==='formyself'?<i className="fa fa-user" />:<i className="fa fa-group" />}</div>
                    <b>{label}</b>
                    <div style={{ fontSize: '15px', color: 'grey' }}>{desc}</div>
                </div>
            ))}
            <div style={formContainerStyle}>
                <input type="submit" value={data?.submitLabel} style={{ ...submitStyle, backgroundColor: checkFields() ? 'slateblue' : 'grey' }} onClick={() => checkSubmit()} disabled={!checkFields()} />
            </div>

        </div>
    </Fragment>)
}

export default OnboardForm;
