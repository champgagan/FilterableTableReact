export function searchInAddress(text, address) {
  const { street, suite, city, zipcode } = address;
  return checkInObject({ street, suite, city, zipcode }, text);
}

export function searchInCompany(text, company) {
  return checkInObject(company, text);
}

export function checkInObject(obj, text) {
  for (let key in obj) {
    if (obj[key].toLowerCase().indexOf(text) !== -1) {
      return true;
    }
  }
  return false;
}

export function searchResult(lowercaseText, data) {
  const { name, username, email, phone, website, company, address } = data;
  return (
    checkInObject({ name, username, email, phone, website }, lowercaseText) ||
    searchInCompany(lowercaseText, company) ||
    searchInAddress(lowercaseText, address)
  );
}
