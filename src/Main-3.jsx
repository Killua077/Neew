import { useRef, useState } from "react";

function Mainnn() {
    const nameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();
    const idRef = useRef();
    const carRef = useRef();
    const motorRef = useRef();
    const [submit, setSubmit] = useState(false);


    const formSubmit = () => {
        console.log(nameRef.current.value)
        console.log(lastnameRef.current.value)
        console.log(emailRef.current.value)
        console.log(idRef.current.value)
        console.log(carRef.current.value)
        console.log(motorRef.current.value)


        setSubmit(true)
    }


    return (
        <>
          <div style={{
             display: !submit ? "block" : "none"
          }}>
            <h1>Inregistrarea Masinii</h1>
            <input style={{
                border: "none",
                outline: "none",
                borderBottom: "2px solid grey",
                margin: "20px"
            }} placeholder="Nume" ref={nameRef} />
            <br />
            <input style={{
                border: "none",
                outline: "none",
                borderBottom: "2px solid grey",
                margin: "20px"
            }} placeholder="Prenume" ref={lastnameRef} />
            <br />
            <input style={{
                border: "none",
                outline: "none",
                borderBottom: "2px solid grey",
                margin: "20px"
            }} type="email" placeholder="Prenume" ref={emailRef} />
            <br />
            <input style={{
                border: "none",
                outline: "none",
                borderBottom: "2px solid grey",
                margin: "20px"
            }} placeholder="IDNP" ref={idRef} />
            <br />
            <input style={{
                border: "none",
                outline: "none",
                borderBottom: "2px solid grey",
                margin: "20px"
            }} placeholder="Model masina" ref={carRef} />
            <br />
            <input style={{
                border: "none",
                outline: "none",
                borderBottom: "2px solid grey",
                margin: "20px"
            }} placeholder="Capacitatea Motorului" ref={motorRef} />
            <br />
            <button style={{
                padding: "15px",
                backgroundColor: "black",
                width: "120px",
                borderRadius: "15px",
                color: "white",
                margin: "20px",
                fontSize: "20px"

            }} onClick={() => formSubmit()}>Click Me</button>
          </div>
          <div style={{
             display: submit ? "block" : "none",
             fontSize: "30px"
          }}>
            <p>Multumim!!!</p>
            <img src="https://media.tenor.com/q-zZSTX6jSIAAAAM/mail-download.gif" alt="" />
          </div>
        </>
    )
}

export default Mainnn