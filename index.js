
var cars = [{car : 'BMW',type : 'auto',price: 200 ,color : 'blue',  },
{car : 'HAVAL',type : 'auto',price: 1000 ,color : 'red' },
{car : 'ASTRA',type : 'Manuelle',price: 60 ,color : 'black' },
{car : 'AUDI',type : 'Manuelle',price: 900 ,color:'black' },
{car : 'GOLF',type : 'auto',price: 90 ,color:'red' },
{car : 'IBIZA',type : 'auto',price: 70 ,color:'grye' },
{car : 'LEON',type : 'Manuelle',price: 80 ,color : 'grye' },
{car : 'FERRARI',type : 'auto',price: 800 ,color : 'red' },
{car : 'LAMBARGINI',type : 'Manuelle',price: 700 ,color : 'blue'  },
{car : 'FORD',type : 'auto',price: 90 ,color : 'black' },
] 
//************** */

var arr = [] ;
function chooseCar() {  
    for (var i =0 ; i<cars.length;i++) { 
       if (cars[i].price > 100 ) { 
        arr.push( cars[i].car  + ' ' + cars[i].type +' ' +'Color-Is'+ ' '+cars[i].color ) 
       }
    } 
    return arr 
   }
  
$('#btn1').click(function(){
   $('#p1').css('border','double') 
   $(cars.filter(e => e.price>100)); 
for(var i = 0 ; i < arr.length; i++){
   $('#p1').append('<p>' + arr[i] + '<p>')
   
}
}  ) 

var arr1 = [] ;
function chooseCar1() {  
   
    for (var i =0 ; i<cars.length;i++) { 
       if (cars[i].price < 100 ) { 
        arr1.push( cars[i].car  + ' ' + cars[i].type +' ' +'Color-Is'+ ' '+cars[i].color) 
       }
    } 
    return arr1 
   }

$('#btn2').click(function(){
   $('#p2').css('border','double') 
   $(cars.filter(e => e.price<100)); 
for(var i = 0 ; i < arr1.length; i++){
   $('#p2').append('<p>' + arr1[i] + '<p>')
}
   
}  ) 
//************ */

var arr2 = [] 
function oneCar (){ 
   for (var i=0;i<cars.length;i++){ 
      if(cars[i].car === $('#input1').val()) { 
         arr2.push( cars[i].price )
         console.log(arr2)
      }
   }
   return arr2 
} 
$('#btn3').click(function(){
   $('#p3').css('border','double') 
   $('#p3').empty() 
   oneCar()
   console.log(arr2)
   for(var i = 0 ; i < arr2.length; i++){
      $('#p3').append('<p>' + arr2[i] + '<p>')
      
   }
   }); 
   
   $('#btn8').click(function(){
      $('#p5').css('border','double') 
      $('#p5').empty() 
      oneCar()
     
        console.log(arr2[0]);
        $('#p5').append('<p>' + arr2[0] * Number($('#input2').val()) + '<p>')
     
      });
//**************************************** */

   $("#btn4").click(function(){
      $("#p1").empty();
      $("#p2").empty() 
    });
    
 //********************************************* */

    var anycar = [{car:'golf6',price:60},{car:'polo',price:50},{car:'clio',price:50},{car:'sembol',price:50}] 
    var value = optionsCar()
      function optionsCar()  { 
         return anycar[Math.floor(Math.random()*4)] 
      }
//*********************************************** */
      $('#btn9').click(function(){
         $('#p10').css('border','double') 
         console.log(value)
         $('#p10').append('<p> Your car is : ' + value['car'] + ' ' + value['price'])
      })
      
     $('#btn7').click(function(){
      $('#p4').css('border','double') 
          $('#p4').append('<p>' + cars.map(e => e.car) + '<p>')
       }
      );

    
