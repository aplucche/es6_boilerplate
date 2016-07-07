export const EXAMPLE_ACTION = 'EXAMPLE_ACTION'

export function exampleAction(exampleWord) {
  return { type: EXAMPLE_ACTION, exampleWord }
}