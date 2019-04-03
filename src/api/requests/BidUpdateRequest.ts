// Copyright (c) 2017-2019, The Particl Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/particl/particl-market/blob/develop/LICENSE

import { IsNotEmpty, IsEnum } from 'class-validator';
import { RequestBody } from '../../core/api/RequestBody';
import { BidDataCreateRequest } from './BidDataCreateRequest';
import { MPAction } from 'omp-lib/dist/interfaces/omp-enums';

// tslint:disable:variable-name
export class BidUpdateRequest extends RequestBody {

    @IsNotEmpty()
    public listing_item_id: number;

    @IsEnum(MPAction)
    @IsNotEmpty()
    public type: MPAction;

    @IsNotEmpty()
    public bidder: string;
    @IsNotEmpty()
    public hash: string;
    @IsNotEmpty()
    public generatedAt: number;

    public bidDatas: BidDataCreateRequest[];
}
// tslint:enable:variable-name
