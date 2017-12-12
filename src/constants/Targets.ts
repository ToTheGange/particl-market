/**
 * constants.Targets
 * ------------------------------------------------
 *
 * This is for our IOC so have a unique key/target for
 * our controllers, services and repositories
 *
 * This file is generated with the task `$ npm run console update:targets`.
 */

export const Targets = {
    Model:     {
        Address: 'Address',
        Bid: 'Bid',
        BidData: 'BidData',
        CryptocurrencyAddress: 'CryptocurrencyAddress',
        Escrow: 'Escrow',
        EscrowRatio: 'EscrowRatio',
        FavoriteItem: 'FavoriteItem',
        ItemCategory: 'ItemCategory',
        ItemImage: 'ItemImage',
        ItemImageData: 'ItemImageData',
        ItemInformation: 'ItemInformation',
        ItemLocation: 'ItemLocation',
        ItemPrice: 'ItemPrice',
        ListingItem: 'ListingItem',
        ListingItemObject: 'ListingItemObject',
        ListingItemTemplate: 'ListingItemTemplate',
        LocationMarker: 'LocationMarker',
        Market: 'Market',
        MessagingInformation: 'MessagingInformation',
        PaymentInformation: 'PaymentInformation',
        Profile: 'Profile',
        ShippingDestination: 'ShippingDestination',
        ShippingPrice: 'ShippingPrice',
        User: 'User'
    },
    Repository:     {
        AddressRepository: 'AddressRepository',
        BidDataRepository: 'BidDataRepository',
        BidRepository: 'BidRepository',
        CryptocurrencyAddressRepository: 'CryptocurrencyAddressRepository',
        EscrowRatioRepository: 'EscrowRatioRepository',
        EscrowRepository: 'EscrowRepository',
        FavoriteItemRepository: 'FavoriteItemRepository',
        ItemCategoryRepository: 'ItemCategoryRepository',
        ItemImageDataRepository: 'ItemImageDataRepository',
        ItemImageRepository: 'ItemImageRepository',
        ItemInformationRepository: 'ItemInformationRepository',
        ItemLocationRepository: 'ItemLocationRepository',
        ItemPriceRepository: 'ItemPriceRepository',
        ListingItemObjectRepository: 'ListingItemObjectRepository',
        ListingItemRepository: 'ListingItemRepository',
        ListingItemTemplateRepository: 'ListingItemTemplateRepository',
        LocationMarkerRepository: 'LocationMarkerRepository',
        MarketRepository: 'MarketRepository',
        MessagingInformationRepository: 'MessagingInformationRepository',
        PaymentInformationRepository: 'PaymentInformationRepository',
        ProfileRepository: 'ProfileRepository',
        ShippingDestinationRepository: 'ShippingDestinationRepository',
        ShippingPriceRepository: 'ShippingPriceRepository',
        UserRepository: 'UserRepository'
    },
    Service:     {
        AddressService: 'AddressService',
        BidDataService: 'BidDataService',
        BidService: 'BidService',
        CryptocurrencyAddressService: 'CryptocurrencyAddressService',
        DefaultItemCategoryService: 'DefaultItemCategoryService',
        DefaultMarketService: 'DefaultMarketService',
        DefaultProfileService: 'DefaultProfileService',
        EscrowRatioService: 'EscrowRatioService',
        EscrowService: 'EscrowService',
        FavoriteItemService: 'FavoriteItemService',
        ItemCategoryService: 'ItemCategoryService',
        ItemImageDataService: 'ItemImageDataService',
        ItemImageService: 'ItemImageService',
        ItemInformationService: 'ItemInformationService',
        ItemLocationService: 'ItemLocationService',
        ItemPriceService: 'ItemPriceService',
        ListingItemObjectService: 'ListingItemObjectService',
        ListingItemService: 'ListingItemService',
        ListingItemTemplateService: 'ListingItemTemplateService',
        LocationMarkerService: 'LocationMarkerService',
        MarketService: 'MarketService',
        MessageBroadcastService: 'MessageBroadcastService',
        MessagingInformationService: 'MessagingInformationService',
        PaymentInformationService: 'PaymentInformationService',
        ProfileService: 'ProfileService',
        rpc: {
            RpcAddressService: 'RpcAddressService',
            RpcBidService: 'RpcBidService',
            RpcCliHelpService: 'RpcCliHelpService',
            RpcEscrowService: 'RpcEscrowService',
            RpcFavoriteItemService: 'RpcFavoriteItemService',
            RpcItemCategoryService: 'RpcItemCategoryService',
            RpcItemImageService: 'RpcItemImageService',
            RpcItemInformationService: 'RpcItemInformationService',
            RpcItemLocationService: 'RpcItemLocationService',
            RpcListingItemService: 'RpcListingItemService',
            RpcListingItemTemplateService: 'RpcListingItemTemplateService',
            RpcMarketService: 'RpcMarketService',
            RpcMessagingInformationService: 'RpcMessagingInformationService',
            RpcPaymentInformationService: 'RpcPaymentInformationService',
            RpcProfileService: 'RpcProfileService',
            RpcShippingDestinationService: 'RpcShippingDestinationService',
            RpcTestDataService: 'RpcTestDataService'
        },
        ShippingDestinationService: 'ShippingDestinationService',
        ShippingPriceService: 'ShippingPriceService',
        TestDataService: 'TestDataService',
        UserService: 'UserService'
    },
    Command:     {
        AddressCreateCommand: 'AddressCreateCommand',
        AddressUpdateCommand: 'AddressUpdateCommand',
        CategoriesGetCommand: 'CategoriesGetCommand',
        CategoryCreateCommand: 'CategoryCreateCommand',
        CategoryFindCommand: 'CategoryFindCommand',
        CategoryGetCommand: 'CategoryGetCommand',
        CategoryRemoveCommand: 'CategoryRemoveCommand',
        CategoryUpdateCommand: 'CategoryUpdateCommand',
        CreateItemInformationCommand: 'CreateItemInformationCommand',
        CreateListingItemTemplateCommand: 'CreateListingItemTemplateCommand',
        CreateProfileCommand: 'CreateProfileCommand',
        EscrowCreateCommand: 'EscrowCreateCommand',
        EscrowDestroyCommand: 'EscrowDestroyCommand',
        EscrowFindAllCommand: 'EscrowFindAllCommand',
        EscrowFindCommand: 'EscrowFindCommand',
        EscrowUpdateCommand: 'EscrowUpdateCommand',
        FindItemsCommand: 'FindItemsCommand',
        FindOwnItemsCommand: 'FindOwnItemsCommand',
        GetItemCommand: 'GetItemCommand',
        GetItemInformationCommand: 'GetItemInformationCommand',
        GetListingItemTemplateCommand: 'GetListingItemTemplateCommand',
        GetProfileCommand: 'GetProfileCommand',
        HelpCommand: 'HelpCommand',
        ItemCategoryCreateCommand: 'ItemCategoryCreateCommand',
        ItemCategoryDestroyCommand: 'ItemCategoryDestroyCommand',
        ItemCategoryFindAllCommand: 'ItemCategoryFindAllCommand',
        ItemCategoryFindCommand: 'ItemCategoryFindCommand',
        ItemCategoryFindRootCommand: 'ItemCategoryFindRootCommand',
        ItemCategoryUpdateCommand: 'ItemCategoryUpdateCommand',
        ItemImageCreateCommand: 'ItemImageCreateCommand',
        ItemImageDataCreateCommand: 'ItemImageDataCreateCommand',
        ItemImageDataDestroyCommand: 'ItemImageDataDestroyCommand',
        ItemImageDataFindAllCommand: 'ItemImageDataFindAllCommand',
        ItemImageDataFindCommand: 'ItemImageDataFindCommand',
        ItemImageDataUpdateCommand: 'ItemImageDataUpdateCommand',
        ItemImageDestroyCommand: 'ItemImageDestroyCommand',
        ItemImageFindAllCommand: 'ItemImageFindAllCommand',
        ItemImageFindCommand: 'ItemImageFindCommand',
        ItemImageUpdateCommand: 'ItemImageUpdateCommand',
        ItemInformationCreateCommand: 'ItemInformationCreateCommand',
        ItemInformationDestroyCommand: 'ItemInformationDestroyCommand',
        ItemInformationFindAllCommand: 'ItemInformationFindAllCommand',
        ItemInformationFindCommand: 'ItemInformationFindCommand',
        ItemInformationUpdateCommand: 'ItemInformationUpdateCommand',
        ItemLocationCreateCommand: 'ItemLocationCreateCommand',
        ItemLocationDestroyCommand: 'ItemLocationDestroyCommand',
        ItemLocationFindAllCommand: 'ItemLocationFindAllCommand',
        ItemLocationFindCommand: 'ItemLocationFindCommand',
        ItemLocationUpdateCommand: 'ItemLocationUpdateCommand',
        ItemPriceCreateCommand: 'ItemPriceCreateCommand',
        ItemPriceDestroyCommand: 'ItemPriceDestroyCommand',
        ItemPriceFindAllCommand: 'ItemPriceFindAllCommand',
        ItemPriceFindCommand: 'ItemPriceFindCommand',
        ItemPriceUpdateCommand: 'ItemPriceUpdateCommand',
        ListingItemCreateCommand: 'ListingItemCreateCommand',
        ListingItemDestroyCommand: 'ListingItemDestroyCommand',
        ListingItemFindAllCommand: 'ListingItemFindAllCommand',
        ListingItemFindByCategoryCommand: 'ListingItemFindByCategoryCommand',
        ListingItemFindCommand: 'ListingItemFindCommand',
        ListingItemUpdateCommand: 'ListingItemUpdateCommand',
        LocationMarkerCreateCommand: 'LocationMarkerCreateCommand',
        LocationMarkerDestroyCommand: 'LocationMarkerDestroyCommand',
        LocationMarkerFindAllCommand: 'LocationMarkerFindAllCommand',
        LocationMarkerFindCommand: 'LocationMarkerFindCommand',
        LocationMarkerUpdateCommand: 'LocationMarkerUpdateCommand',
        MessagingInformationCreateCommand: 'MessagingInformationCreateCommand',
        MessagingInformationDestroyCommand: 'MessagingInformationDestroyCommand',
        MessagingInformationFindAllCommand: 'MessagingInformationFindAllCommand',
        MessagingInformationFindCommand: 'MessagingInformationFindCommand',
        MessagingInformationUpdateCommand: 'MessagingInformationUpdateCommand',
        PaymentInformationCreateCommand: 'PaymentInformationCreateCommand',
        PaymentInformationDestroyCommand: 'PaymentInformationDestroyCommand',
        PaymentInformationFindAllCommand: 'PaymentInformationFindAllCommand',
        PaymentInformationFindCommand: 'PaymentInformationFindCommand',
        PaymentInformationUpdateCommand: 'PaymentInformationUpdateCommand',
        ProfileCreateCommand: 'ProfileCreateCommand',
        ProfileFindCommand: 'ProfileFindCommand',
        ProfileUpdateCommand: 'ProfileUpdateCommand',
        RpcCommand: 'RpcCommand',
        SearchListingItemTemplateCommand: 'SearchListingItemTemplateCommand',
        ShippingCreateCommand: 'ShippingCreateCommand',
        ShippingDestroyCommand: 'ShippingDestroyCommand',
        ShippingFindAllCommand: 'ShippingFindAllCommand',
        ShippingFindCommand: 'ShippingFindCommand',
        ShippingUpdateCommand: 'ShippingUpdateCommand',
        TestCommand: 'TestCommand',
        UpdateItemInformationCommand: 'UpdateItemInformationCommand',
        UpdateProfileCommand: 'UpdateProfileCommand'
    },
    Factory:     {
        RpcCommandFactory: 'RpcCommandFactory',
        TestFactory: 'TestFactory'
    },
    Middleware:     {
        AuthenticateMiddleware: 'AuthenticateMiddleware',
        PopulateUserMiddleware: 'PopulateUserMiddleware',
        RestApiMiddleware: 'RestApiMiddleware',
        RpcMiddleware: 'RpcMiddleware'
    },
    Listener:     {
        ServerStartedListener: 'ServerStartedListener',
        user: {
            UserAuthenticatedListener: 'UserAuthenticatedListener',
            UserCreatedListener: 'UserCreatedListener'
        }
    },
    Controller:     {
        AddressController: 'AddressController',
        BidController: 'BidController',
        BidDataController: 'BidDataController',
        CryptocurrencyAddressController: 'CryptocurrencyAddressController',
        EscrowController: 'EscrowController',
        EscrowRatioController: 'EscrowRatioController',
        FavoriteItemController: 'FavoriteItemController',
        ItemCategoryController: 'ItemCategoryController',
        ItemImageController: 'ItemImageController',
        ItemImageDataController: 'ItemImageDataController',
        ItemInformationController: 'ItemInformationController',
        ItemLocationController: 'ItemLocationController',
        ItemPriceController: 'ItemPriceController',
        ListingItemController: 'ListingItemController',
        ListingItemObjectController: 'ListingItemObjectController',
        ListingItemTemplateController: 'ListingItemTemplateController',
        LocationMarkerController: 'LocationMarkerController',
        MarketController: 'MarketController',
        MessagingInformationController: 'MessagingInformationController',
        PaymentInformationController: 'PaymentInformationController',
        ProfileController: 'ProfileController',
        RpcController: 'RpcController',
        ShippingDestinationController: 'ShippingDestinationController',
        ShippingPriceController: 'ShippingPriceController',
        UserController: 'UserController'
    }
};
