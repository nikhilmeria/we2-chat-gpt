import {FormEvent, useState} from 'react'
import Link from "next/link";
import Image from "next/image";
import chatStyle from "../styles/Chat.module.css"
import { Button, Form } from "react-bootstrap";

function Chat() {
 

 const handleSubmit= async(e)=>{
   e.preventDefault();
   console.log("Button CLicked");
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
     <Button type="submit" className="mt-3">
      Submit
     </Button>
    </Form>
   </div>
  </>
 );
}

export default Chat;
