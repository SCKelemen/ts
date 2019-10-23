import { assertEquals } from "https://deno.land/std@v0.11/testing/asserts.ts";
import { test } from "https://deno.land/std@v0.11/testing/mod.ts";
import { DoNothing } from "./DoNothing.ts";

test(function myTestFunction() {
  assertEquals(false, true);
});

test(function shouldPass() {
  assertEquals(1, 1);
});

test(function shouldBeSame(){
	assertEquals(5, DoNothing(5));
});


test(function shouldFail(){
	assertEquals(4, DoNothing(10));
});
