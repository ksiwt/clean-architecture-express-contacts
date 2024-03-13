import { Contact } from "../../entities/contact";
import { GetAllContacts } from "./get-all-contacts";
import { ContactRepository } from "../../interfaces/repositories/contact-repository";
import { mock } from "node:test";
import exp from "node:constants";

describe("Get All Contacts Use Case", () => {
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

  test("should return data", async () => {
    const ExpectedResult = [
      { id: "1", surname: "Smith", firstName: "John", email: "jonh@gmail.com" },
    ];

    jest
      .spyOn(mockContactRepository, "getContacts")
      .mockImplementation(() => Promise.resolve(ExpectedResult));
    const GetAllContactUse = new GetAllContacts(mockContactRepository);
    const result = await GetAllContactUse.execute();
    expect(result).toStrictEqual(ExpectedResult);
  });
});
