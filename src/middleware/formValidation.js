export function privacyPolicyAccepted({ privacyPolicy }) {
  if (!privacyPolicy) {
    throw new Error("Please accept our Privacy Policy to continue.")
  }
}

export function emailIsValid({ email }) {
  const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/

  if (!regex.test(email)) {
    throw new Error("Uh oh! That is not a valid email address.")
  }
}

export function nameExists({ type, value }) {
  if (value.length < 1) {
    throw new Error(`Oops! Please include a ${type} name.`)
  }
}
