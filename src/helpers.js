import { transactionExplorerUrl, blockExplorerUrl } from './constants'

export const formatTransaction = function formatTransaction(x) {
  const totalOutput = x.out.reduce((acc, i) => {
    return acc + (i.value || 0)
  }, 0)

  const { hash } = x
  return {
    hash,
    value: totalOutput,
    href: transactionExplorerUrl + hash
  }
}

export const formatBlock = function formatBlock(x) {
  const { totalBTCSent, height, hash, time } = x
  return {
    totalBTCSent,
    height,
    hash,
    time,
    href: blockExplorerUrl + hash
  }

}

export const calculateTransactionShade = function calculateTransactionShade(x) {
  // calculate shade integer between 0 and 5
  const value = x / (10 ** 8)
  if (value > 10) return 0
  if (value > 1) return 1
  if (value > .1) return 2
  if (value > .01) return 3
  if (value > .001) return 4
  return 5
}


export const calculateBlockShade = function calculateBlockShade(x) {
  // calculate shade integer between 0 and 4
  if (x > 15000) return 0
  if (x > 12500) return 1
  if (x > 7500) return 2
  if (x > 5000) return 3
  return 4
}

export const parseBlockDate = function parseBlockDate(x) {
  const date = new Date(Date(x));
  return `${date.getUTCFullYear()}-${(`0${date.getUTCMonth() + 1}`).slice(-2)}-${(`0${date.getUTCDate()}`).slice(-2)} ${(`0${date.getUTCHours()}`).slice(-2)}:${(`0${date.getUTCMinutes()}`).slice(-2)}`
}