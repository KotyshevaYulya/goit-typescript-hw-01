type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: User, update: Partial<User>) {
  return {...initialValues, ...update }
}

const OriginalUser: User = {
  name: "Yeva",
  surname: "Hryn",
  email: "1123@email.com",
  password: "123456",
}

createOrUpdateUser(OriginalUser, { 
  email: 'user@mail.com', 
  password: 'password123' 
});