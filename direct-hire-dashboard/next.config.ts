import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
	// Ensure Turbopack uses the project folder as the root when multiple lockfiles exist
	// Note: `turbopack` is a top-level key in Next config
	// See: https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory
	// We intentionally use __dirname so the root points to this nested project.
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore-next-line
	turbopack: {
		root: path.resolve(__dirname),
	},
}

export default nextConfig
