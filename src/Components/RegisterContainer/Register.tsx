import React from 'react';
import {NavLink} from "react-router-dom";

import css from "./register.module.css";
import img from './icon_img/img.png'
import facebook from './icon_img/facebook.png'
import google from './icon_img/google.png'
import github from './icon_img/git.png'
import user from "./icon_img/user.png";
import lock from './icon_img/password.png'

const Register = () => {
    return (

        <div className={css.father_container}>
            <div className={css.conteiner_login}>
                <p className={css.title}>WELCOME!</p>
                <p className={css.title_2}>If you have an account, <NavLink className={css.have_akk} to={'/login'}>Sing
                    in</NavLink></p>
                <div className={css.form_login}>
                    <div className={css.nickname_conteiner}>
                        <img className={css.icon} src={user} alt=""/>
                        <input className={css.nickname} type="text" placeholder='Enter your nickname'/>
                    </div>
                    <div className={css.email_conteiner}>
                        <img className={css.icon} src={user} alt=""/>
                        <input className={css.email} type="text" placeholder='Enter your email'/>
                    </div>
                    <div className={css.password_conteiner}>
                        <img className={css.icon} src={lock} alt=""/>
                        <input className={css.password} type="password" placeholder='Enter your password'/>
                    </div>
                </div>
                <div className={css.help_container}>
                    <p className={css.remember}>Remember me?<input type="checkbox"/></p>
                </div>

                <div className={css.btn_container}>
                    <button className={css.btn}>Sing In</button>
                </div>
                <div>
                    <b>or</b>
                </div>
                <div className={css.social_login}>

                    <img className={css.logo} src={google} alt=""/>
                    <img className={css.logo} src={github} alt=""/>
                    <img className={css.logo} src={facebook} alt=""/>
                </div>


            </div>
            <img className={css.img} src={img} alt=""/>
        </div>

    );
};

export {Register};