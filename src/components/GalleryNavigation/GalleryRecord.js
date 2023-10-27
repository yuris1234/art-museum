const GalleryRecord = (props) => {
    return (
        <Navlink to={`/galleries/${props.record.galleryid}`}>
            <li> {props.record.name} </li>
        </Navlink>
    )
}
