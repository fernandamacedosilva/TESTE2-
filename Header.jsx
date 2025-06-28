import Link from "next/link";
export default function Inicio (){
    return (
        <div>
            <h1>MEU SITE</h1>
            <Link href="/home">ir para home</Link>
            <Link href="/galeria">ir para galeria</Link>
            <Link href="/contato">ir para contato</Link>
        </div>
    ); 
}
