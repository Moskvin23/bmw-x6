document.addEventListener('DOMContentLoaded',()=>{

 const featureLinkElems = document.querySelectorAll('.feature__link');
 const featureSubElems = document.querySelectorAll('.feature-sub');
 // Первый метод для раскрытия акордиона
//  for (let i = 0; i < featureLinkElems.length; i++){
//      featureLinkElems[i].addEventListener('click', ()=>{
//     featureSubElems[i].classList.toggle('hidden');
//     featureLinkElems[i].classList.toggle('feature__link_active');
//     })
//  }
// Второй метод для раскрытия акордиона
featureLinkElems.forEach((btn, index) => {
    btn.addEventListener('click', () =>{
        console.log(btn.classList.contains("feature__link_active"));

        if (btn.classList.contains('feature__link_active')){
        btn.classList.remove("feature__link_active");
        featureSubElems[index].classList.add("hidden");
    }
    
    else {
        featureSubElems.forEach((featureSubElems) => {
          featureSubElems.classList.add("hidden");
        });
        featureLinkElems.forEach((featureLinkElems) => {
          featureLinkElems.classList.remove("feature__link_active");
        });

        featureSubElems[index].classList.remove("hidden");
        btn.classList.add("feature__link_active");

    }

        
})
})
});