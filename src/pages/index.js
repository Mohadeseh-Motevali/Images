import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
const [url ,setUrl]=useState([])
const [urlAlbumTwo,setUrlAlbumTwo] =useState([])
  useEffect(()=>{fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
    .then((res)=>res.json())
    .then((data)=>setUrl(data))
  },[])
  useEffect(()=>{fetch("https://jsonplaceholder.typicode.com/photos?albumId=2")
    .then((res)=>res.json())
    .then((data)=>setUrlAlbumTwo(data))
  },[])
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} `}
      style={{position:'relative'}}
    >
      {url.map((i ,index)=>(<Image width={400} height={200}
       priority={index==0 ?true :false} quality={50} layout="responsive" 
       src={i.url}/>))}
       <div style={{width:"500px",height:"500px",position:"relative"}}>
        {urlAlbumTwo.map((i ,index)=>(<Image width={500} height={500}
       priority={index==0 ?true :false} quality={100} 
       src={i.url}/>))}
       </div>
    </main>
  );
}
