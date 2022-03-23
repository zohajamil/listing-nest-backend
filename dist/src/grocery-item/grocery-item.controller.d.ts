import { GroceryItemService } from './grocery-item.service';
import { GroceryItemResponseDto } from './dto/res/grocery-item.res.dto';
import { ItemIdResponseDto } from 'src/grocery-item/dto/res/grocery-item-id.res.dto';
import { GroceryItemRequestDto } from './dto/req/grocery-item.dto';
export declare class GroceryItemController {
    private readonly groceryItemService;
    constructor(groceryItemService: GroceryItemService);
    createGroceryItem(body: GroceryItemRequestDto): Promise<ItemIdResponseDto>;
    updateGroceryItem(groceryItemId: string, body: GroceryItemRequestDto): Promise<string>;
    deleteGroceryItem(groceryItemId?: string): Promise<string>;
    getGroceryItems(groceryItemId?: string, startAfter?: string, endBefore?: string): Promise<GroceryItemResponseDto[]>;
}
