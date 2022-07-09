let re = /\S+@\S+\.\S+/;

export const validEmail = (email: string) => re.test(email);
