import React, {useState} from 'react';
import { Link } from "next/link";

export default function index({posts}){
    const [data, setData] = useState(posts);
    // fetch('https://jsonplaceholder.typicode.com/posts', 
    //     {method: 'get', headers: {'Content-Type':'application/json'}
    // }).then((res)=>  res.json()).then(resData => {console.log("resData===========>", resData); setData(resData)})
    return(
        <>
            <h1 style={{textAlign: 'center'}}>POSTS INDEX</h1>
            <div>
                {
                    data.map((val)=>(
                        <>
                            <a href={"/posts/"+val['id']}><h3 style={{textAlign: 'left'}}>{val['title']}</h3></a>
                            <p style={{textAlign: 'left'}}>{val['body']}</p>
                        </>
                        )
                    )
                }
            </div>
        </>
    )
}

export async function getStaticProps(){

    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{method: 'get', headers: {'Content-Type':'application/json'}})
    const posts = await res.json();
    // console.log("posts========>", posts);

    return{
        props: {
            posts,
        }
    }
}

// export async function getServerSideProps(){

//     const res = await fetch('https://jsonplaceholder.typicode.com/posts',{method: 'get', headers: {'Content-Type':'application/json'}})
//     const posts = await res.json();

//     return{
//         props: {
//             posts,
//         }
//     }
// }