function reverseVowels(str) {
  const regex = /[aeiou]/ig
  const vowelsArr = str.match(regex)
  if(!vowelsArr) return str
  vowelsArr.reverse()
  
  let i = 0;
  return str.replace(regex,() => vowelsArr[i++])  
}

//test cases 
console.log(reverseVowels("Hello!"))
console.log(reverseVowels("Tomatoes"))
console.log(reverseVowels("Reverse Vowels In A String"))
