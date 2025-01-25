import bcrypt from "bcrypt";

const hashedPassword = async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
};