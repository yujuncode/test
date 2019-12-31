let arr=[]
for(let i=1;i<=100;i++){
    arr.push(i);
}
function yuesefu(m,n) {
    let s=0,z=1;
    for(let i=2;i<=n;i++){
        
        // for(;;){
            
        // }
        s = (s+m)%i;
        console.log(s);
        z++;

    }
    console.log(s);
    console.log('z==='+z);
    console.log('the winner is '+s);
}
//yuesefu(3,41);

function yuesefu2(m,n) {
    if(n==1){
        return 0;
    }else{
        // console.log(n);
        return (yuesefu2(m,n-1)+m)%n;
    }
}
console.log(yuesefu2(3,41));

console.log('test');
