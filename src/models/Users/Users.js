const database = require('../../database/connection');
const bcrypt = require('bcrypt');

class Users {
  async CreateUserCommon(name, email, password) {
    if (name != undefined && email != undefined && password != undefined) {
      try {
        let hash = await bcrypt.hash(password, 10);
        await database.insert({ name, email, password: hash, role: 0 }).table("Users");
        return true;
      } catch (error) {
        return false;
      }
    }

    return undefined;
  }

  async CreateUserAdm(name, email, password) {
    if (name != undefined && email != undefined && password != undefined) {
      try {
        let hash = await bcrypt.hash(password, 10);
        await database.insert({ name, email, password: hash, role: 1 }).table("Users");
        return true;
      } catch (error) {
        return false;
      }
    }

    return undefined;
  }

  async FindByEmail(email) {
    try {
      let result = await database.select("*").table("Users").where({ email: email });

      if (result.length > 0) {
        return result[0];
      }
    } catch (error) {
      return false;
    }
  }

  async FindAllUsers(){
      try{
        let result = await database.select("id", "email", "name").table("Users");

        return result;
      }catch(e){
        return undefined;
      }
  }
}

module.exports = new Users();
