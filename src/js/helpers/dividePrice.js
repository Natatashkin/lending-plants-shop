export default function dividePrice(item) {
  if (typeof item === 'number') {
    item = item.toString();
  }

  if (item.length <= 3) {
    return '0';
  }
  const array = item.split('');
  array.splice(-3, 0, '.');
  const arrLength = array.length;

  if (arrLength > 7) {
    array.splice(-7, 0, '.');
    return array.join('');
  }

  return array.join('');
}
