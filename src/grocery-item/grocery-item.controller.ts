import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { GroceryItemService } from './grocery-item.service';
import { GroceryItemResponseDto } from './dto/res/grocery-item.res.dto';
import { ItemIdResponseDto } from 'src/grocery-item/dto/res/grocery-item-id.res.dto';
import { logger } from 'firebase-functions/v1';
import { GroceryItemRequestDto } from './dto/req/grocery-item.dto';

@Controller('/grocery-items')
export class GroceryItemController {
  constructor(private readonly groceryItemService: GroceryItemService) {}

  @Post()
  public async createGroceryItem(
    @Body() body: GroceryItemRequestDto,
  ): Promise<ItemIdResponseDto> {
    logger.log('In the grocery item Controller');
    return await this.groceryItemService.createGroceryItem(body);
  }

  @Put('/:groceryItemId')
  public async updateGroceryItem(
    @Param('groceryItemId') groceryItemId = '',
    @Body() body: GroceryItemRequestDto,
  ): Promise<string> {
    return await this.groceryItemService.updateGroceryItem(groceryItemId, body);
  }

  @Delete('/:groceryItemId')
  public async deleteGroceryItem(
    @Param('groceryItemId') groceryItemId = '',
  ): Promise<string> {
    return await this.groceryItemService.deleteGroceryItem(groceryItemId);
  }

  @Get()
  public async getGroceryItems(
    @Query('groceryItemId') groceryItemId = '',
    @Query('startAfter') startAfter = '',
    @Query('endBefore') endBefore = '',
  ): Promise<GroceryItemResponseDto[]> {
    return await this.groceryItemService.getGroceryItems(
      groceryItemId,
      startAfter,
      endBefore,
    );
  }
}
