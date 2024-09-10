import React from 'react';
import Plot from 'react-plotly.js';

const Chart = ({xparam, yparam}) =>{
    return (
        <Plot
        
        data={[
            {
                x: xparam,
                y: yparam,
                type: 'linear',
                mode: 'lines',
                marker: {color: 'blue'},
            }
        ]}    
        layout={{
            width: '600',
            height: '400',
            datarevision
        }}    
        />
    );
};

export default Chart;