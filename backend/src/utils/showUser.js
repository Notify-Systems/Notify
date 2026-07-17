function showUser(user){
    const{
        
        senha,
        refreshToken,
        ...userSafe
    } = user

    return userSafe
}

export default showUser