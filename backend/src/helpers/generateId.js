/**
 * This function returns a random ID for validating an email user
 */

const generateID = () => {
  return Date.now().toString(32) + Math.random().toString(32).substring(2)
}

export default generateID