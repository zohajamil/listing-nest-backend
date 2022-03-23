import { GroceryItemResponseDto } from './dto/res/grocery-item.res.dto';
import { ItemIdResponseDto } from 'src/grocery-item/dto/res/grocery-item-id.res.dto';
import { GroceryItemRepository } from './repository/grocery-item.repository';
import { GroceryItemRequestDto } from './dto/req/grocery-item.dto';
export declare class GroceryItemService {
    private readonly groceryItemRepository;
    constructor(groceryItemRepository: GroceryItemRepository);
    createGroceryItem(body: GroceryItemRequestDto): Promise<ItemIdResponseDto>;
    updateGroceryItem(itemId: string, body: GroceryItemRequestDto): Promise<string>;
    deleteGroceryItem(itemId: string): Promise<string>;
    getGroceryItems(itemId: string, startAfter: string, endBefore: string): Promise<GroceryItemResponseDto[]>;
}
