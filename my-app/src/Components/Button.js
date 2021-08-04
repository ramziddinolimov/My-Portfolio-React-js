import React from 'react';

function Buuton({filter, button}) {
    return (
        <div>
            {
                button.map((but, i) =>{
                    return <button key={i}>
                        {but}
                    </button>
                })
            }
            
        </div>
    )
}

export default Buuton;
