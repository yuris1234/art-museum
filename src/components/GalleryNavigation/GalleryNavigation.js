import {NavLink} from "react-router-dom";


function GalleryNavigation(props) {
    const galleryRecord = props.records.map((record) => {
        return <GalleryRecord record={record}/>
    });

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <h1> Galleries </h1>
        </nav>
    );
};

export default GalleryNavigation;
