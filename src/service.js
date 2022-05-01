import {app} from "./firebase";
const db = app.ref("/contacts");
class ContactService {
  getAll() {
    return db;
  }
  create(contact) {
    return db.push(contact);
  }
  update(key, value) {
    return db.child(key).update(value);
  }
  delete(key) {
    return db.child(key).remove();
  }
  deleteAll() {
    return db.remove();
  }
}
export default new ContactService();