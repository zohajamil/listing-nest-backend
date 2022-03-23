import { GroceryItemRequestDto } from '../dto/req/grocery-item.dto';
import { GroceryItemResponseDto } from '../dto/res/grocery-item.res.dto';
import { ItemIdResponseDto } from '../dto/res/grocery-item-id.res.dto';
import { GroceryItemMapper } from '../mapper/grocery-item.mapper';
export declare class GroceryItemRepository {
    private readonly groceryItemMapper;
    constructor(groceryItemMapper: GroceryItemMapper);
    createGroceryItem(body: GroceryItemRequestDto): Promise<ItemIdResponseDto>;
    updateGroceryItem(itemId: string, body: GroceryItemRequestDto): Promise<void>;
    deleteGroceryItem(itemId: string): Promise<void>;
    getItems(itemId: string, startAfter: string, endBefore: string): Promise<GroceryItemResponseDto[]>;
}
