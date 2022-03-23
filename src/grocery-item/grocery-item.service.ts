import { Injectable } from '@nestjs/common';
import { GroceryItemResponseDto } from './dto/res/grocery-item.res.dto';
import { ItemIdResponseDto } from 'src/grocery-item/dto/res/grocery-item-id.res.dto';
import { GroceryItemRepository } from './repository/grocery-item.repository';
import { GroceryItemRequestDto } from './dto/req/grocery-item.dto';

@Injectable()
export class GroceryItemService {
  constructor(private readonly groceryItemRepository: GroceryItemRepository) {}

  async createGroceryItem(
    body: GroceryItemRequestDto,
  ): Promise<ItemIdResponseDto> {
    try {
      const result: ItemIdResponseDto =
        await this.groceryItemRepository.createGroceryItem(body);
      return result;
    } catch (e) {
      throw e;
    }
  }

  async updateGroceryItem(
    itemId: string,
    body: GroceryItemRequestDto,
  ): Promise<string> {
    try {
      await this.groceryItemRepository.updateGroceryItem(itemId, body);
      return;
    } catch (e) {
      throw e;
    }
  }

  async deleteGroceryItem(itemId: string): Promise<string> {
    try {
      await this.groceryItemRepository.deleteGroceryItem(itemId);
      return;
    } catch (e) {
      throw e;
    }
  }

  async getGroceryItems(
    itemId: string,
    startAfter: string,
    endBefore: string,
  ): Promise<GroceryItemResponseDto[]> {
    try {
      const result: GroceryItemResponseDto[] =
        await this.groceryItemRepository.getItems(
          itemId,
          startAfter,
          endBefore,
        );
      return result;
    } catch (e) {
      throw e;
    }
  }
}
