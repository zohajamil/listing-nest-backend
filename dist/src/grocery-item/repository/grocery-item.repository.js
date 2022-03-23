"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroceryItemRepository = void 0;
const common_1 = require("@nestjs/common");
const collections_constants_1 = require("../../constants/collections.constants");
const grocery_item_mapper_1 = require("../mapper/grocery-item.mapper");
const grocery_item_model_1 = require("../model/grocery-item.model");
let GroceryItemRepository = class GroceryItemRepository {
    constructor(groceryItemMapper) {
        this.groceryItemMapper = groceryItemMapper;
    }
    async createGroceryItem(body) {
        try {
            common_1.Logger.log('Adding grocery item in firestore');
            const docId = await collections_constants_1.groceryItemCollection.add(body);
            return this.groceryItemMapper.fromJsonToItemIdResponse(docId.id);
        }
        catch (error) {
            common_1.Logger.log('error is: ', error.message);
            throw new common_1.UnauthorizedException(error.message);
        }
    }
    async updateGroceryItem(itemId, body) {
        try {
            const item = new grocery_item_model_1.GroceryItem(body.name, body.description, body.picture);
            await collections_constants_1.groceryItemCollection.doc(itemId).set(Object.assign({}, item));
            return;
        }
        catch (error) {
            common_1.Logger.log('error is: ', error.message);
            throw new common_1.UnauthorizedException(error.message);
        }
    }
    async deleteGroceryItem(itemId) {
        try {
            await collections_constants_1.groceryItemCollection.doc(itemId).delete();
            return;
        }
        catch (error) {
            common_1.Logger.log('error is: ', error.message);
            throw new common_1.UnauthorizedException(error.message);
        }
    }
    async getItems(itemId, startAfter, endBefore) {
        try {
            common_1.Logger.log('Getting items from firestore with item id: ', itemId);
            let itemsArray = [];
            if (itemId.length) {
                const items = await collections_constants_1.groceryItemCollection.doc(itemId).get();
                common_1.Logger.log('Returning item data with itemId', items.id);
                itemsArray.push(this.groceryItemMapper.fromJsonToGroceryItemResponse(items));
            }
            else {
                let item = collections_constants_1.groceryItemCollection;
                item = item.orderBy('name', 'asc').limit(collections_constants_1.DEFAULT_PAGE_LIMIT);
                if (startAfter.length) {
                    const lastDocument = await collections_constants_1.groceryItemCollection
                        .doc(startAfter)
                        .get();
                    item = item.startAfter(lastDocument);
                }
                else if (endBefore.length) {
                    const firstDocument = await collections_constants_1.groceryItemCollection
                        .doc(endBefore)
                        .get();
                    item = item.endBefore(firstDocument);
                }
                const items = await item.get();
                common_1.Logger.log('Returning item all data');
                itemsArray =
                    this.groceryItemMapper.fromJsonToGroceryItemResponseArray(items);
            }
            return itemsArray;
        }
        catch (error) {
            common_1.Logger.log('error is: ', error.message);
            throw new common_1.UnauthorizedException(error.message);
        }
    }
};
GroceryItemRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [grocery_item_mapper_1.GroceryItemMapper])
], GroceryItemRepository);
exports.GroceryItemRepository = GroceryItemRepository;
//# sourceMappingURL=grocery-item.repository.js.map