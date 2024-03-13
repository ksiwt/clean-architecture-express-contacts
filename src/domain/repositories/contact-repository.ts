import { ContactDataSource } from "../../data/interfaces/data-aources/contact-data-source";
import { Contact } from "../entities/contact";
import { ContactRepository } from "../interfaces/repositories/contact-repository";
import { GetAllContacts } from "../use-cases/contact/get-all-contacts";

export class ContactRepositoryImpl implements ContactRepository {
  contactDataSource: ContactDataSource;
  constructor(contactDataSource: ContactDataSource) {
    this.contactDataSource = contactDataSource;
  }

  async createContact(contact: Contact): Promise<boolean> {
    const result = await this.contactDataSource.create(contact);
    return result;
  }
  async getContacts(): Promise<Contact[]> {
    const result = await this.contactDataSource.getAll();
    return result;
  }
}
