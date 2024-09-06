
import { Link as RouterLink } from 'react-router-dom';

export default function Link({ className, linkTo, linkName }) {
    return <RouterLink className={className} to={linkTo}>{linkName}</RouterLink>;
}


