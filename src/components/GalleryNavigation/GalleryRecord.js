import {NavLink} from "react-router-dom";

const GalleryRecord = (props) => {
    return (
        <NavLink to={`/galleries/${props.record.galleryid}`} activeStyle={{color: "aquamarine"}}>
            <li> {props.record.name} </li>
        </NavLink>
    )
}

export default GalleryRecord;
