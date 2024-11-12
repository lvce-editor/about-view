const MessagePort = 1
export const ModuleWorker = 2
const ReferencePort = 3
export const ModuleWorkerAndMessagePort = 8

export const Auto = () => {
  // @ts-expect-error
  if (globalThis.acceptPort) {
    return MessagePort
  }
  // @ts-expect-error
  if (globalThis.acceptReferencePort) {
    return ReferencePort
  }
  return ModuleWorkerAndMessagePort
}
