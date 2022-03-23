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
exports.GroceryItemService = void 0;
const common_1 = require("@nestjs/common");
const grocery_item_repository_1 = require("./repository/grocery-item.repository");
let GroceryItemService = class GroceryItemService {
    constructor(groceryItemRepository) {
        this.groceryItemRepository = groceryItemRepository;
    }
    async createGroceryItem(body) {
        try {
            const result = await this.groceryItemRepository.createGroceryItem(body);
            return result;
        }
        catch (e) {
            throw e;
        }
    }
    async updateGroceryItem(itemId, body) {
        try {
            await this.groceryItemRepository.updateGroceryItem(itemId, body);
            return;
        }
        catch (e) {
            throw e;
        }
    }
    async deleteGroceryItem(itemId) {
        try {
            await this.groceryItemRepository.deleteGroceryItem(itemId);
            return;
        }
        catch (e) {
            throw e;
        }
    }
    async getGroceryItems(itemId, startAfter, endBefore) {
        try {
            const result = await this.groceryItemRepository.getItems(itemId, startAfter, endBefore);
            return result;
        }
        catch (e) {
            throw e;
        }
    }
};
GroceryItemService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [grocery_item_repository_1.GroceryItemRepository])
], GroceryItemService);
exports.GroceryItemService = GroceryItemService;
//# sourceMappingURL=grocery-item.service.js.map