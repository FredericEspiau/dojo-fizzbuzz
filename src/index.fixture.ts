import { Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";

interface MyWorld {
  result: string;
}

const fizzBuzz = (input: number) => {
  return "1";
};

When("the number is {int}", function (this: MyWorld, num: number) {
  this.result = fizzBuzz(num);
});

Then("the result is {string}", function (this: MyWorld, expected: string) {
  assert.deepEqual(this.result, expected);
});
