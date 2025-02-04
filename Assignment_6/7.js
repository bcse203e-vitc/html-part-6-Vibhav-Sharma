let n=7;
let series=[0,1];
for (let i=2; i<n; i++){
    series.push(series[i-1]+series[i-2]);
}

for (let i=0; i<n; i++){
    console.log(series[i]);
}
