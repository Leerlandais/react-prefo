import PropTypes from 'prop-types';
function Image({src, alt, id, h, w}) {
    return (
        <div>
            <img src={src} alt={alt} id={id} height={h} width={w}/>
        </div>
    )
}
Image.defaultProps = {
    h: '400px',
    w: '400px',
};


Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    id: PropTypes.string,
    h: PropTypes.string,
    w: PropTypes.string,
};
export default Image