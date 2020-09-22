
let times = []
for(let i = 2; i < process.argv.length; i++)
{ 
  times[i-2] = Number(process.argv[i]);
}


let result = times.filter(x => !isNaN(x) && x >= 0).sort((a,b) => a - b).map(x => x * 1000);


let delay = 0;
for(let timeOut of result){
  setTimeout(() => {
   console.log(timeOut/1000 + ' seconds');
  }, timeOut + delay);
  delay += 50;

}