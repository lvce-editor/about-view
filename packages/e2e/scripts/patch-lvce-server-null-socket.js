import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const file = join(import.meta.dirname, '..', '..', '..', 'node_modules', '@lvce-editor', 'server', 'src', 'server.js')

const patches = [
  {
    before: `  if (!hasErrorListener.has(res.socket)) {
    res.socket.on('error', handleSocketError)
    hasErrorListener.add(res.socket)
  }`,
    after: `  if (res.socket && !hasErrorListener.has(res.socket)) {
    res.socket.on('error', handleSocketError)
    hasErrorListener.add(res.socket)
  }`,
    name: 'static response socket handler',
  },
  {
    before: `const sendHandleSharedProcess = async (request, socket, method, ...params) => {
  request.on('error', handleRequestError)
  socket.on('error', handleSocketUpgradeError)`,
    after: `const sendHandleSharedProcess = async (request, socket, method, ...params) => {
  request.on('error', handleRequestError)
  if (!socket) {
    return
  }
  socket.on('error', handleSocketUpgradeError)`,
    name: 'shared process socket handler',
  },
]

let content = await readFile(file, 'utf8')

for (const patch of patches) {
  if (content.includes(patch.after)) {
    continue
  }
  if (!content.includes(patch.before)) {
    throw new Error(`Could not patch @lvce-editor/server ${patch.name}`)
  }
  content = content.replace(patch.before, patch.after)
}

await writeFile(file, content)
