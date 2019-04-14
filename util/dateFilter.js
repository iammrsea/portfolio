export const filterDate = newDate => {
  if (newDate.split("/").length === 3) {
    let array = new Date(newDate).toString().split(" ");
    let myDate = "";
    let date = "" + array[2];
    let month = array[1];
    let year = array[3];

    if (date.endsWith(1)) {
      myDate += date + "st ";
    } else if (date.endsWith(2)) {
      myDate += date + "nd ";
    } else if (date.endsWith(3)) {
      myDate += date + "rd ";
    } else {
      myDate += date + "th ";
    }
    switch (month) {
      case "Jan": {
        myDate += "January, ";
        break;
      }
      case "Feb": {
        myDate += "February, ";
        break;
      }
      case "Mar": {
        myDate += "March, ";
        break;
      }
      case "Apr": {
        myDate += "April, ";
        break;
      }
      case "May": {
        myDate += "May, ";
        break;
      }
      case "Jun": {
        myDate += "June, ";
        break;
      }
      case "July": {
        myDate += "July, ";
        break;
      }
      case "Aug": {
        myDate += "August, ";
        break;
      }
      case "Sep": {
        myDate += "September, ";
        break;
      }
      case "Oct": {
        myDate += "October, ";
        break;
      }
      case "Nov": {
        myDate += "November, ";
        break;
      }
      case "Dec": {
        myDate += "December, ";
        break;
      }
      default:
        break;
    }
    myDate += year;
    return myDate;
  } else {
    return newDate;
  }
};
