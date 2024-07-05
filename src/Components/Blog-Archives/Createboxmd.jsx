import React from 'react';
import Box from '../Featured-posts/Box/Box';

export default function Createboxmd(props) {
    

    return (
            <Box sx={{
                width: 350,
                height: 250,
                borderRadius: 15,
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
                    borderRadius: '15px'
                  }}
                 alt="Box image"/>
            </Box>
    )
}
