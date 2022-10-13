// **********  this intbot return the best trun index for bot ********* //

export default function intbot (arr){

// -------- find out empty box ------- //
// ======== drop contein empty box index free for trun ======= //

    let drop = arr.map((el , i)=>{
                        if(el === false){
                        return i;
                        }else{
                        return false;
                        }
                    }).filter((el)=>{
                        return !el === false || el === 0;
                    });

// -------- win trun -------- //

    if(
            drop.includes(0) && 
            (
                (arr[1] === 'x' && arr[2] === 'x')||
                (arr[3] === 'x' && arr[6] === 'x')||
                (arr[4] === 'x' && arr[8] === 'x')
            )
      ){
        return 0;
    }
    else if(
        drop.includes(1) && 
        (
            (arr[0] === 'x' && arr[2] === 'x')||
            (arr[4] === 'x' && arr[7] === 'x')
        )
    ){
        return 1;
    }
    else if(
        drop.includes(2) && 
        (
            (arr[0] === 'x' && arr[1] === 'x')||
            (arr[5] === 'x' && arr[8] === 'x') ||
            (arr[4] === 'x' && arr[6] === 'x')
        )
    ){
        return 2;
    }
    else if(
        drop.includes(3) && 
        (
            (arr[0] === 'x' && arr[6] === 'x')||
            (arr[4] === 'x' && arr[5] === 'x')
        )
    ){
        return 3;
    }
    else if(
        drop.includes(4) && 
        (
            (arr[1] === 'x' && arr[7] === 'x')||
            (arr[3] === 'x' && arr[5] === 'x') ||
            (arr[2] === 'x' && arr[6] === 'x') ||
            (arr[0] === 'x' && arr[8] === 'x') 
        )
    ){
        return 4;
    }
    else if(
        drop.includes(5) && 
        (
            (arr[2] === 'x' && arr[8] === 'x')||
            (arr[4] === 'x' && arr[3] === 'x')
        )
    ){
        return 5;
    }
    else if(
        drop.includes(6) && 
        (
            (arr[0] === 'x' && arr[3] === 'x')||
            (arr[8] === 'x' && arr[7] === 'x') ||
            (arr[4] === 'x' && arr[2] === 'x')
        )
    ){
        return 6;
    }
    else if(
        drop.includes(7) && 
        (
            (arr[6] === 'x' && arr[8] === 'x')||
            (arr[4] === 'x' && arr[1] === 'x')
        )
    ){
        return 7;
    }
    else if(
        drop.includes(8) && 
        (
            (arr[5] === 'x' && arr[2] === 'x')||
            (arr[4] === 'x' && arr[0] === 'x') ||
            (arr[6] === 'x' && arr[7] === 'x')
        )
    ){
        return 8;
    }

// ------- defance ------- //

     else if(
        drop.includes(4)
             &&((arr[0] === 'o' && arr[8] === 'o') ||
             (arr[3] === 'o' && arr[5] === 'o') ||
             (arr[1] === 'o' && arr[7] === 'o') ||
             (arr[2] === 'o' && arr[6] === 'o') )
    ){
        
              return 4;
    }else if(
        drop.includes(0)
             &&((arr[4] === 'o' && arr[8] === 'o') ||
             (arr[3] === 'o' && arr[6] === 'o') ||
             (arr[1] === 'o' && arr[2] === 'o') 
             )
             
    ){
        
              return 0;
    }
    else if(
        drop.includes(1)
        &&((arr[0] === 'o' && arr[2] === 'o') ||
        (arr[4] === 'o' && arr[7] === 'o') )
            ){
            return 1;
   }
   else if(
       drop.includes(2) &&
    ((arr[0] === 'o' && arr[1] === 'o') ||
    (arr[4] === 'o' && arr[6] === 'o') ||
    (arr[5] === 'o' && arr[8] === 'o') )
        ){
        return 2;
 }

        else if(
            drop.includes(3)
            &&((arr[0] === 'o' && arr[6] === 'o') ||
            (arr[4] === 'o' && arr[5] === 'o')||
            (arr[0] === 'o'&& drop.length === 8)) 
        ){
        return 3;
        }
        else if(
            drop.includes(5)
            &&((arr[3] === 'o' && arr[4] === 'o') ||
            (arr[2] === 'o' && arr[8] === 'o') ||
            (arr[2] && drop.length === 8) ||
            (arr[8] && drop.length === 8))
   ){
       return 5;
   }
   else if(
       drop.includes(6)
            &&((arr[7] === 'o' && arr[8] === 'o') ||
            (arr[4] === 'o' && arr[2] === 'o'))
        ){
        return 6;
        }else if(
            drop.includes(7)
            &&((arr[6] === 'o' && arr[8] === 'o') ||
            (arr[4] === 'o' && arr[1] === 'o') ||
            (arr[6] && drop.length === 8))
   ){
       return 7;
   }else if(
       drop.includes(8)
            &&((arr[0] === 'o' && arr[4] === 'o') ||
            (arr[6] === 'o' && arr[7] === 'o') ||
            (arr[2] === 'o' && arr[5] === 'o'))
        ){
        return 8;
        }

   
// -------- Random -------- //
   
    
   else {
            let settarget = drop[Math.round(Math.random()*(drop.length - 1))]
            return settarget;
    }
    
}