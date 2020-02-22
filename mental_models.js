let a = 10;
let b = a;
a = 0;

// what is the value of b now?
// variable a points to a value of 10
// variable b points to a value of 10
// variable a now points to a value of 0

function duplicateSpreadsheet(original) {
    if (original.hasPendingChanges) {
      throw new Error('You need to save the file before you can duplicate it.');
    }
    let copy = {
      created: Date.now(),
      author: original.author,
      cells: original.cells,
      metadata: original.metadata,
    };
    copy.metadata.title = 'Copy of ' + original.metadata.title;
    return copy;
  }

// title of original spreadsheet changed --where?