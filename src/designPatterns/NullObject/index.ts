import { UserShape } from "./types";

class User implements UserShape {
  name;
  id;

  constructor(id: UserShape["id"], name: UserShape["name"]) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.name === "Bob";
  }
}

/**
 * Instead of a new class for null state I believe that we can have default values in the constructor
 * itself, or create a new user with these defaults, but anyway point is the principle of null state handling
 * in one place.
 */
class NullUser extends User {
  constructor() {
    // Since we extends User we can call super for User's constructor function
    super(-1, "Guest");
  }

  hasAccess() {
    return false;
  }
}

const users = [new User(1, "Bob"), new User(2, "Jimmy")];

function getUser(id: UserShape["id"]) {
  const user = users.find((user) => user.id === id);

  if (user) return user;

  return new NullUser();
}

function printUser(id: UserShape["id"]) {
  const user = getUser(id);

  /**
   * Whenever we use the user object in this manner, we would need to add non null
   * checks every time since Id can be random.
   *
   * Instead we create a dummy guest user in case of incorrect ID and return that.
   * And handle that in  get User itself.
   */
  // if (!user) {
  //   console.log("User Does not exist");
  //   return;
  // }

  /**
   * Print user's name
   */
  console.log("Hello " + user.name);

  /**
   * Verify User access and print it.
   * Ideally if we think about Solid Principality then this should be in separate function
   */
  if (user.hasAccess()) {
    console.log("You have access");
  } else {
    console.log("You are not allowed here");
  }
}

printUser(1);
printUser(2);
printUser(3);
