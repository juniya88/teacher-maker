import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

function readSource(relativePath) {
  return readFileSync(join(root, relativePath), "utf8");
}

describe("Teacher Maker MVP content contract", () => {
  it("keeps the roadmap as a seven step 30 minute flow", () => {
    const source = readSource("src/data/roadmap.ts");

    assert.match(source, /export const roadmapSteps/);
    assert.equal((source.match(/stepNumber:/g) ?? []).length, 7);
    assert.match(source, /teacher-maker-progress-v1/);
  });

  it("ships exactly two MVP practice projects", () => {
    const source = readSource("src/data/projects.ts");

    assert.match(source, /export const projects/);
    assert.equal((source.match(/basePrompt:/g) ?? []).length, 2);
    assert.match(source, /random-picker/);
    assert.match(source, /dinner-menu/);
  });

  it("provides reusable prompts with copyable text", () => {
    const source = readSource("src/data/prompts.ts");

    assert.match(source, /export const prompts/);
    assert.ok((source.match(/prompt:/g) ?? []).length >= 6);
    assert.doesNotMatch(source, /GPT API|로그인|회원가입|서버 DB/);
  });
});
