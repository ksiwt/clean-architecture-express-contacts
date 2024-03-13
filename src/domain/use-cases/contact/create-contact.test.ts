import { mock } from "node:test";
import { Contact } from "../../entities/contact";
import { ContactRepository } from "../../interfaces/repositories/contact-repository";
import { CreateContact } from "./create-contact";
import exp from "node:constants";

describe("Create Contact Use Case", () => {
  class MockContactRepository implements ContactRepository {
    createContact(contact: Contact): Promise<boolean> {
      throw new Error("Method not implemented.");
    }
    getContacts(): Promise<Contact[]> {
      throw new Error("Method not implemented.");
    }
  }

  let mockContactRepository: ContactRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockContactRepository = new MockContactRepository();
  });

  test("should return true", async () => {
    const InputData = {
      id: "1",
      surname: "Smith",
      firstName: "John",
      email: "john@gmail.com",
    };

    jest
      .spyOn(mockContactRepository, "createContact")
      .mockImplementation(() => Promise.resolve(true));
    const createContactUseCase = new CreateContact(mockContactRepository);
    const result = await createContactUseCase.execute(InputData);
    expect(result).toBe(true);
  });
});
