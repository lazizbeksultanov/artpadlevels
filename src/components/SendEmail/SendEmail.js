import React from 'react';
import "./SendEmail.css";

export default function SendEmail() {
    return (
        <section className="notif">
            <div className="notif__container _container">
                <div className="notif__body">
                    <h5 className="notif__title">Get notified about new projects</h5>
                    <form>
                        <div className="notif__row">
                            <div className="notif__input-block">
                                <input type="text" className="notif__input" />
                                <span className="placeholder">Enter your email</span>
                            </div>
                            <div className="notif__button">
                                <button type='submit' className="notif__btn btn-primary">Subscribe</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="modal">
                <div className="modal__inner">
                    <div className="modal__text">
                        <span>Thank you</span> for subscribing!
                    </div>
                </div>
            </div>
        </section>
    )
}
