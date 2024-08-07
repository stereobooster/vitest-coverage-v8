// comment

export function comp(a, b) {
  if (a === b) {
    return 0
  } else if (a > b) {
    return 1
  } else {
    return -1
  }
}

comp(1, 1)
comp(1, 0)
comp(0, 1)
