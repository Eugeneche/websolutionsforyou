// Use a little helper function to remove trailing slashes from paths
export function removeTrailingSlash(path)
  {   return path === `/` ? path : path.replace(/\/$/, ``)}

export function localizedSlug({ isDefault, locale, slug })  {   return isDefault ? `/${slug}` : `/${locale}/${slug}`}

// From lodash:
// https://github.com/lodash/lodash/blob/750067f42d3aa5f927604ece2c6df0ff2b2e9d72/findKey.js
export function findKey(object, predicate) {
  let result
  if (object == null) {
    return result
  }
  Object.keys(object).some(key => {
    const value = object[key]
    if (predicate(value, key, object)) {
      result = key
      return true
    }
    return false
  })
  return result
}
