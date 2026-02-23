import bcrypt from "bcryptjs";
const salt = bcrypt.genSalt(10);
const password = "Kalyan@1438";
const hasing = async ()=>{
    const hashedPassword = await bcrypt.hash(password,salt);
    console.log(hashedPassword);
    const res = await bcrypt.compare(password,hashedPassword);
    if(res) console.log("Password Matched");
}
hasing();