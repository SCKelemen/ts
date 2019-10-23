import { assertEquals } from "https://deno.land/std@v0.11/testing/asserts.ts";
import { test } from "https://deno.land/std@v0.11/testing/mod.ts";
import { DoNothing } from "./DoNothing.ts";

test(function myTestFunction(): void {
  assertEquals(false, true);
});

test(function shouldPass(): void {
  assertEquals(1, 1);
});

test(function shouldBeSame(): void {
  assertEquals(5, DoNothing(5));
});

test(function shouldFail(): void {
  assertEquals(4, DoNothing(10));
});
