
import { Link as RouterLink } from 'react-router-dom';

export default function Link({ linkTo, linkName }) {
    return <RouterLink className={"myLink"} to={linkTo}>{linkName}</RouterLink>;
}


