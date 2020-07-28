import React from 'react';
import { useRouter } from 'next/router';
import style from './[id].module.css'

export default function dyn({resData}){
    // const router = useRouter()
    // const { id } = router.query;
    const router = useRouter()
    if (router.isFallback) {
        return (
            <><p className={style.pp} style={{textAlign: 'center'}}>Loading...</p></>
        )    
    }
    return(
        <>
            <p className={style.pp} style={{textAlign: 'center'}}>Id: {resData.id}</p>
            <p className={style.pp} style={{textAlign: 'center'}}>Title: {resData.title}</p> 
        </>
    )
}

export async function getStaticPaths() {
    const paths = ['/posts/3','/posts/13','/posts/33'];
    return { paths, fallback: true };
}

export async function getStaticProps({query, params}){
    const { id } = query || params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const resData = await res.json();

    return{
        props: {
            resData,
        }
    }
}

// export async function getServerSideProps({query}){
//     const { id } = query
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     const resData = await res.json();

//     return{
//         props: {
//             resData,
//         }
//     }
// }