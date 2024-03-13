import { Contact } from "../../domain/entities/contact";

export interface GetAllContactsUseCase {
  execute(): Promise<Contact[]>;
}
