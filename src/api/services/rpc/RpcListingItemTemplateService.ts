import * as Bookshelf from 'bookshelf';
import { inject, named } from 'inversify';
import { validate, request } from '../../../core/api/Validate';
import { Logger as LoggerType } from '../../../core/Logger';
import { Types, Core, Targets } from '../../../constants';
import { ListingItemTemplateService } from '../ListingItemTemplateService';
import { RpcRequest } from '../../requests/RpcRequest';
import { ListingItemTemplate } from '../../models/ListingItemTemplate';

export class RpcListingItemTemplateService {

    public log: LoggerType;

    constructor(
        @inject(Types.Service) @named(Targets.Service.ListingItemTemplateService) private listingItemTemplateService: ListingItemTemplateService,
        @inject(Types.Core) @named(Core.Logger) public Logger: typeof LoggerType) {
        this.log = new Logger(__filename);
    }

    @validate()
    public async findAll( @request(RpcRequest) data: any): Promise<Bookshelf.Collection<ListingItemTemplate>> {
        return this.listingItemTemplateService.findAll();
    }

    /**
     * data.params[]:
     *  [0]: id to fetch
     *
     * @param data
     * @returns {Promise<ListingItemTemplate>}
     */
    @validate()
    public async findOne( @request(RpcRequest) data: any): Promise<ListingItemTemplate> {
        return this.listingItemTemplateService.findOne(data.params[0]);
    }

    /**
     * data.params[]:
     *  [0]: profile_id
     *  [1]: title
     *  [2]: short description
     *  [3]: long description
     *  [4]: category
     *
     * @param data
     * @returns {Promise<ListingItemTemplate>}
     */
    @validate()
    public async create( @request(RpcRequest) data: any): Promise<ListingItemTemplate> {
        if (data.params[1] && data.params[2] && data.params[3] && data.params[4]) {
            return this.listingItemTemplateService.create({
                profile_id: data.params[0],
                itemInformation: {
                    title: data.params[1],
                    shortDescription: data.params[2],
                    longDescription: data.params[3],
                    itemCategory: {
                        key: data.params[4]
                    }
                }
            });
        } else {
            return this.listingItemTemplateService.create({
                profile_id: data.params[0]
            });
        }
    }

    /**
     * data.params[]:
     *
     * @param data
     * @returns {Promise<ListingItemTemplate>}
     */
    @validate()
    public async update( @request(RpcRequest) data: any): Promise<ListingItemTemplate> {
        return this.listingItemTemplateService.update(data.params[0], {
            data: data.params[1] // TODO: convert your params to ListingItemTemplateUpdateRequest
        });
    }

    @validate()
    public async destroy( @request(RpcRequest) data: any): Promise<void> {
        return this.listingItemTemplateService.destroy(data.params[0]);
    }
}
