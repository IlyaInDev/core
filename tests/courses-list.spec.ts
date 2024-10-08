import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("/");
  await page.getByPlaceholder("название").click();
  await page.getByPlaceholder("название").fill("Test course");
  await page.getByPlaceholder("описание").click();
  await page.getByPlaceholder("описание").fill("Test description");
  await page.getByRole("button", { name: "Добавить" }).click();
  await page.getByText("Test courseTest description").click();
  await expect(
    page.getByText("Test courseTest descriptionУдалить"),
  ).toBeVisible();
  await page.getByRole("button", { name: "Удалить" }).click();
  await expect(
    page.getByText("Test courseTest descriptionУдалить"),
  ).not.toBeVisible();
});
