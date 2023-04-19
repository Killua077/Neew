import { useRef, useState } from "react";

function Mainn() {
    const nameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();
    const [submit, setSubmit] = useState(false);

    const formSubmit = () => {
        console.log(nameRef.current.value);
        console.log(lastnameRef.current.value);
        console.log(emailRef.current.value);
     
        setSubmit(true);

    }

    return (
        <>
         <div style={{
            display: !submit ? "block" : "none"
         }}>
            <h1>Forma4ka</h1>
            <input placeholder="Nume" ref={nameRef} />
            <br />
            <input placeholder="Prenume" ref={lastnameRef} />
            <br />
            <input type="email" placeholder="Email" ref={emailRef} />
            <br />
            <button onClick={() => formSubmit()}>Primeste nimic</button>
        </div>
        <div style={{
            display: submit ? "block" : "none"
         }}>
            <p> multumesc pentru inregistrate!</p>
            <img src="https://media.tenor.com/7Glf51FDQZQAAAAM/monkey-annoying.gif" alt="" />
        </div>
        </>
    )
}

export default Mainn