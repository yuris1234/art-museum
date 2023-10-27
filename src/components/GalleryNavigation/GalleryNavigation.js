import {NavLink} from "react-router-dom";
import GalleryRecord from "./GalleryRecord";
import './GalleryNavigation.css';

function GalleryNavigation(props) {
    const galleryRecord = props.records.map((record) => {
        return <GalleryRecord key={record.id} record={record}/>
    });

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <h1> Galleries </h1>
            <ul>
                {galleryRecord}
            </ul>
        </nav>
    );
};

export default GalleryNavigation;
