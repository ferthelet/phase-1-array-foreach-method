oppressedWorkers = [
    "Dopey",
    "Sneezy",
    "Happy",
    "Angry",
    "Doc",
    "Lemonjello",
    "Sleepy"
  ];

  oppressedWorkers.forEach(opressedWorker =>
    console.log(opressedWorker + ' wants to form a union!'));

function sumArray(array) {
    let total = 0;

    array.forEach(number => total += number);
    return total;
}

console.log(sumArray([1, 2, 3]));

// used to mutate values durectly
function addFullNameToEmployees(empCollection){
    empCollection.forEach(e => e.fullName = `${e.firstName} ${e.familyName}`)
    return empCollection;
  }
  
  console.log(addFullNameToEmployees([
    {firstName: "Byron", familyName: "Karbitii"},
    {firstName: "Luca", familyName: "Tuexedensis"}
  ]))

