import React from 'react';
import Box from './Box';

export default function Createboxsmall(props) {
    

    return (
            <Box sx={{
                width: 250,
                height: "100%",
                borderRadius: 10,
                position: 'relative'
                }}
            >
                <img src={process.env.PUBLIC_URL + './' + props.image}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute', // Position the image within the box
                    top: 0,
                    left: 0,
                    borderRadius: '10px',
                  }}
                 alt="Box image"/>
            </Box>
    )
}
