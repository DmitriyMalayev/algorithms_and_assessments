function sockMerchant(n, ar) {
  const sorted = ar.sort((a, b) => a - b)
  let numberOfPairs = 0

  for (let i = 0; i < n; i++){
    if (sorted[i] === sorted[i + 1]) {
      numberOfPairs++
      i++ 
    }
  }
  return numberOfPairs
}