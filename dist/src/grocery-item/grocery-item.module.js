"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroceryItem = void 0;
const common_1 = require("@nestjs/common");
const grocery_item_controller_1 = require("./grocery-item.controller");
const grocery_item_service_1 = require("./grocery-item.service");
const grocery_item_repository_1 = require("./repository/grocery-item.repository");
const grocery_item_mapper_1 = require("./mapper/grocery-item.mapper");
let GroceryItem = class GroceryItem {
};
GroceryItem = __decorate([
    (0, common_1.Module)({
        controllers: [grocery_item_controller_1.GroceryItemController],
        providers: [grocery_item_service_1.GroceryItemService, grocery_item_mapper_1.GroceryItemMapper, grocery_item_repository_1.GroceryItemRepository],
        exports: [grocery_item_service_1.GroceryItemService],
    })
], GroceryItem);
exports.GroceryItem = GroceryItem;
//# sourceMappingURL=grocery-item.module.js.map