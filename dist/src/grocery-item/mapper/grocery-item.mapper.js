"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroceryItemMapper = void 0;
const common_1 = require("@nestjs/common");
const grocery_itemV2_res_dto_1 = require("../dto/res/grocery-itemV2.res.dto");
const grocery_item_res_dto_1 = require("../dto/res/grocery-item.res.dto");
const grocery_item_id_res_dto_1 = require("../dto/res/grocery-item-id.res.dto");
const grocery_item1_model_1 = require("../model/grocery-item1.model");
let GroceryItemMapper = class GroceryItemMapper {
    fromJsonToGroceryItemResponseArray(groceryItems) {
        return groceryItems.docs.map((doc) => {
            return this.fromJsonToGroceryItemResponse(doc);
        });
    }
    fromJsonToGroceryItemResponse(doc) {
        return new grocery_item_res_dto_1.GroceryItemResponseDto(doc.id, doc.data()['name'], doc.data()['description'], doc.data()['picture']);
    }
    fromJsonToCompanyListResponseArray(companies) {
        return companies.docs.map((doc) => {
            return this.fromJsonToCompanyListResponse(doc);
        });
    }
    fromJsonToCompanyListResponse(doc) {
        const companyListResponseDto = new grocery_itemV2_res_dto_1.GroceryItemResponseDtoV2(doc.id, doc.data()['name']);
        return companyListResponseDto;
    }
    fromJsonToCompanyIds(doc) {
        return new grocery_item1_model_1.CompanyIdModel(doc.id);
    }
    fromJsonToItemIdResponse(itemId) {
        return new grocery_item_id_res_dto_1.ItemIdResponseDto(itemId);
    }
};
GroceryItemMapper = __decorate([
    (0, common_1.Injectable)()
], GroceryItemMapper);
exports.GroceryItemMapper = GroceryItemMapper;
//# sourceMappingURL=grocery-item.mapper.js.map