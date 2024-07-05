import React from 'react'

const year = new Date().getFullYear()

export default function Footer(props) {

    return (
        <div style={{display:"flex",gap:"30px", fontWeight:"500", textAlign:"center", padding:"3% 0", margin:"auto", width:"fit-content", backgroundColor:"#43cd66"}}>
            <div style={{padding:"2% 1%"}}>
                <img width={"200px"} src="https://scontent.whatsapp.net/v/t39.8562-34/359470559_1019306449108943_4860182182149959667_n.svg?ccb=1-7&_nc_sid=73b08c&_nc_ohc=kEDrLclwDmwAX_jkjrt&_nc_ht=scontent.whatsapp.net&oh=01_AdThHzqBcc3eH6HY6qU-RJ2hjIS6HswDC-VhD7t7bAQyyQ&oe=65821F58" alt='Business WhatsApp Logo'/>
            </div>
            <div style={{fontSize:"1.1rem", padding:"0 1.5%"}} >
                <a href='' style={{color:"#222", textDecoration:"none"}}>Trust & Safety</a>
            </div>
            <div style={{fontSize:"1.1rem", padding:"0 1.5%"}} >
            <a href='' style={{color:"#222", textDecoration:"none"}}>Business Messaging Policy</a>
            </div>
            <div style={{fontSize:"1.1rem", padding:"0 1%"}} >
            <a href='' style={{color:"#222", textDecoration:"none"}}>Help</a>
            </div>
            <div style={{fontSize:"1.1rem", padding:"0 1.5%"}} >
            <a href='' style={{color:"#222", textDecoration:"none"}}>Terms and Conditions</a>
            </div>
            <div style={{fontSize:"1.1rem", padding:"0 1.5%"}} >
            <a href='' style={{color:"#222", textDecoration:"none"}}>Data Policy</a>
            </div>
            <div style={{fontSize:"1.1rem", padding:"0 1.5%"}} >
                <a href='' style={{color:"#222", textDecoration:"none"}}>Privacy Collections</a>
            </div>
            <div style={{fontSize:"1.1rem"}} >
            {year} &#169; WhatsApp Business
            </div>
        </div>
    )
}
