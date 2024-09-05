import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, onclose} = useTelegram();

    return (
        <div className={'header'}>
            <button onClick={onclose}>close</button>
            {/*<span className={'username'}>{user.username}</span>*/}
        </div>
    );
};

export default Header;