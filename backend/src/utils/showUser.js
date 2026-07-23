function showUser(user){
    const{
        
        password,
        refreshToken,
        ...userSafe
    } = user

    return userSafe
}

export default showUser