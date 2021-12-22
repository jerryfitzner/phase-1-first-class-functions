function receivesAFunction(spy){
    return spy();
}

receivesAFunction(function (){4+4;});






function returnsANamedFunction(){
    return function name(){

    };
}







function returnsAnAnonymousFunction(){
    return function (){
        
    };
}

