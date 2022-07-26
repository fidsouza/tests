export function sum(num1, num2) {
  const int1 = parseInt(num1, 10)
  const int2 = parseInt(num2, 10)
  if (isNaN(int1) || isNaN(int2)) throw new Error('Please check your inputs')
  return +num1 + +num2
}
