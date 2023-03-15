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
    }
   }
   
 }

 return (
  <>
   <div className={chatStyle.chat_container}>
    <Link href="/">
     <p>back</p>
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
      <Form.Label className="mt-1">What's your ques?</Form.Label>
      <Form.Control name="prompt" placeholder="type here" maxLength={150} />
     </Form.Group>
     <Button type="submit" className="mt-3" disabled={isLoading}>
      Submit
     </Button>
    </Form>
    {isLoading && <Spinner className="mt-3" animation="border"></Spinner>}
    {onErr && (
     <ToastContainer position="top-end" className="me-3 mt-3">
      <Toast autohide delay={3000} bg={"danger"}>
       <Toast.Body color='white'>Something went wrong, try again.</Toast.Body>
      </Toast>
     </ToastContainer>
    )}
    {gptResp && <h5 className="h5">{gptResp}</h5>}
   </div>
  </>
 );
}

export default Chat;
