import Image from "next/image";
import Link from "next/link";
import chatStyle from "../styles/Gita.module.css";

function Gita() {
 return (
  <>
   <div className={chatStyle.gita_container}>
    <Link href="/" style={{textDecoration: "none", textAlign:"center"}}>
     <h6 className="h3">&larr; Home</h6>
    </Link>
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

export default Gita;
