export const useFormatInitials = (user:AuthUserType|null):string => {
  if (!user)
    return '';
  const firstNameInitial = user?.firstName && user?.firstName.length > 0 ? user?.firstName[0] : '';
  const lastNameInitial = user?.lastName && user?.lastName.length > 0 ? user?.lastName[0] : '';
  return (`${firstNameInitial.toUpperCase()}${lastNameInitial.toUpperCase()}`);
}

export const useFormatFullName = (user:AuthUserType):string => {
  if (!user)
    return '';
  return (`${user?.firstName} ${user?.lastName}`).trim();
}