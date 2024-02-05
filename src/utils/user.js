import { argv } from 'process';

const getUserName = () => {
  const userArgs = argv.slice(2);
  const userNameArg = userArgs.find((el) => el.startsWith('--username'));
  console.log(userNameArg)
  return userNameArg?.slice(11);

}

const userName = getUserName();

export { userName };