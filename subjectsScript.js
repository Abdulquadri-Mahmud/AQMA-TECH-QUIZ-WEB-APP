// // const notify = 'Please don\'t ignore.\nOnce you click on start button make sure you don\'t minimize the quiz page.\nNote: You\'re to finish all 20 questions in 10minutes.';
// // alert(notify);

// const aside = document.querySelector('.aside');
// const openMenuBar = document.querySelector('.openMenuBar');
// const closeMenuBar = document.querySelector('.closeMenuBar');
// const lists = Array.from(document.querySelectorAll('.list'));
// const button = document.querySelector('.Button');

// openMenuBar.addEventListener('click',()=>{
//   aside.style.width = '45%';
//   closeMenuBar.style.transform = 'rotate(180deg)';
//   button.style.display = 'block';
//   closeMenuBar.style.opacity = '1';
//   lists.map(list  => {
//     list.style.display = 'block';
//   });
// });
    
// closeMenuBar.addEventListener('click',()=>{
//   aside.style.width = '0px';
//   button.style.display = 'none';
//   closeMenuBar.style.opacity = '0';
//   lists.map(list  => {
//     list.style.display = 'none';
//   })
// });

// // Quiz sections 

// //Getting the packager container for all the questions sections...
// const packager = document.querySelector('.packager');
// console.log(packager);
// // This packager container has already been set to display none in our css.....
// // Now we are setting the packager container to display block in the function created below....
// function displayBlock(){
//   packager.style.display = 'block';
// }

// // Since we have already set the packager container to display block we are also going to set the start quiz button to display none...
// //Getting the Start quiz button
// const startQuizBtn = document.querySelector('.startQuizBtn');
// console.log(startQuizBtn);

// function startQuizToDisplayNone(){
//   startQuizBtn.style.display = 'none';
// }
// // Timing sections
// const milliseconds = document.querySelector('.ms');
// const seconds = document.querySelector('.sec');
// const minutes = document.querySelector('.min');

// let milliSec = '0:0';
// let Seconds = '0:0';

// let ms = 0;
// let sec = 0;
// let min = 0;

// let Interval;

// // Adding event listener to the start quiz button
// startQuizBtn.addEventListener('click', () => {
//   displayBlock()
//   startQuizToDisplayNone()
//   Interval = setInterval(Timer,10);
// });

// function Timer(){
//   ms++;
//   if(ms < 9){
//     milliseconds.innerText = `0:${ms}`;
//   }if(ms >= 10){
//     milliseconds.innerText = ms;
//   }if(ms >= 99){
//     sec++;
//     seconds.innerText = `0:${sec}`;
//     ms = 0;
//   }if(sec > 9){
//     seconds.innerText = `0:${sec}`
//   }if(sec >= 10){
//     seconds.innerText = sec;
//   }if(sec >= 59){
//     min++;
//     minutes.innerText = min;
//     sec = 0;
//   }if(min < 9){
//     minutes.innerText = `0:${min}`
//   }if(min >= 10){
//     minutes.innerText = min;
//   }if(min === 10){
//     clearInterval(Interval)
//     minutes.innerText = 'Time Up';
//     minutes.style.fontSize = '16px';

//     seconds.innerText = 'Time Up';
//     seconds.style.fontSize = '16px';

//     milliseconds.innerText = 'Time Up';
//     milliseconds.style.fontSize = '16px';
//   }
// }
