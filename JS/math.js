
function randomColor(){
    let color = [];
    for (let i = 0 ; i<3 ; i++){
        color.push(Math.floor(Math.random()*256));
    }
    return 'rgb('+ color.join(', ')+ ')';
}

const mycard = document.getElementById('card1');
mycard.addEventListener('mouseover',function(){
    mycard.style.backgroundColor = randomColor();
})


function getElemenValueById(firstInput, secondInput) {

    const firstInputString = document.getElementById(firstInput).value;
    const firstInputValue = parseFloat(firstInputString);

    const secondInputString = document.getElementById(secondInput).value;
    const secondInpuValue = parseFloat(secondInputString);

    return firstInputValue * secondInpuValue;



}




document.getElementById('triangle').addEventListener('click', function () {
    
    const productOfInputs = getElemenValueById('triangle-first-input', 'triangle-second-input')
    if(isNaN(productOfInputs)){
        alert("Enter a valid input")
        return;
    }
    if(productOfInputs < 0 ){
        alert("enter non negative numbers")
        return;
    }

   



    const areaValue = 0.5 * productOfInputs;

   

    const areaCollection = document.getElementById('area-collection');
    areaCollection.innerHTML += `
    <div id="" class="d-flex justify-content-between fw-light mb-2">

   <p>Triangle</p>
                        <p><span id="triangle-area"></span><span>cm<span><sup>2</sup></span></span></p>
                        <button class="btn btn-primary ">Convert</button>
                        

    </div>
   
   
   
   `;

    document.getElementById('triangle-area').innerText = areaValue;





})


document.getElementById('rhombus').addEventListener('click', function () {


    const productOfInputs = getElemenValueById('rhombus-first-input', 'rhombus-second-input')
    const areaValue = 0.5 * productOfInputs;
    const areaCollection = document.getElementById('area-collection');
    areaCollection.innerHTML +=
        ` <div id="" class="d-flex justify-content-between fw-light mb-2">
    
    <p>Rhombus</p>
<p><span id="rhombus-area"></span><span>cm<span><sup>2</sup></span></span></p>
<button class="btn btn-primary">Convert</button>

    </div>

    
    
    `
    document.getElementById('rhombus-area').innerText = areaValue;


})

document.getElementById('rectangle').addEventListener('click', function () {

    const productOfInputs = getElemenValueById('rectangle-first-input', 'rectangle-second-input')
    const areaValue =  productOfInputs;
    const areaCollection = document.getElementById('area-collection');
    areaCollection.innerHTML +=
        `
         <div id="" class="d-flex justify-content-between fw-light mb-2">
    <p>Rectangle</p>
<p><span id="rectangle-area"></span><span>cm<span><sup>2</sup></span></span></p>
<button class="btn btn-primary">Convert</button>
</div>
    
    `

    document.getElementById('rectangle-area').innerText = areaValue;

})




document.getElementById('parallelogram').addEventListener('click', function () {
    
    const productOfInputs = getElemenValueById('parallelogram-first-input', 'parallelogram-second-input')
    const areaValue = productOfInputs;
    const areaCollection = document.getElementById('area-collection');

    areaCollection.innerHTML += `
     <div id="" class="d-flex justify-content-between fw-light mb-2">
    
    
    <p>Parallelogram</p>
    <p><span id="parallelogram-area"></span><span>cm<span><sup>2</sup></span></span></p>
    <button class="btn btn-primary">Convert</button>
    </div>
    
    `
    document.getElementById('parallelogram-area').innerText = areaValue;
})

document.getElementById('ellipse').addEventListener('click', function () {
    
    const productOfInputs = getElemenValueById('ellipse-first-input', 'ellipse-second-input')
    const areaValue = 3.1416 * productOfInputs;
    const areaCollection = document.getElementById('area-collection');

    areaCollection.innerHTML += `
     <div id="" class="d-flex justify-content-between fw-light mb-2">
    
    
    <p>Ellipse</p>
    <p><span id="ellipse-area"></span><span>cm<span><sup>2</sup></span></span></p>
    <button class="btn btn-primary">Convert</button>
    </div>
    
    
    `
    document.getElementById('ellipse-area').innerText = areaValue;
})

document.getElementById('pentagon').addEventListener('click', function () {

    
    
    const productOfInputs = getElemenValueById('pentagon-first-input', 'pentagon-second-input')
    const areaValue = 0.5 * productOfInputs;
    const areaCollection = document.getElementById('area-collection');

    areaCollection.innerHTML+=
     `
      <div id="" class="d-flex justify-content-between fw-light mb-2">
     
     
     <p>Pentagon</p>
    <p><span id="pentagon-area"></span><span>cm<span><sup>2</sup></span></span></p>
    <button class="btn btn-primary">Convert</button>

    </div>
    
    `
    document.getElementById('pentagon-area').innerText = areaValue;
})