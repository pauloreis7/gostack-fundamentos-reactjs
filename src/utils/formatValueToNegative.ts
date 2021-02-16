import formatValue from './formatValue';

const formatValueToNegative = (value: number): string => {
  const formattedValue = formatValue(value).replace(/^/, ' - ');
  return formattedValue;
};

export default formatValueToNegative;
