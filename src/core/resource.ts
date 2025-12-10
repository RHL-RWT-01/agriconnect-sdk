// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Agriconnect } from '../client';

export abstract class APIResource {
  protected _client: Agriconnect;

  constructor(client: Agriconnect) {
    this._client = client;
  }
}
