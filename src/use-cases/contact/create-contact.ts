import { Contact } from "../../domain/entities/contact";

export interface CreateContactUseCase {
  execute(contact: Contact): Promise<boolean>;
}
