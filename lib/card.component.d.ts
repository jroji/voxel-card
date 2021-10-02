import { OnInit } from "@angular/core";
import * as i0 from "@angular/core";
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
