const validUser = (user) => {
  return user.name && user.surname && user.email ?
    true :
    false
}

module.exports = {
    validUser
}