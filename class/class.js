class t{
    constructor(p){
        this.p=p;
    }
    f(){
        let a=1,b=2;
        let c=f2(a,b);
        console.log(c);
    }
    static f1(a,b){
        return a+b;
    }

}
function f2(a,b){
    return a+b;
}