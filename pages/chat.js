import { useState} from 'react'
import Link from "next/link";
import Image from "next/image";
import chatStyle from "../styles/Chat.module.css"
import { Button, Form, Spinner, Toast, ToastContainer } from "react-bootstrap";

function Chat() {
 const[gptResp, setGptResp]= useState("");
 const [isLoading, setIsLoading] = useState(false);
 const [onErr, setOnErr] = useState(false);

 const handleSubmit= async(e)=>{
   e.preventDefault();

   console.log("Button CLicked : ", e.target);

   const formData = new FormData(e.target);
   const prompt= formData.get("prompt")?.toString().trim();

   console.log("Prompt : ", prompt);

   if(prompt){
    try {
     setOnErr(false);
     setIsLoading(true);
     setGptResp("");

     const response = await fetch(
      "/api/gpt?prompt=" + encodeURIComponent(prompt)
     );
     const body = await response.json();
     setGptResp(body.quote);
    } catch (error) {
     console.error(error);
     setOnErr(true);
    } finally {
     setIsLoading(false);
     e.target.reset(); // clears the input field 
    }
   }
   
 }

 return (
  <>
   <div className={chatStyle.chat_container}>
    <Link href="/">
     <h6 className="mt-1 h6">Home</h6>
    </Link>
    <div className={chatStyle.img_container}>
     <Image
      src="/images/gpt.jpg"
      alt="Vercel Logo"
      fill
      className={chatStyle.chatImg}
     />
    </div>
    <Form className={chatStyle.inputForm} onSubmit={handleSubmit}>
     <Form.Group className="mt-3" controlId="prompt-input">
      <Form.Label className="mt-1 h4">What's your question?</Form.Label>
      <Form.Control name="prompt" placeholder="type here" maxLength={150} />
     </Form.Group>
     <Button type="submit" className="mt-3 mb-3" disabled={isLoading}>
      Submit
     </Button>
    </Form>
    {isLoading && (
     <Spinner className="mt-3" animation="border" variant="primary"></Spinner>
    )}
    {onErr && (
     <ToastContainer position="top-end" className="me-3 mt-3">
      <Toast autohide delay={3000} bg={"danger"}>
       <Toast.Body color="white">Something went wrong, try again.</Toast.Body>
      </Toast>
     </ToastContainer>
    )}
    {/* {gptResp && <h5 className="h5 mt-3">{gptResp}</h5>} */}
    {gptResp && (
     <Form.Control
      as="textarea"
      rows={9}
      className="fw-bold fs-6 "
      value={gptResp}
     />
    )}
   </div>
  </>
 );
}

export default Chat;
