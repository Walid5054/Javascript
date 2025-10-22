function cashOut(money) {
  if (money < 0 || typeof money === "string") {
    return "Invalid";
  } else if (money == 0) {
    return 0;
  } else {
    return (money * 1.75) / 100;
  }
}

function validEmail(email) {
  if (typeof email !== "string") {
    return "Invalid";
  }
  if (email.includes(" ")) {
    return false;
  }
  const invalid = [".", "-", "_", "+", "@"];
  if (invalid.includes(email[0])) {
    return false;
  }
  let last = email.slice(email.length - 4);
  if (last !== ".com") {
    return false;
  }
  if (!email.includes("@")) {
    return false;
  } else {
    return true;
  }
}
function electionResult(votes) {
  if (!Array.isArray(votes)) {
    return "Invalid";
  }
  let mango = 0;
  let banana = 0;
  for (const vote of votes) {
    // let vot = vote.toLowerCase();
    if (vote == "mango") {
      mango++;
    } else if (vote == "banana") {
      banana++;
    }
  }
  if (mango > banana) {
    return "Mango";
  } else if (mango < banana) {
    return "banana";
  } else {
    return "Draw";
  }
}

function isBestFriend(f1, f2) {
  if (
    typeof f1 !== "object" ||
    typeof f2 !== "object" ||
    f1 == null ||
    f2 == null ||
    Array.isArray(f1) ||
    Array.isArray(f2)
  ) {
    return "Invalid";
  }
  if (f1.bestFriend == f2.roll && f2.bestFriend == f1.roll) {
    return true;
  } else {
    return false;
  }
}

function calculateWatchTime(times) {
  if (!Array.isArray(times)) {
    return "Invalid";
  }
  for (const time of times) {
    if (typeof time !== "number") {
      return "Invalid";
    }
  }
  if (times.length == 0) {
    return { hour: 0, minute: 0, second: 0 };
  }
  let sum = 0;
  for (const time of times) {
    sum = sum + time;
  }
  let hour = Math.floor(sum / 3600);
  let min = Math.floor((sum % 3600) / 60);
  let sec = sum % 60;
  return { hour: hour, minute: min, second: sec };
}
