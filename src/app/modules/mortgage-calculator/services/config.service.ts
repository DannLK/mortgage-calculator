import { Injectable } from "@angular/core";
import { mortgageFormConfig } from '../configs/mortgage-form.config'
import { mortgageFormInputInterface } from "../models/mortgage.interface";

@Injectable()
export class configService {

  private readonly config: mortgageFormInputInterface[];
  
  constructor (){
    this.config = mortgageFormConfig;
  }

  public getConfig(){
    return this.config;
  }
}