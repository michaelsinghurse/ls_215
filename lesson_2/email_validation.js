// email_validation.js

function isValidEmail(string) {
  let regex = /^[A-Za-z0-9]+@[A-Za-z]+(\.[A-Za-z]+){1,}$/;
  return !!string.match(regex);
}

console.log(isValidEmail('Foo@baz.com.ph') === true);
console.log(isValidEmail('Foo@mx.baz.com.ph') === true);
console.log(isValidEmail('foo@baz.com') === true);
console.log(isValidEmail('foo@baz.ph') === true);
console.log(isValidEmail('HELLO123@baz') === false);
console.log(isValidEmail('foo.bar@baz.to') === false);
console.log(isValidEmail('foo@baz.') === false);
console.log(isValidEmail('foo_bat@baz') === false);
console.log(isValidEmail('foo@bar.a12') === false);
console.log(isValidEmail('foo_bar@baz.com') === false);
console.log(isValidEmail('foo@bar.....com') === false);
