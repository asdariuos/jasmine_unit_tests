import test from "@ogginger/testsuite";
import { tests } from "./mycode";
import { tests2 } from "./unitTestingExamples";

async function main() {
    await test(tests2);
}
main().catch((err) => {
    console.error(err);
});