class MyPromise{
    constructor(executorfn){
        this._state = "pending"
        this._successCallBacks = []
        this._errorCallBacks = []
        executorfn(this.resolverFn.bind(this),this.rejectorFn.bind(this))
    }

    then(cb){
        this._successCallBacks.push(cb);
    }

    catch(cb){
        this._errorCallBacks.push(cb);
    }

    resolverFn(){
        this._state = 'fulfilled'
        this._successCallBacks.forEach((cb)=>{
            cb();
        })
    }

    rejectorFn(){
        this._errorCallBacks = 'fulfilled'
    }
}


function wait() 
{
    return new MyPromise((resolve,reject)=>{
        setTimeout(resolve(),3000);
    })
}

wait().then(()=>console.log("hello"))