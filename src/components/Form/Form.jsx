import React, {useCallback, useEffect, useState} from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import {useFetcher} from "react-router-dom";

const Form = () => {

    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('');

    const {tg} = useTelegram();

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject,
        }
        tg.sendData(JSON.stringify(data))
    }, [])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData);

        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        }
    }, []);

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'send data'
        })
    }, []);

    useEffect(() => {
        if (!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [street, country]);

    return (
        <div className="form">
            <h3>write your info</h3>
            <input
                className='input'
                type='text'
                placeholder='country'
                value={country}
                onChange={onChangeCountry}
            />
            <input
                className='input'
                type='text'
                placeholder='street'
                value={street}
                onChange={onChangeStreet}
            />
            <select className='select' value={subject} onChange={onChangeSubject}>
                <option value={'physical'}>physic face</option>
                <option value={'legal'}>legal face</option>
            </select>
        </div>
    );
};

export default Form;