// interface OptionsValues{
//   value: string | null;
//   label: string;
// }

export const parseTeam = (listTeam:any) => {
  
  let optionUser = listTeam.map((user:any) => (
    {
      label: 'Team ' + user,
      value: user,
    }
  ))

  return optionUser;
}