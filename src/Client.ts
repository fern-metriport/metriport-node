/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Document } from "./api/resources/document/client/Client";

export declare namespace MetriportApiClient {
    interface Options {
        environment: string;
        apiKey: core.Supplier<string>;
    }
}

export class MetriportApiClient {
    constructor(protected readonly options: MetriportApiClient.Options) {}

    protected _document: Document | undefined;

    public get document(): Document {
        return (this._document ??= new Document(this.options));
    }
}
