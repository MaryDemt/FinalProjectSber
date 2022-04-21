import {useSelector} from 'react-redux';

export function useAuth() {
    const {token} = useSelector(state => state.person.token);

    return {
      isAuth: !!token
    };
}