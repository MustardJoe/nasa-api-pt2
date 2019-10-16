import ApodComp from '../../components/apod/Apod';
import { getImage } from '../../services/nasa-api';

export default ApodComp(getImage);
