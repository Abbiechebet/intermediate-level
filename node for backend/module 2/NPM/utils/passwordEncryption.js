
module.exports= { passwordGenerator: (length)=>{
    console.log(length)
    let charset = "@#$&*0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$&*0123456789abcdefghijklmnopqrstuvwxyz";
    let  password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      console.log("count of i = " , i)
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password
    }}