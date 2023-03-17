import Image from "next/image";
import chatStyle from "../styles/Example.module.css";

function Example() {
 return (
  <>
   <div className={chatStyle.exp_container}>
    <Image
     src={"/images/gitaImage.png"}
     width={550}
     height={550}
     alt=""
     sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
    />
   </div>
  </>
 );
}

export default Example;
