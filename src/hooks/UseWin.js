let win = [[0,4,8],[0,1,2],[0,3,6],[6,7,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5]];
// eslint-disable-next-line no-unused-vars

export default function UseWine (arr,valeu){
    let winno=false;
        win.forEach((el)=>{
            if(arr[el[0]] === valeu && arr[el[1]] === valeu && arr[el[2]] === valeu ){
                winno = true;
                return false;
            }else{
                
            }
        });
    return winno;
}