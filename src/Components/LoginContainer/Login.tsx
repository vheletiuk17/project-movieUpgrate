import React, {} from 'react';
import {NavLink} from "react-router-dom";

import css from './login.module.css'
import img from './icon_img/img.png'
import facebook from'./icon_img/facebook.png'
import google from "./icon_img/google.png";
import github from "./icon_img/git.png";
import lock from './icon_img/password.png'
import user from './icon_img/user.png'

const Login = () => {


    return (
        <div className={css.father_container}>
            <div className={css.conteiner_login}>
                <p className={css.title}>WELCOME BACK!</p>
                <p className={css.title_2}>Don’t have a account, <NavLink className={css.dont_have_akk}
                                                                          to={'/register'}>Sign up</NavLink></p>
                <div className={css.form_login}>
                    <div className={css.email_conteiner}>
                        <img className={css.icon} src={user} alt=""/>
                        <input className={css.email} type="text" placeholder='Enter your email'/>
                    </div>
                    <img className={css.icon} src={lock} alt=""/>
                    <div className={css.password_conteiner}>
                        <input className={css.password} type="password" placeholder='Enter your password'/>
                    </div>
                </div>
                <div className={css.help_container}>
                    <p className={css.remember}>Remember me?<input type="checkbox"/></p>
                    <p className={css.forgot}>forgot your password?</p>
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
    )
};

export {Login};