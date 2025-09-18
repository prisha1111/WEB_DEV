const client=require("./client.js")



async function server(){
    const res1=await client.set("bike:1","domino");
    console.log(res1);  
    const res2 = await client.get("bike:1");
    console.log(res2);  

    const res3 = await client.set("bike:3", "bike11", "NX");
    console.log(res3);  // null
    // console.log(await client.get("bike:1"));  // Deimos
    // const res4 = await client.set("bike:1", "bike", {'XX': true});
    // console.log(res4);

    const res5 = await client.mSet([
    ["bike:1", "Deimos"],
    ["bike:2", "Ares"],
    ["bike:3", "Vanth"]
    ]);
    console.log(res5); 
    const res6 = await client.mGet(["bike:1", "bike:2", "bike:3"]);
    console.log(res6);

}

server();