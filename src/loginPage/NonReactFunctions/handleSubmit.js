import axios from 'axios'
import { useAppDispatch} from '../app/hooks';
import { auth } from '../features/user/userSlice'

const handleSubmit = (route, currentEmail, currentPassword) => {
    const dispatch = useAppDispatch()
    console.log(currentEmail, currentPassword, 'ref calues')
    axios.post(`http://localhost:8000/${route}`, {
    currentEmail,
    currentPassword,
    }).then(data => {
        dispatch(auth(data))
    }).catch(e => console.log(e))
};

export default handleSubmit;
