import { test, expect } from "@playwright/test";

test.describe("homepage smoke", () => {
  test("h1 contains 'Sanjeev Suresh'", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1").first()).toContainText("Sanjeev Suresh");
  });

  test("publication list has 5 entries", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#publications ul > li")).toHaveCount(5);
  });

  test("head has canonical, og:title, og:image, and schema.org Person", async ({ page }) => {
    const response = await page.goto("/");
    expect(response?.ok()).toBeTruthy();

    await expect(page.locator('head link[rel="canonical"]')).toHaveCount(1);
    await expect(page.locator('head meta[property="og:title"]')).toHaveCount(1);
    await expect(page.locator('head meta[property="og:image"]')).toHaveCount(1);

    const ld = await page.locator('script[type="application/ld+json"]').first().textContent();
    expect(ld, "schema.org JSON-LD missing").not.toBeNull();
    const data = JSON.parse(ld ?? "{}");
    expect(data["@type"]).toBe("Person");
    expect(data.name).toBe("Sanjeev Suresh");
    expect(Array.isArray(data.sameAs)).toBe(true);
    expect(data.sameAs.length).toBeGreaterThanOrEqual(2);
  });

  test("no horizontal scroll at 375px", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto("/");
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(0);
  });

  test("dark mode applies via prefers-color-scheme", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await page.goto("/");
    const bg = await page.evaluate(() => getComputedStyle(document.documentElement).backgroundColor);
    // Dark token: #0a0a0a
    expect(bg).toBe("rgb(10, 10, 10)");
  });
});
