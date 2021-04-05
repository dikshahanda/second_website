import { React } from "react";

const Heading = (props) =>{
   return( <><div className="heading-marg">
        <p className="heading-meta">{props.Textp}</p>
        <h2 className="colorlib-heading">{props.Texth1}</h2>
    </div></>)
}

export default Heading;
