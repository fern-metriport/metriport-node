/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { MetriportApi } from "@fern-api/metriport";

export interface Document {
    id: string;
    fileName: string;
    location: string;
    description?: string;
    status?: string;
    indexed?: Date;
    mimeType?: string;
    /** size of document in bytes */
    size?: number;
    type?: MetriportApi.CodeableConcept;
}