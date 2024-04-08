import assert from "node:assert/strict";
import { test } from "node:test";

test("nothing", () => {
  assert.deepEqual(true, false);
});
