import { useState } from "react";

const ContactForm = () => {
  /*   const formInitialDetails = {
      name: '',
      email: '',
      message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
  
    const onFormUpdate = (category, value) => {
        setFormDetails({
          ...formDetails,
          [category]: value
        })
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setButtonText("Sending...");
      const url = "http://localhost:5000/contact";
      try {
          let response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
          });
  
          setButtonText("Send");
          let result = await response.json();
          setFormDetails(formInitialDetails);
          if (result.code === 200) {
            setStatus({ success: true, message: 'Message sent successfully' });
          } else {
            setStatus({ 
              success: false, 
              message: 'Something went wrong, please try again later.'
            });
          }
        } catch (error) {
          console.error("Error submitting form:", error);
          setStatus({ 
            success: false, 
            message: 'Something went wrong, please try again later.'
          });
        }
      }; */

  return (
    <section className="contact flex flex-col lg:flex-row items-center px-6 md:px-10 py-6 lg:px-24 lg:justify-between lg:gap-16" id="connect">
      <div class="py-4 lg:py-16 w-[100%] text-center lg:text-left">
        <h2 class="md:text-[2.5rem] xl:text-[3.5rem] text-[#5C3671] text-[1.5rem] font-[600] pb-4">Contactanos</h2>
        <p class="text-p mb-5 md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem] lg:mb-16 text-gray-500 ">¿No encontrás lo que buscás o tenés alguna duda? <br/> Escribinos y te responderemos a la brevedad</p>
      </div>
      <div className="w-[100%]">
        <form action="#" class="space-y-8">
          <div>
            <label for="name" class="block mb-2 text-p font-medium text-[#3C3B39] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem] ">Tu nombre</label>
            <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-[#3C3B39] text-p rounded-lg focus:ring-ring-color focus:border-secondary block w-full p-3.5 md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem] font-light" placeholder="Pepe Argento" required />
          </div>
          <div>
            <label for="email" class="block mb-2 text-p font-medium text-[#3C3B39] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem]">Tu email</label>
            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-[#3C3B39] text-p rounded-lg focus:ring-ring-color focus:border-secondary block w-full p-3.5 md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem] font-light " placeholder="tunombre@gmail.com" required />
          </div>
          <div>
            <label for="subject" class="block mb-2 text-p font-medium text-[#3C3B39] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem]">Asunto</label>
            <input type="text" id="subject" class="block p-3.5 w-full text-p  text-[#3C3B39] bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-ring-color focus:border-secondary md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem] font-light" placeholder="¿En qué te podemos ayudar?" required />
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block mb-2 text-p font-medium text-[#3C3B39] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem]">Tu mensaje</label>
            <textarea id="message" rows="6" class="block p-3.5 w-full text-p  text-[#3C3B39]  bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-ring-color focus:border-secondary md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem] font-light" placeholder="Escribí tu mensaje"></textarea>
          </div>
          <button type="submit" class="py-3 px-5 font-medium text-center text-white rounded-lg bg-[#5B726C] sm:w-fit  focus:ring-4 focus:outline-none ">Enviar</button>
        </form>
      </div>

      {/* 
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container> */}
    </section>
  )
}

export default ContactForm