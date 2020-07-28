import React from 'react';
import Router, { useRouter } from 'next/router';

export default function Demo() {
    console.log("----------->", useRouter());
    const router = useRouter()
    if(useRouter().pathname == '/demo'){
        return(
            <>
            <h1>PAGE NOT FOUND</h1>
            </>
        )
    }
    return(
        <>
        <h1>Demo demo</h1>
        </>
    )
}

// export default class Demo extends Component {
//     render(){
//         return(
//             <>
//             <h1>demo demo</h1>
//             </>
//         )
//     }
// }

//  const About = () =>
// export default About;