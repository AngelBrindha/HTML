export function getRadioValue(theRadioGroup) {
  var elements = document.getElementsByName(theRadioGroup);
  for (var i = 0, l = elements.length; i < l; i++) {
    if (elements[i].checked) {
      return elements[i].value;
    }
  }
}
