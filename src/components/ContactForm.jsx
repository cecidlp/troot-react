import { useState, useEffect } from "react";
import { useGlobalContext } from '../GlobalContextProvider'

const ContactForm = () => {
  const { isSpanish } = useGlobalContext();

  
  const text = {
    english: {
      send: "Send",
      sending: "Sending...",
      successMessage: "Message sent successfully",
      errorMessage: "Something went wrong, please try again later.",
    },
    spanish: {
      send: "Enviar",
      sending: "Enviando...",
      successMessage: "Mensaje enviado exitosamente",
      errorMessage: "Algo salió mal, por favor inténtalo de nuevo más tarde.",
    },
  };

  const formInitialDetails = {
    name: '',
    email: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState(text[isSpanish ? "spanish" : "english"].send);

  useEffect(() => {
    setButtonText(text[isSpanish ? "spanish" : "english"].send);
  }, [isSpanish]);
  
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
}

const handleSubmit = async (e) => {
  e.preventDefault();
  setButtonText(text[isSpanish ? "spanish" : "english"].sending);
  const url = "https://fringe-clumsy-swing.glitch.me/contact";
  try {
      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      setButtonText(text[isSpanish ? "spanish" : "english"].send);
      let result = await response.json();
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ success: true, message: text[isSpanish ? "spanish" : "english"].successMessage });
      } else {
        setStatus({ success: false, message: text[isSpanish ? "spanish" : "english"].errorMessage });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({ success: false, message: text[isSpanish ? "spanish" : "english"].errorMessage });
    }
  };


  return (
    <section className="contact flex flex-col lg:flex-row items-center px-6 md:px-10 py-6 lg:px-24 lg:justify-between lg:gap-16" id="contacto">
      <div className="py-4 lg:py-16 w-[100%] text-center lg:text-left">
        <h2 className="md:text-[2.5rem] xl:text-[3.5rem] text-[#5C3671] text-[1.5rem] font-[600] pb-4"> {isSpanish ? "Contactanos" : "Contact us"} </h2>
        <p className="text-p mb-5 md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem] lg:mb-16 text-gray-500 "> {isSpanish ? "¿No encontrás lo que buscás o tenés alguna duda?" : "Can't find what you are looking for?"}<br/> {isSpanish ? "Escribinos y te responderemos a la brevedad." : "Write us a message and we'll answer you shortly."} </p>
      </div>
      <div className="w-[100%]">
        <form action="#" className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block mb-2 text-p font-medium text-[#3C3B39] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem] "> {isSpanish ? "Tu nombre" : "Your name"}</label>
            <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-[#3C3B39] text-p rounded-lg focus:outline-none focus:border-2 focus:ring-ring-color focus:border-secondary block w-full p-3.5 md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem] font-light" placeholder="Jane Doe" value={formDetails.name} onChange={(e) => onFormUpdate('name', e.target.value)} required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-p font-medium text-[#3C3B39] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem]">{isSpanish ? "Tu e-mail" : "Your e-mail"}</label>
            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-[#3C3B39] text-p rounded-lg focus:outline-none focus:border-2 focus:ring-ring-color focus:border-secondary block w-full p-3.5 md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem] font-light " placeholder= "janedoe@gmail.com" value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)} required />
          </div>
         {/*  <div>
            <label htmlFor="subject" className="block mb-2 text-p font-medium text-[#3C3B39] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem]">Asunto</label>
            <input type="text" id="subject" className="block p-3.5 w-full text-p  text-[#3C3B39] bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-ring-color focus:border-secondary md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem] font-light" placeholder= {isSpanish ? "¿En qué te podemos ayudar?" : "What can we do for you?"}  required />
          </div> */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-p font-medium text-[#3C3B39] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem]">{isSpanish ? "Tu mensaje" : "Your message"}</label>
            <textarea id="message" rows="6" className="block p-3.5 w-full text-p   text-[#3C3B39]  bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:border-2 focus:ring-ring-color focus:border-secondary md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem] font-light " placeholder={isSpanish ? "Escribí tu mensaje" : "Write your message"}  value={formDetails.message} onChange={(e) => onFormUpdate('message', e.target.value)} ></textarea>
          </div>
          <button type="submit" className="py-3 px-5 font-medium text-center text-white rounded-lg bg-[#5B726C] sm:w-fit  focus:ring-4 focus:outline-none focus:ring-ring-color focus:ring-opacity-20 ">{buttonText}</button>
          {
                      status.message &&
                      <div>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </div>
                    }
        </form>
      </div>
    </section>
  )
}

export default ContactForm