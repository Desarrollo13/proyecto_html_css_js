(function(){
    const sladers=[...document.querySelectorAll('.testimony__body')];
    const buttonNext=document.querySelector('#next');
    const buttonBefore=document.querySelector('#before');
    let value;
    // voy crear un evento para el boton next
    buttonNext.addEventListener('click',()=>{
        changePosition(1);

    });
    buttonBefore.addEventListener('click',()=>{
        changePosition(-1);
    });
    changePosition= (add)=>{
       const currentTestimony=document.querySelector('.testimony__body--show').dataset.id;
       value=Number(currentTestimony);
       value+=add;
       sladers[Number(currentTestimony)-1].classList.remove('testimony__body--show')
       if(value===sladers.length + 1 || value=== 0){
           value = value === 0 ? sladers.length : 1;

       }
       sladers[value-1].classList.add('testimony__body--show')

    }

    

})();