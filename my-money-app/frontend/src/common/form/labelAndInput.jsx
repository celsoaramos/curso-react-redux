import React from 'react'
import Grid from '../layout/grid'

export default props => (

    <Grid cols={props.cols}>
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            {/* todas as propriedades passadas pelo input serão colocadas no input */}
            <input  {...props.input} 
                    type={props.type}
                    className="form-control" 
                    placeholder={props.placeholder} 
                    readOnly={props.readOnly} ></input>
        </div>
    </Grid>

)