import { firebase, FieldValue } from '../helpers/firebase';

export default async function doesUserNameExist(username) {
  const result = await firebase.firestore().collection('users').where('username', '==', username).get();
  console.log({ result });
  return result.docs.map((user) => user.data().length > 0);
}
