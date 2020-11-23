export const totalHours = (list:any[]) =>{
  return list.reduce((accumulator, currentValue) => accumulator + +currentValue.cost,0)
}
