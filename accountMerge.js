const accounts = require("./accounts.json");

function accountMerge(accounts) {
  let result = [];
  // PersonMap has a key value pair of key:"name" value:["emails","accounts"]
  let personMap = new Map();
  const personIterator = personMap[Symbol.iterator]();

  // iterates through accounts.json and appends emails and accounts to a name in personMap
  for (let i = 0; i < accounts.length; i++) {
    for (let j = 0; j < accounts[i].emails.length; j++) {
      let currEmail = accounts[i].emails[j];
      let currName = accounts[i].name;
      let currAccount = accounts[i].application;

      if (!personMap.has(currName)) {
        personMap.set(currName, [[currEmail], [currAccount]]);
      } else {
        let currPerson = personMap.get(currName);
        personMap.set(currName, [
          [...currPerson[0], currEmail],
          [...currPerson[1], currAccount],
        ]);
      }
    }
  }

  // Removes duplicates in emails and accounts in personMap and pushes the unique and emails with their coresponding name to the result array
  for (const item of personIterator) {
    let uniqueEmails = item[1][0].filter((c, index) => {
      return item[1][0].indexOf(c) === index;
    });

    let uniqueApplications = item[1][1].filter((c, index) => {
      return item[1][1].indexOf(c) === index;
    });
    result.push({
      applications: uniqueApplications,
      emails: uniqueEmails,
      name: item[0],
    });
  }
  console.log(result);
}

accountMerge(accounts);
