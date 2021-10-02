import { OnInit } from "@angular/core";
import * as i0 from "@angular/core";
/**
 *
 * [🌅 View on Figma](https://www.figma.com/file/PAZbL8SeNxl6yauLCv56jT/Ecommerce?node-id=4%3A316)
 *
 * Card component shows an image, a title and a description providing
 * the correct inputs.
 *
 * ## 🖌 Style Customization
 *
 * |  name                       | value   |
 * |-----------------------------|---------|
 * | --cat-card-background       | #F2F2F2 |
 * | --cat-card-spacing          | 8px     |
 * | --cat-card-title-size       | 18px    |
 * | --cat-card-description-size | 14px    |
 * | --cat-card-text-color       | #595959 |
 * | --cat-card-image-height     | 300px   |
 *
 * <voxel-card
 *    style="max-width: 320px"
 *    [image]="image"
 *    [title]="title"
 *    [description]="description"
 *    alt="Image alt"
 * ></voxel-card
*/
export declare class CardComponent implements OnInit {
    /** Text with the card title */
    title?: string;
    /** Text with the card description */
    description?: string;
    /** Image route to be shown in the card header */
    image?: string;
    /** Image alternative text. Takes title as default if not provided */
    alt?: string;
    /** Reflects the provided value on is-featured attribute */
    isFeatured: boolean;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardComponent, "voxel-card", never, { "title": "title"; "description": "description"; "image": "image"; "alt": "alt"; "isFeatured": "isFeatured"; }, {}, never, never>;
}
