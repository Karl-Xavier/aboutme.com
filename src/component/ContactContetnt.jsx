import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './comptStyle/ContactContent.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Envelope, FacebookLogo, PaperPlaneTilt, PhoneCall, WhatsappLogo } from 'phosphor-react';

export default function ContactContent({ setIsOpen, lightMode }) {
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Log form data to verify
        console.log(formData);

        emailjs.sendForm(
            'service_hwegtnk', 
            'template_e3omqgm', 
            form.current, 
            'LF5H8jf-2O3xKGCon'
        ).then(() => {
            alert('Message sent');
            // Clear form data after successful submission
            setFormData({
                user_name: '',
                user_email: '',
                message: ''
            });
        }).catch(err => {
            alert('Something went wrong');
            console.log('Error:', err);
        });
    }

    function changeIsOpen(){
        setIsOpen(false)
    }

    return (
        <div className='container' onClick={changeIsOpen}>
            <h2>Contact Me on</h2>
            <div className="container contactInfo mt-4 p-3">
                <div className="row logo">
                    <div className="col-lg-3 log phone">
                        <a  style={!lightMode ? styles.darkCol : styles.LightCol}className='aref' href="tel:+2347065824973" target='_blank'><PhoneCall size={60} weight='fill' color={lightMode ? '161414' : '#eee'}/>
                        <p>+2347065824973</p>
                        </a>
                    </div>
                    <div className="col-lg-3 log email">
                    <a style={!lightMode ? styles.darkCol : styles.LightCol} className='aref' href="mailto:brunoemeka06@gmail.com" target='_blank'><Envelope size={60} weight='fill' color={lightMode ? '161414' : '#eee'}/>
                        <p>brunoemeka06@gmail.com</p>
                    </a>
                    </div>
                    <div className="col-lg-3 log whats">
                        <a style={!lightMode ? styles.darkCol : styles.LightCol} className='aref' href="https://wa.me/07065824973" target='_blank'><WhatsappLogo size={60} weight='fill' color='#068d3a'/>
                        <p>+2347065824973</p>
                        </a>
                    </div>
                    <div className="col-lg-3 log face">
                    <a style={!lightMode ? styles.darkCol : styles.LightCol} className='aref' href="https://www.facebook.com/KarlXaviver" target='_blank'><FacebookLogo size={60} weight='fill' color='#0066ff'/>
                        <p>Emmy Bruno</p>
                    </a>
                    </div>
                </div>
                <div className="message">
                    <h2>Send me a message</h2>
                    <form ref={form} onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="user_name" 
                            placeholder='Enter your name' 
                            value={formData.user_name}
                            onChange={handleChange}
                            required
                        />
                        <input 
                            type="email" 
                            name="user_email" 
                            placeholder='Enter an email' 
                            value={formData.user_email}
                            onChange={handleChange}
                            required
                        />
                        <textarea 
                            name="message" 
                            placeholder='Message' 
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button className='butt' type='submit'>
                            Send<PaperPlaneTilt size={25} weight='fill'/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

const styles = {
    darkCol: {
        color: '#eee'
    },
    LightCol: {
        color: '#161414'
    }
}