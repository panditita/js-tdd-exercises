
function findByName(persons, name) {
    var savePeople = [];
    for (var i = 0; i < persons.length; i++){
        if (persons[i].firstName === name || persons[i].lastName === name) {
            savePeople.push(persons[i]);
        }
        
    }
    return savePeople
};


function findByStartWithLetter(persons, letter) {
    var savePeople = [];
    for (var i = 0; i < persons.length; i++){
        if (persons[i].lastName.toLowerCase().startsWith(letter.toLowerCase())) {
            savePeople.push(persons[i]);
        }
        
    }
    return savePeople
};


function findWriterStatistics(persons, criteria) {
    console.dir(criteria)
    var savePeople = [];
    for (var i = 0; i < persons.length; i++){
        if (persons[i].age > criteria.age && persons[i].alive === criteria.alive) {
            savePeople.push(persons[i]);
        }
        
    }
    return savePeople
};


test('function should retrieve writers with first and last name that matches only once', function () {
  var persons = [
    {
      firstName: "Virginia",
      lastName: "Woolf",
      occupation: "writer",
      age: 59,
      alive: false
    },
    {
      firstName: "Smith",
      lastName: "Smith",
      occupation: "writer",
      age: 41,
      alive: true
    },
    {
      firstName: "Jane",
      lastName: "Austen",
      occupation: "writer",
      age: 41,
      alive: false
    },
    {
      firstName: "bell",
      lastName: "hooks",
      occupation: "writer",
      age: 64,
      alive: true
    },
  ];

  var result = findByName(persons, "Smith");

  expect(result).toEqual([
    {
      firstName: "Smith",
      lastName: "Smith",
      occupation: "writer",
      age: 41,
      alive: true
    }])
});

test('function should retrieve writers with first or last name that matches', function () {
  var persons = [
    {
      firstName: "Virginia",
      lastName: "Woolf",
      occupation: "writer",
      age: 59,
      alive: false
    },
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 41,
      alive: true
    },
    {
      firstName: "Jane",
      lastName: "Austen",
      occupation: "writer",
      age: 41,
      alive: false
    },
    {
      firstName: "bell",
      lastName: "hooks",
      occupation: "writer",
      age: 64,
      alive: true
    },
  ];

  var result = findByName(persons, "Smith");

  expect(result).toEqual([
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 41,
      alive: true
    }])
});


test('function should retrieve writers that start with W', function () {
  var persons = [
    {
      firstName: "Virginia",
      lastName: "Woolf",
      occupation: "writer",
      age: 59,
      alive: false
    },
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 41,
      alive: true
    },
    {
      firstName: "Jane",
      lastName: "Austen",
      occupation: "writer",
      age: 41,
      alive: false
    },
    {
      firstName: "bell",
      lastName: "hooks",
      occupation: "writer",
      age: 64,
      alive: true
    },
  ];

  var result = findByStartWithLetter(persons, "W");

  expect(result).toEqual([
      {
      firstName: "Virginia",
      lastName: "Woolf",
      occupation: "writer",
      age: 59,
      alive: false
    }])
});


test('function should retrieve writers over 60 and alive', function () {
  var persons = [
    {
      firstName: "Virginia",
      lastName: "Woolf",
      occupation: "writer",
      age: 60,
      alive: true
    },
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 41,
      alive: true
    },
    {
      firstName: "Jane",
      lastName: "Austen",
      occupation: "writer",
      age: 41,
      alive: false
    },
    {
      firstName: "bell",
      lastName: "hooks",
      occupation: "writer",
      age: 64,
      alive: true
    },
  ];

  var criteria = {
      age:60,
      alive: true
  }
  var result = findWriterStatistics(persons, criteria);

  expect(result).toEqual([
   {
      firstName: "bell",
      lastName: "hooks",
      occupation: "writer",
      age: 64,
      alive: true
    }])


});