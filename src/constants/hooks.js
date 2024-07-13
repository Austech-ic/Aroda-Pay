import actions from "../redux/actions"

export const getUserInfo = async () => {
    const response = await actions.getuser()
    // console.log("getuserdata", response.data)
    return response.data
}
