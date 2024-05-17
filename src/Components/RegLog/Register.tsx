import React, {} from 'react';


import css from './reg.module.css'

const Register = () => {


    return (
        <div className={css.father_container}>
            <div className={css.conteiner_login}>
                <p className={css.title}>WELCOME BACK!</p>
                <p className={css.title_2}>Don’t have a account, Sign up</p>
                <div className={css.form_login}>
                    <div className={css.email_conteiner}>
                        <input className={css.email} type="text" placeholder='Enter your email'/>
                    </div>
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
                <div className={css.social_login}>

                </div>
                

            </div>
            <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fparlament.ua%2Fru%2Fnews%2Fnetflix-suttevo-pidvishhila-czini-na-svoi-bazovi-ta-premialni-plani%2F&psig=AOvVaw2PKF1-RWS2x1oscbV-0eep&ust=1716029169594000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjPjP7AlIYDFQAAAAAdAAAAABAE' alt=""/>
        </div>
    )
};

export {Register};