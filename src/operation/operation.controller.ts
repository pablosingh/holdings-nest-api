import { Controller, Get, Post, Delete, Put } from '@nestjs/common';
import { OperationService } from './operation.service';

@Controller('operation')
export class OperationController {
  constructor(private readonly operationService: OperationService) {}

  @Get()
    getAllOperation() {
      return this.operationService.getAllOperations();
    }
  
    @Post()
    createOperation() {
      return 'This controller creates a new Operation';
    }
  
    @Delete()
    deleteOperation() {
      return 'This controller deletes a Operation';
    }
    
    @Put()
    updateOperation() {
    return 'This controller updates a Operation';
  }
}
