const roles = ["Common", "Admin", "Leader"]
export const checkRoles = (user:string) => {
  if (roles.includes(user)) {
    return true; 
  } else {
    return false
  }
}