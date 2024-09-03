import React from 'react';

const Header = () => {

    const tg = window.Telegram.WebApp;
    const onclose = () => {
        tg.close()
    }

    return (
        <div className={'header'}>
            <button onClick={onclose}>close</button>
            <span className={'username'}>{tg.initDataUnsafe.user.username}</span>
        </div>
    );
};

export default Header;