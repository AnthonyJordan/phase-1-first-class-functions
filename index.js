

function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    const func = () => console.log('Meh');
    return func;
}

function returnsAnAnonymousFunction(){
    return ()=> console.log("Meh");
}