const statusList = ["normal", "anomaly"]

let obj = [];

for (let i = 0; i < 20; i++) {
  const ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
  // const date = new Date();
  // const status = statusList[Math.floor(Math.random()*statusList.length)];
  const count = (Math.floor(Math.random() * 1000) + 1)
  
  obj.push({ ip, count });
}

console.log(obj);