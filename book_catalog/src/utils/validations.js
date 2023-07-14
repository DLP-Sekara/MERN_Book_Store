
 function checkValidation(dataItem) {
  const idRegEx = /^[0-9]{1,5}$/;
  const nameRegEx = /^[A-z ]{5,20}$/;
  const authorRegEx = /^[A-z ]{5,20}$/;
  const priceRegEx = /^[0-9]{2,5}$/;
  let fieldStatus = false;

  //book id
  if (dataItem.book_ID !== undefined && idRegEx.test(dataItem.book_ID)) {
    fieldStatus = true;
  } else {
    fieldStatus = false;
    alert("check book_ID field....!");
    return;
  }

  //book author
  if (dataItem.book_name !== undefined && nameRegEx.test(dataItem.book_name)) {
    fieldStatus = true;
  } else {
    fieldStatus = false;
    alert("check book_name field....!");
    return;
  }

  //book price
 if (dataItem.book_author !== undefined && authorRegEx.test(dataItem.book_author)) {
   fieldStatus = true;
 } else {
   fieldStatus = false;
   alert("check book_author field....!");
   return;
 }

  //book name
  if (
    dataItem.book_price !== undefined && priceRegEx.test(dataItem.book_price)
  ) {
    fieldStatus = true;
  } else {
    fieldStatus = false;
    alert("check book_price field....!");
    return;
  }

  return fieldStatus;
}
module.exports = checkValidation;