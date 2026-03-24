import { test, expect } from "@playwright/test";

// // Basic API Testing with Playwright - Learning Script
// // This script demonstrates fundamental API testing concepts

// test("Basic API Request - Create a New Deck", async ({ request }) => {
//   // Make a GET request to create a new deck
//   const response = await request.get("api/deck/new");

//   // Check that we got a successful response (status 200)
//   expect(response.status()).toBe(200);

//   // Parse the JSON response
//   const data = await response.json();
//   console.log("Response:", data);

//   // Verify the response contains expected properties
//   expect(data.deck_id).toBeDefined();
//   expect(data.shuffled).toBeDefined();
//   expect(data.remaining).toBeDefined();
// });


test('can send api', async ({ request }) => {
  const newIssue = await request.post(`https://dummyjson.com/posts/add`, {
    data: {
        title: 'Hi',
        userId: 5,
        /* other post data */
    }
  });
  expect(newIssue.ok()).toBeTruthy();
  console.log(await newIssue.json());

//   const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
//   expect(issues.ok()).toBeTruthy();
//   expect(await issues.json()).toContainEqual(expect.objectContaining({
//     title: '[Bug] report 1',
//     body: 'Bug description'
//   }));
});