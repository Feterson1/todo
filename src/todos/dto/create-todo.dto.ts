import { IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateTodo {
  @IsNotEmpty()
  readonly title: string;

  @IsBoolean()
  readonly done: boolean;
}
