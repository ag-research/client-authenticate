export const userProfile = () => {
    return {
        name: "Caleb",
        profileimg: "/static/img/mock-dp.png"
    }
}

const profile = (state = {}, action) => {
    switch(action.type){
        default:
            return userProfile();
    }
}

export default profile