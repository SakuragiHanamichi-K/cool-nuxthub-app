import { writeFileSync } from 'fs'
import { config } from 'dotenv-esm'
import { $fetch } from 'ofetch'
config()

const NUXT_HUB_PROJECT_KEY = process.env.NUXT_HUB_PROJECT_KEY
const NUXT_HUB_API_TOKEN = process.env.NUXT_HUB_API_TOKEN

if (!NUXT_HUB_PROJECT_KEY || !NUXT_HUB_API_TOKEN) {
  console.error('请配置 NUXT_HUB_PROJECT_KEY 和 NUXT_HUB_API_TOKEN')
  process.exit(1)
}

const API_URL = `https://hub.nuxt.com/api/projects/${NUXT_HUB_PROJECT_KEY}/env`

async function syncEnv() {
  try {
    const data = await $fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${NUXT_HUB_API_TOKEN}`,
      },
    })

    const envList = data.env

    const envContent = envList.map(item => `${item.name}=${item.value}`).join('\n')

    writeFileSync('.env.local', envContent)

    console.log('✅ 成功同步 NuxtHub 环境变量到 .env.local')
  } catch (err) {
    console.error('❌ 同步失败:', err.message)
  }
}

syncEnv()
