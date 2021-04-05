/**
 * HDC1080 extension for microbit makecode .
 * From STEM Power Limited.
 * https://stem-power.com
 *  */

/**
 * HDC1080
 */
//% weight=100 color=#0975ff icon="\uf043" block="HDC1080"
namespace HDC1080 {
    
    let HDC1080_I2C_ADDR = 0x40;

    /**
     * HDC1080 Init
     */
    //% blockId="HDC1080_init" block="HDC1080 Init"
    //% weight=100 blockGap=8
    export function HDC1080_init(): void {
        pins.i2cWriteNumber(HDC1080_I2C_ADDR, 0x02, 0x0000); //*config the HDC1080 to 14 bits TH and 14 bits RH measure separately, heater disabled//
        basic.pause(100);
        //*pins.i2cWriteNumber(HDC1080_I2C_ADDR, 0x00, NumberFormat.UInt8BE); //*Temperature measurement//
        //*basic.pause(10);
        //*pins.i2cReadNumber(HDC1080_I2C_ADDR, NumberFormat.UInt16BE);   
        //*basic.pause(10);
        //*pins.i2cWriteNumber(HDC1080_I2C_ADDR, 0x01, NumberFormat.UInt8BE);   //*Humidity measurement//
        //*basic.pause(10);
        //*pins.i2cReadNumber(HDC1080_I2C_ADDR, NumberFormat.UInt16BE);
        
    }


    /**
     * Temperature
     */
    //% blockId="read_temperture" block="Temperature"
    //% weight=90 blockGap=8
    export function read_temperature(): number {
        pins.i2cWriteNumber(HDC1080_I2C_ADDR, 0x00, NumberFormat.UInt8BE);
        basic.pause(10);
        let TH_raw = 0;
        let TH1 = 0;
        let TH2 = 0;
        TH_raw = pins.i2cReadNumber(HDC1080_I2C_ADDR, NumberFormat.UInt16BE);
        TH1 = TH_raw / 65536;
        TH2 = Math.roundWithPrecision(TH1, 3);
        let TH = TH2 * 165 - 40;
        return Math.roundWithPrecision(TH, 1);
    }


    /**
     * Humidity
     */
    //% blockId="read_humidity" block="Humidity"
    //% weight=89 blockGap=8
    export function read_humidity(): number {
        pins.i2cWriteNumber(HDC1080_I2C_ADDR, 0x01, NumberFormat.UInt8BE);
        basic.pause(10);
        let RH_raw = pins.i2cReadNumber(HDC1080_I2C_ADDR, NumberFormat.UInt16BE);
        let RH = RH_raw / 65536 * 100;
        return Math.roundWithPrecision(RH, 1);
    }

}
