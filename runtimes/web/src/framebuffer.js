import * as constants from "./constants";
import { WIDTH, HEIGHT } from "./constants";

const FONT = new Uint8Array([ 0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xc7,0xc7,0xc7,0xcf,0xcf,0xff,0xcf,0xff,0x93,0x93,0x93,0xff,0xff,0xff,0xff,0xff,0x93,0x01,0x93,0x93,0x93,0x01,0x93,0xff,0xef,0x83,0x2f,0x83,0xe9,0x03,0xef,0xff,0x9d,0x5b,0x37,0xef,0xd9,0xb5,0x73,0xff,0x8f,0x27,0x27,0x8f,0x25,0x33,0x81,0xff,0xcf,0xcf,0xcf,0xff,0xff,0xff,0xff,0xff,0xf3,0xe7,0xcf,0xcf,0xcf,0xe7,0xf3,0xff,0x9f,0xcf,0xe7,0xe7,0xe7,0xcf,0x9f,0xff,0xff,0x93,0xc7,0x01,0xc7,0x93,0xff,0xff,0xff,0xe7,0xe7,0x81,0xe7,0xe7,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xcf,0xcf,0x9f,0xff,0xff,0xff,0x81,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xcf,0xcf,0xff,0xfd,0xfb,0xf7,0xef,0xdf,0xbf,0x7f,0xff,0xc7,0xb3,0x39,0x39,0x39,0x9b,0xc7,0xff,0xe7,0xc7,0xe7,0xe7,0xe7,0xe7,0x81,0xff,0x83,0x39,0xf1,0xc3,0x87,0x1f,0x01,0xff,0x81,0xf3,0xe7,0xc3,0xf9,0x39,0x83,0xff,0xe3,0xc3,0x93,0x33,0x01,0xf3,0xf3,0xff,0x03,0x3f,0x03,0xf9,0xf9,0x39,0x83,0xff,0xc3,0x9f,0x3f,0x03,0x39,0x39,0x83,0xff,0x01,0x39,0xf3,0xe7,0xcf,0xcf,0xcf,0xff,0x87,0x3b,0x1b,0x87,0x61,0x79,0x83,0xff,0x83,0x39,0x39,0x81,0xf9,0xf3,0x87,0xff,0xff,0xcf,0xcf,0xff,0xcf,0xcf,0xff,0xff,0xff,0xcf,0xcf,0xff,0xcf,0xcf,0x9f,0xff,0xf3,0xe7,0xcf,0x9f,0xcf,0xe7,0xf3,0xff,0xff,0xff,0x01,0xff,0x01,0xff,0xff,0xff,0x9f,0xcf,0xe7,0xf3,0xe7,0xcf,0x9f,0xff,0x83,0x01,0x39,0xf3,0xc7,0xff,0xc7,0xff,0x83,0x7d,0x45,0x55,0x41,0x7f,0x83,0xff,0xc7,0x93,0x39,0x39,0x01,0x39,0x39,0xff,0x03,0x39,0x39,0x03,0x39,0x39,0x03,0xff,0xc3,0x99,0x3f,0x3f,0x3f,0x99,0xc3,0xff,0x07,0x33,0x39,0x39,0x39,0x33,0x07,0xff,0x01,0x3f,0x3f,0x03,0x3f,0x3f,0x01,0xff,0x01,0x3f,0x3f,0x03,0x3f,0x3f,0x3f,0xff,0xc1,0x9f,0x3f,0x31,0x39,0x99,0xc1,0xff,0x39,0x39,0x39,0x01,0x39,0x39,0x39,0xff,0x81,0xe7,0xe7,0xe7,0xe7,0xe7,0x81,0xff,0xf9,0xf9,0xf9,0xf9,0xf9,0x39,0x83,0xff,0x39,0x33,0x27,0x0f,0x07,0x23,0x31,0xff,0x9f,0x9f,0x9f,0x9f,0x9f,0x9f,0x81,0xff,0x39,0x11,0x01,0x01,0x29,0x39,0x39,0xff,0x39,0x19,0x09,0x01,0x21,0x31,0x39,0xff,0x83,0x39,0x39,0x39,0x39,0x39,0x83,0xff,0x03,0x39,0x39,0x39,0x03,0x3f,0x3f,0xff,0x83,0x39,0x39,0x39,0x21,0x33,0x85,0xff,0x03,0x39,0x39,0x31,0x07,0x23,0x31,0xff,0x87,0x33,0x3f,0x83,0xf9,0x39,0x83,0xff,0x81,0xe7,0xe7,0xe7,0xe7,0xe7,0xe7,0xff,0x39,0x39,0x39,0x39,0x39,0x39,0x83,0xff,0x39,0x39,0x39,0x11,0x83,0xc7,0xef,0xff,0x39,0x39,0x29,0x01,0x01,0x11,0x39,0xff,0x39,0x11,0x83,0xc7,0x83,0x11,0x39,0xff,0x99,0x99,0x99,0xc3,0xe7,0xe7,0xe7,0xff,0x01,0xf1,0xe3,0xc7,0x8f,0x1f,0x01,0xff,0xc3,0xcf,0xcf,0xcf,0xcf,0xcf,0xc3,0xff,0x7f,0xbf,0xdf,0xef,0xf7,0xfb,0xfd,0xff,0x87,0xe7,0xe7,0xe7,0xe7,0xe7,0x87,0xff,0xc7,0x93,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0x01,0xef,0xf7,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0x83,0xf9,0x81,0x39,0x81,0xff,0x3f,0x3f,0x03,0x39,0x39,0x39,0x83,0xff,0xff,0xff,0x81,0x3f,0x3f,0x3f,0x81,0xff,0xf9,0xf9,0x81,0x39,0x39,0x39,0x81,0xff,0xff,0xff,0x83,0x39,0x01,0x3f,0x83,0xff,0xf1,0xe7,0x81,0xe7,0xe7,0xe7,0xe7,0xff,0xff,0xff,0x81,0x39,0x39,0x81,0xf9,0x83,0x3f,0x3f,0x03,0x39,0x39,0x39,0x39,0xff,0xe7,0xff,0xc7,0xe7,0xe7,0xe7,0x81,0xff,0xf3,0xff,0xe3,0xf3,0xf3,0xf3,0xf3,0x87,0x3f,0x3f,0x31,0x03,0x07,0x23,0x31,0xff,0xc7,0xe7,0xe7,0xe7,0xe7,0xe7,0x81,0xff,0xff,0xff,0x03,0x49,0x49,0x49,0x49,0xff,0xff,0xff,0x03,0x39,0x39,0x39,0x39,0xff,0xff,0xff,0x83,0x39,0x39,0x39,0x83,0xff,0xff,0xff,0x03,0x39,0x39,0x03,0x3f,0x3f,0xff,0xff,0x81,0x39,0x39,0x81,0xf9,0xf9,0xff,0xff,0x91,0x8f,0x9f,0x9f,0x9f,0xff,0xff,0xff,0x83,0x3f,0x83,0xf9,0x03,0xff,0xe7,0xe7,0x81,0xe7,0xe7,0xe7,0xe7,0xff,0xff,0xff,0x39,0x39,0x39,0x39,0x81,0xff,0xff,0xff,0x99,0x99,0x99,0xc3,0xe7,0xff,0xff,0xff,0x49,0x49,0x49,0x49,0x81,0xff,0xff,0xff,0x39,0x01,0xc7,0x01,0x39,0xff,0xff,0xff,0x39,0x39,0x39,0x81,0xf9,0x83,0xff,0xff,0x01,0xe3,0xc7,0x8f,0x01,0xff,0xf3,0xe7,0xe7,0xcf,0xe7,0xe7,0xf3,0xff,0xe7,0xe7,0xe7,0xe7,0xe7,0xe7,0xe7,0xff,0x9f,0xcf,0xcf,0xe7,0xcf,0xcf,0x9f,0xff,0xff,0xff,0x8f,0x45,0xe3,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0x93,0x93,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xe7,0xff,0xe7,0xe7,0xc7,0xc7,0xc7,0xff,0xef,0x83,0x29,0x2f,0x29,0x83,0xef,0xff,0xc3,0x99,0x9f,0x03,0x9f,0x9f,0x01,0xff,0xff,0xa5,0xdb,0xdb,0xdb,0xa5,0xff,0xff,0x99,0x99,0xc3,0x81,0xe7,0x81,0xe7,0xff,0xe7,0xe7,0xe7,0xff,0xe7,0xe7,0xe7,0xff,0xc3,0x99,0x87,0xdb,0xe1,0x99,0xc3,0xff,0x93,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xc3,0xbd,0x66,0x5e,0x5e,0x66,0xbd,0xc3,0x87,0xc3,0x93,0xc3,0xff,0xff,0xff,0xff,0xff,0xc9,0x93,0x27,0x93,0xc9,0xff,0xff,0xff,0xff,0x81,0xf9,0xf9,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xc3,0xbd,0x46,0x5a,0x46,0x5a,0xbd,0xc3,0x83,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xef,0xd7,0xef,0xff,0xff,0xff,0xff,0xff,0xe7,0xe7,0x81,0xe7,0xe7,0xff,0x81,0xff,0xc7,0xf3,0xe7,0xc3,0xff,0xff,0xff,0xff,0xc3,0xe7,0xf3,0xc7,0xff,0xff,0xff,0xff,0xf7,0xef,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0x33,0x33,0x33,0x33,0x09,0x3f,0xc1,0x95,0xb5,0x95,0xc1,0xf5,0xf5,0xff,0xff,0xff,0xff,0xcf,0xcf,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xf7,0xcf,0xe7,0xc7,0xe7,0xc3,0xff,0xff,0xff,0xff,0xc7,0x93,0x93,0xc7,0xff,0xff,0xff,0xff,0xff,0x27,0x93,0xc9,0x93,0x27,0xff,0xff,0xbd,0x3b,0xb7,0xad,0xd9,0xb1,0x7d,0xff,0xbd,0x3b,0xb7,0xa9,0xdd,0xbb,0x71,0xff,0x1d,0xbb,0xd7,0x2d,0xd9,0xb1,0x7d,0xff,0xc7,0xff,0xc7,0x9f,0x39,0x01,0x83,0xff,0xdf,0xef,0xc7,0x93,0x39,0x01,0x39,0xff,0xf7,0xef,0xc7,0x93,0x39,0x01,0x39,0xff,0xc7,0x93,0xc7,0x93,0x39,0x01,0x39,0xff,0xcb,0xa7,0xc7,0x93,0x39,0x01,0x39,0xff,0x93,0xff,0xc7,0x93,0x39,0x01,0x39,0xff,0xef,0xd7,0xc7,0x93,0x39,0x01,0x39,0xff,0xc1,0x87,0x27,0x21,0x07,0x27,0x21,0xff,0xc3,0x99,0x3f,0x3f,0x99,0xc3,0xf7,0xcf,0xdf,0xef,0x01,0x3f,0x03,0x3f,0x01,0xff,0xf7,0xef,0x01,0x3f,0x03,0x3f,0x01,0xff,0xc7,0x93,0x01,0x3f,0x03,0x3f,0x01,0xff,0x93,0xff,0x01,0x3f,0x03,0x3f,0x01,0xff,0xef,0xf7,0x81,0xe7,0xe7,0xe7,0x81,0xff,0xf7,0xef,0x81,0xe7,0xe7,0xe7,0x81,0xff,0xe7,0xc3,0x81,0xe7,0xe7,0xe7,0x81,0xff,0x99,0xff,0x81,0xe7,0xe7,0xe7,0x81,0xff,0x87,0x93,0x99,0x09,0x99,0x93,0x87,0xff,0xcb,0xa7,0x19,0x09,0x01,0x21,0x31,0xff,0xdf,0xef,0x83,0x39,0x39,0x39,0x83,0xff,0xf7,0xef,0x83,0x39,0x39,0x39,0x83,0xff,0xc7,0x93,0x83,0x39,0x39,0x39,0x83,0xff,0xcb,0xa7,0x83,0x39,0x39,0x39,0x83,0xff,0x93,0xff,0x83,0x39,0x39,0x39,0x83,0xff,0xff,0xbb,0xd7,0xef,0xd7,0xbb,0xff,0xff,0x83,0x39,0x31,0x29,0x19,0x39,0x83,0xff,0xdf,0xef,0x39,0x39,0x39,0x39,0x83,0xff,0xf7,0xef,0x39,0x39,0x39,0x39,0x83,0xff,0xc7,0x93,0xff,0x39,0x39,0x39,0x83,0xff,0x93,0xff,0x39,0x39,0x39,0x39,0x83,0xff,0xf7,0xef,0x99,0x99,0xc3,0xe7,0xe7,0xff,0x3f,0x03,0x39,0x39,0x39,0x03,0x3f,0xff,0xc3,0x99,0x99,0x93,0x99,0x89,0x93,0xff,0xdf,0xef,0x83,0xf9,0x81,0x39,0x81,0xff,0xf7,0xef,0x83,0xf9,0x81,0x39,0x81,0xff,0xc7,0x93,0x83,0xf9,0x81,0x39,0x81,0xff,0xcb,0xa7,0x83,0xf9,0x81,0x39,0x81,0xff,0x93,0xff,0x83,0xf9,0x81,0x39,0x81,0xff,0xef,0xd7,0x83,0xf9,0x81,0x39,0x81,0xff,0xff,0xff,0x83,0xe9,0x81,0x2f,0x83,0xff,0xff,0xff,0x81,0x3f,0x3f,0x81,0xf7,0xcf,0xdf,0xef,0x83,0x39,0x01,0x3f,0x83,0xff,0xf7,0xef,0x83,0x39,0x01,0x3f,0x83,0xff,0xc7,0x93,0x83,0x39,0x01,0x3f,0x83,0xff,0x93,0xff,0x83,0x39,0x01,0x3f,0x83,0xff,0xdf,0xef,0xff,0xc7,0xe7,0xe7,0x81,0xff,0xf7,0xef,0xff,0xc7,0xe7,0xe7,0x81,0xff,0xc7,0x93,0xff,0xc7,0xe7,0xe7,0x81,0xff,0x93,0xff,0xc7,0xe7,0xe7,0xe7,0x81,0xff,0x9b,0x87,0x67,0x83,0x39,0x39,0x83,0xff,0xcb,0xa7,0x03,0x39,0x39,0x39,0x39,0xff,0xdf,0xef,0x83,0x39,0x39,0x39,0x83,0xff,0xf7,0xef,0x83,0x39,0x39,0x39,0x83,0xff,0xc7,0x93,0x83,0x39,0x39,0x39,0x83,0xff,0xcb,0xa7,0x83,0x39,0x39,0x39,0x83,0xff,0x93,0xff,0x83,0x39,0x39,0x39,0x83,0xff,0xff,0xe7,0xff,0x81,0xff,0xe7,0xff,0xff,0xff,0xff,0x83,0x31,0x29,0x19,0x83,0xff,0xdf,0xef,0x39,0x39,0x39,0x39,0x81,0xff,0xf7,0xef,0x39,0x39,0x39,0x39,0x81,0xff,0xc7,0x93,0xff,0x39,0x39,0x39,0x81,0xff,0x93,0xff,0x39,0x39,0x39,0x39,0x81,0xff,0xf7,0xef,0x39,0x39,0x39,0x81,0xf9,0x83,0x3f,0x3f,0x03,0x39,0x39,0x03,0x3f,0x3f,0x93,0xff,0x39,0x39,0x39,0x81,0xf9,0x83 ]);

export class Framebuffer {
    constructor (memory) {
        this.bytes = new Uint8Array(memory, constants.ADDR_FRAMEBUFFER, WIDTH*HEIGHT >> 2);
        this.drawColors = new Uint16Array(memory, constants.ADDR_DRAW_COLORS, 1);
    }

    clear () {
        this.bytes.fill(0);
    }

    set (color, x, y) {
        const idx = (WIDTH*y + x) >> 2;
        const shift = (x & 0x3) << 1;
        const mask = 0x3 << shift;
        this.bytes[idx] = (color << shift) | (this.bytes[idx] & (~mask));
    }

    drawRect (x, y, width, height) {
        // TODO(2021-07-07): Optimize
        // TODO(2021-07-21): Clipping
        const color = this.drawColors[0] & 0x3;
        for (let yy = y; yy < y+height; ++yy) {
            for (let xx = x; xx < x+width; ++xx) {
                this.set(color, xx, yy);
            }
        }
    }

    drawText (charArray, x, y) {
        let currentX = x;
        for (let ii = 0; charArray[ii]; ++ii) {
            const c = charArray[ii];
            switch (c) {
            case 10:
                y += 8;
                currentX = x;
                break;
            default:
                this.drawChar(c, currentX, y);
                currentX += 8;
                break;
            }
        }
    }

    drawTextLength (charArray, x, y) {
        let currentX = x;
        for (let ii = 0, length = charArray.length; ii < length; ++ii) {
            const c = charArray[ii] & 0xff;
            switch (c) {
            case 10:
                y += 8;
                currentX = x;
                break;
            default:
                this.drawChar(c, currentX, y);
                currentX += 8;
                break;
            }
        }
    }

    drawChar (charCode, x, y) {
        this.blit(FONT, x, y, 8, 8, 0, (charCode-32)*8, 8, false, false, false);
    }

    blit (sprite, dstX, dstY, width, height, srcX, srcY, srcStride, bpp2, flipX, flipY, rotate) {
        const clipXMin = Math.max(0, dstX) - dstX;
        const clipYMin = Math.max(0, dstY) - dstY;
        const clipXMax = Math.min(width, WIDTH - dstX);
        const clipYMax = Math.min(height, HEIGHT - dstY);
        const drawColors = this.drawColors[0];

        if (rotate) {
            flipX = !flipX;
        }

        for (let row = clipYMin; row < clipYMax; ++row) {
            for (let col = clipXMin; col < clipXMax; ++col) {
                // Determine the local position on the sprite
                let sx, sy;
                if (rotate) {
                    sx = row;
                    sy = col;
                } else {
                    sx = col;
                    sy = row;
                }
                if (flipX) {
                    sx = clipXMax - sx - 1;
                }
                if (flipY) {
                    sy = clipYMax - sy - 1;
                }

                // Sample the sprite to get a color index
                let colorIdx;
                const x = srcX + sx, y = srcY + sy;
                if (bpp2) {
                    const byte = sprite[(y*srcStride + x) >> 2];
                    const shift = 6 - ((x & 0x03) << 1);
                    colorIdx = (byte >> shift) & 0b11;

                } else {
                    const byte = sprite[(y*srcStride + x) >> 3];
                    const shift = 7 - (x & 0x07);
                    colorIdx = (byte >> shift) & 0b1;
                }

                // Get the final color using the drawColors indirection
                const color = (drawColors >> (colorIdx << 2)) & 0x0f;
                if (color != 0x0f) {
                    this.set(color & 0x03, dstX + col, dstY + row);
                }
            }
        }
    }
}
