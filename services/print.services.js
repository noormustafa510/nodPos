
const { ThermalPrinter, PrinterTypes, CharacterSet, BreakLine } = require('node-thermal-printer');




class PrintServices {
static async printBill(){

//USB2.1 Hub

    let printer = new ThermalPrinter({
  type: PrinterTypes.CUSTOM,                                  // Printer type: 'star' or 'epson'
  interface: '\\.\USB2.1 Hub',                       // Printer interface
  characterSet: CharacterSet.PC852_LATIN2,                  // Printer character set
  removeSpecialCharacters: false,                           // Removes special characters - default: false
  lineCharacter: "=",                                       // Set character for lines - default: "-"
  breakLine: BreakLine.WORD,                                // Break line after WORD or CHARACTERS. Disabled with NONE - default: WORD
  options:{                                                 // Additional options
    timeout: 5000                                           // Connection timeout (ms) [applicable only for network printers] - default: 3000
  }
});

let isConnected = await printer.isPrinterConnected();
console.log(`Result:${isConnected}`)




    console.log("Working");
    return true;
}

}

module.exports = PrintServices;