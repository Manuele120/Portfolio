function showName(Alex) {
  return(" Hello, student "+ Alex +"!");
}

let studentGreeting = setInterval(showName, 3000, "Alex");
clearInterval(studentGreeting);
