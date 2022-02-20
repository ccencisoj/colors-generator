import converter from "hex2dec";

const toHexColor = (decimal)=> {
  let hex = converter.decToHex(String(decimal), {
    prefix: false
  });

  hex = `#${"0".repeat(6 - String(hex).length)}${hex}`;
  return hex;
}

const generateColors = (divisor)=> {
  if(!divisor || divisor === 0) return [];

  const hexColorsQuantity = (16 ** 6) - 1;
  const quotient = Math.floor(hexColorsQuantity / divisor);
  const colors = [];
  
  for(let i = 0; i < divisor; i++) 
    colors.push(toHexColor(i * quotient));

  colors[colors.length - 1] = "#ffffff"; 
  return colors;
}

export default generateColors;