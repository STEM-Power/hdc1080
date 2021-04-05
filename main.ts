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
        pins.i2cWriteNumber(HDC1080_I2C_ADDR, 0x00, NumberFormat.UInt8BE, false); //*Temperature measurement//
        basic.pause(10)
        pins.i2cReadNumber(HDC1080_I2C_ADDR, NumberFormat.UInt16BE);     
        pins.i2cWriteNumber(HDC1080_I2C_ADDR, 0x01, NumberFormat.UInt8BE, false);   //*Humidity measurement//
        basic.pause(10)
        pins.i2cReadNumber(HDC1080_I2C_ADDR, NumberFormat.UInt16BE);
        
    }

    /**
     * read Device info from HDC1080
     */
    //% blockId="read_device_info" block="read device info by command"
    //% weight=99 blockGap=8
    export function read_deviceID(): number {
        pins.i2cWriteNumber(HDC1080_I2C_ADDR, 0xFF, NumberFormat.UInt8BE)
        return pins.i2cReadNumber(HDC1080_I2C_ADDR, NumberFormat.UInt16BE);
    }

/**
     * read temperature
     */
    //% blockId="read_temperture" block="Read Temperature"
    //% weight=90 blockGap=8
    export function read_temperature(): number {
        pins.i2cWriteNumber(HDC1080_I2C_ADDR, 0x00, NumberFormat.UInt8BE)
        return pins.i2cReadNumber(HDC1080_I2C_ADDR, NumberFormat.UInt16BE);
    }





}
