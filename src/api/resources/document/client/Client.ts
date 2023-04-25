/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import { MetriportApi } from "@fern-api/metriport";
import URLSearchParams from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Document {
    interface Options {
        environment: string;
        apiKey: core.Supplier<string>;
    }
}

export class Document {
    constructor(protected readonly options: Document.Options) {}

    /**
     * Queries for all available document metadata for the specified patient across HIEs
     */
    public async get(request: MetriportApi.GetDocumentsRequest): Promise<MetriportApi.GetDocumentsResponse> {
        const { patientId, facilityId, forceQuery } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("patientId", patientId);
        _queryParams.append("facilityId", facilityId);
        if (forceQuery != null) {
            _queryParams.append("forceQuery", forceQuery);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/medical/v1/document"),
            method: "GET",
            headers: {
                "X-API-Key": await core.Supplier.get(this.options.apiKey),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.GetDocumentsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MetriportApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MetriportApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MetriportApiTimeoutError();
            case "unknown":
                throw new errors.MetriportApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Triggers a document query for the specified patient across HIEs
     */
    public async triggerQuery(
        request: MetriportApi.TriggerDocumentsQueryRequest
    ): Promise<MetriportApi.TriggerDocumentsQueryResponse> {
        const { patientId, facilityId } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("patientId", patientId);
        _queryParams.append("facilityId", facilityId);
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/medical/v1/document/query"),
            method: "POST",
            headers: {
                "X-API-Key": await core.Supplier.get(this.options.apiKey),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.TriggerDocumentsQueryResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MetriportApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MetriportApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MetriportApiTimeoutError();
            case "unknown":
                throw new errors.MetriportApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Fetches the document from S3 and sends a presigned URL
     */
    public async download(
        request: MetriportApi.DownloadDocumentRequest
    ): Promise<MetriportApi.DownloadDocumentResponse> {
        const { fileName } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("fileName", fileName);
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/medical/v1/document/downloadUrl"),
            method: "POST",
            headers: {
                "X-API-Key": await core.Supplier.get(this.options.apiKey),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.DownloadDocumentResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MetriportApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MetriportApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MetriportApiTimeoutError();
            case "unknown":
                throw new errors.MetriportApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
