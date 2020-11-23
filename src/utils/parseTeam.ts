// interface OptionsValues{
//   value: string | null;
//   label: string;
// }

export const parseTeam = (listTeam:any, label?:string, value?:string) => {
  
  let optionUser = listTeam.map((user:any) => (
    {
      label: `${label ? label : ''} ${user}`,
      value:`${value ? user.value : user }`  ,
    }
  ))

  return optionUser;
}