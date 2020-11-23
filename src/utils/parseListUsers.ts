interface OptionsValues{
  value: number | null;
  label: string;
}

export const parseListUsers = (listUsers:any) => {
  const optionsValues:OptionsValues[] = []

    for(let index in listUsers){

    let objValue:OptionsValues = {
        value: null,
        label: "",
      }
      
      objValue.value = listUsers[index]['id'];
      objValue.label = listUsers[index]['fullName'];
      optionsValues.push(objValue)
    }

    return optionsValues;
}