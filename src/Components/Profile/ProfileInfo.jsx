import React from 'react';
import Preloader from "../Common/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>

    }


    return (
        <div>
            <div>
                <img src="https://na-zapade-mos.ru/files/data/user/AiF/olga.k/files/2020/2022.03.21-1647874679.8509_bolshaja-sinica.jpg"/>
            </div>
            <div>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
}


export default ProfileInfo;
