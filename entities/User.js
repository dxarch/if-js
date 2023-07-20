class User {
  constructor({ firstName, lastName }) {
    if (firstName === undefined || lastName === undefined) {
      throw new Error('Required properties are missing!');
    }

    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default User;
