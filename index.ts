import 'dotenv/config'
import { runAgent } from './src/agent.ts'
import { z } from 'zod'

const userMessage = process.argv[2]

if (!userMessage) {
  console.error('Please provide a message')
  process.exit(1)
}

// Function calling
const weatherTool = {
  name: "get_weather",
  description: "Use this to get the weather. Does not need a city or location.",
  parameters: z.object({
    reasoning: z.string().describe("why did you pick this tool?")
  })
}

await runAgent({ userMessage, tools: [weatherTool] })
