import { describe, test } from 'vitest'
import { 
  setup, 
  $fetch, 
  fetch,
  url, 
} from '@nuxt/test-utils-edge'



describe('Testing landing page /', async () => {
  await setup({
    // test context options
  })

  test('test HTML', async () => {
    // Get the HTML of a server-rendered page.
    const html = await $fetch('/');
    console.log("HTML ===== ", html)
  })

  test('test response', async () => {
    // Get the response of a server redered page
    const res = await fetch('/');
    const { body, headers } = res;
    console.log("res ===== ", res)
    console.log("headers ===== ", headers)
    console.log("body ===== ", body)
  })

  test('test page path', async () => {
    // Get the full URL for a given page (including the port the test server is running on.)
    const pageUrl = url('/page');
    console.log("pageUrl ===== ", pageUrl)
  })
})