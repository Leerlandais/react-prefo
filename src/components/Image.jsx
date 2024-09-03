function Image({src, alt, id}) {
    return (
        <div>
            <img src={src} alt={alt} id={id} height="400px" width="400px"/>
        </div>
    )
}

export default Image