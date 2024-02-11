import { IsBoolean, IsNotEmpty } from 'class-validator';

export class ChangeTodo {
  @IsNotEmpty()
  readonly title: string;

  @IsBoolean()
  readonly done: boolean;
}
