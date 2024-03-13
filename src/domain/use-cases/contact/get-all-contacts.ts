import { GetAllContactsUseCase } from "../../../use-cases/contact/get-all-contact";
import { Contact } from "../../entities/contact";
import { ContactRepository } from "../../interfaces/repositories/contact-repository";

export class GetAllContacts implements GetAllContactsUseCase {
  contactRepository: ContactRepository;
  constructor(contactRepository: ContactRepository) {
    this.contactRepository = contactRepository;
  }

  async execute(): Promise<Contact[]> {
    const result = await this.contactRepository.getContacts();
    return result;
  }
}
