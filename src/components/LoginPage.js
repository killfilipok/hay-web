import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'
import auth from '../actions/auth'
import ReactSVG from 'react-svg'
import anime from 'animejs'

export const LoginPage = ({ startLogin }) => {
    let logoVisible = true
    let animRunning = false
    const logoAnim = () => {
        if (!animRunning) {
            animRunning = true
            anime({
                targets: '#logo',
                opacity: logoVisible ? 0 : 1,
                easing: 'easeInOutQuart',
                duration: 500,
                loop: false,
                complete: () => {
                    animRunning = false
                }
            });
            anime({
                targets: '#title',
                opacity: logoVisible ? 0 : 1,
                translateY: logoVisible ? '-9rem' : '0rem',
                easing: 'linear',
                duration: 450,
                loop: false,
            });
            anime({
                targets: '#animElement',
                translateY: logoVisible ? '-12rem' : '0rem',
                easing: 'linear',
                duration: 400,
                loop: false,
            });
            logoVisible ?
                document.getElementById("logo_to_0").beginElement()
                : document.getElementById("logo_to_1").beginElement()
            logoVisible = !logoVisible
        }
    }
    return (
        <div className="box-layout__container">
            <div className="box-layout__box">
                <ReactSVG
                    id="logo" className="welcome-logo"
                    src='/images/logo.svg'
                />
                <h1
                    className="box-layout__title"
                    id="title"
                > How are you? </h1>
                <div
                    className="box-layout__subtitle"
                    id="title"
                >
                    <p className="box_p">Think different for a while</p>
                    <p className="box_p">be confident & strong</p>
                </div>
                <input
                    type="text"
                    placeholder="E-mail"
                    className="text-input"
                    onClick={() => {
                        if (logoVisible) {
                            logoAnim()
                        }
                    }}
                    id="animElement"
                >
                </input>
                <button
                    className="button"
                    onClick={startLogin}
                    id="animElement"
                >
                    Continue
                </button>
            </div>
            <div className="box-layout__box-back"
                onClick={() => {
                    if (!logoVisible) {
                        logoAnim()
                    }
                }}></div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})


export default connect(undefined, mapDispatchToProps)(LoginPage)


