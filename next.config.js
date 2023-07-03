/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BUILD_ENV: process.env.BUILD_ENV,
        BASE_URL: process.env.BASE_URL,
    },
    publicRuntimeConfig: {
        BUILD_ENV: process.env.BUILD_ENV,
        BASE_URL: process.env.BASE_URL,
    },
}

module.exports = nextConfig
