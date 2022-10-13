import React from 'react';
// import emailjs from '@emailjs/browser';
import './style/contact.scss';
import contactImg from '../img/contact me.svg';
import {FiSend} from 'react-icons/fi';

function Contact() {
  let [phone , Sphone ] = React.useState('');
  let [email , Semail ] = React.useState('');
  let [name , Sname ] = React.useState('');
  let [message , Smessage ] = React.useState('your message');
  let [tem , stem ] = React.useState({
    user_name: name,
    user_email: email,
    message: `${message} this his phone number : ${phone}`
  })
  React.useEffect(()=>{
    stem({
      user_name: name,
      user_email: email,
      message: `${message} this his phone number : ${phone}`
    })
  },[email, message, name, phone])

  let sendmail = React.useCallback(

    () => {

      if(name === '' && email === '' && (message === ''|| message === 'your message')){
        return alert('filll from frist !!')
      }
      alert("send");
      // emailjs.sendForm('nahid_portfolio_141400D', 'template_biwbss6', tem , 'dba0IHaoDqI9uQ0Pn')
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });

    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tem],
  )
  

  return (
    <section className="contact">
      <div className="bg"></div>
      <div className="cont">
          <div className="form-conteinar">
            <h1>send me email</h1>
            <input value={email} onChange={(e)=> Semail(e.target.value)} type="text" required placeholder='your email'/>
            <input type="text" value={name} onChange={(e)=> Sname(e.target.value)} required placeholder='Your Name'/>
            <input type="number" value={phone} onChange={(e)=> Sphone(e.target.value)}  placeholder='Your phone number'/>
            <textarea name="" id="" cols="30" value={message} onChange={(e)=> Smessage(e.target.value)} rows="10"> </textarea>
            <button onClick={sendmail} className='send-email'><FiSend />send</button>
          </div>
          <div className="img">
            <img src={contactImg} alt="" />
      </div>

      </div>
    </section>
  )
}

export default Contact