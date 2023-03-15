const jwt = require('jsonwebtoken');

function jwtTokens({id,name,email}){
  const user = {id,name,email};
  const accessToken = jwt.sign(user,'hgufhgufhvsudhfsudhufsdhiudifuhdsiuf', {expiresIn: '20s'});
  const refreshToken = jwt.sign(user,'fbfdnvsndvjunsdujvnauncasucuhn', {expiresIn: '5m'});
  return ({accessToken,refreshToken})
}

module.exports = {jwtTokens}
