import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: "ioohzd",
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
})