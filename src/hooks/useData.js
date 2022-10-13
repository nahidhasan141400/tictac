// let useData = async (link)=>{
//     try {
//         let res = await fetch(link,{ 
//             mode: 'no-cors' // 'cors' by default
//         });
//         let nahid = await res.json();
//         return await nahid;
  
//     } catch (error) {
//         return'fetch data erorr on useData hooks!'
//     }
    
// }

// export default useData;

import React from 'react';

function useData(url) {
 let [loading,setLoading] = React.useState(true);
 let [data,setData] = React.useState();
 let [eror,setEror] = React.useState();

 React.useEffect(()=>{
    let get = async ()=>{
        setLoading(false);
      try {
         let res = await fetch('http://localhost:4000');
         let data2 = await res.json();
         
         setData(data2);
         setLoading(false)
         console.log(data2)
      } catch (error) {
          setEror(error);
          setLoading(false);
      }

    }
    get();
     
 },[url]);

 return {loading,data,eror};

}

export default useData