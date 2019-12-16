var Librarian = artifacts.require("Librarian");
const truffleAssert = require('truffle-assertions');

contract("Librarian", (accounts) => {
  let librarian;
  const owner = accounts[0];
  const userA = accounts[1];
  const userB = accounts[2];

  beforeEach('should setup the contract instance', async () => {
    librarian = await Librarian.new({ from: owner});
  });

  it("should add employee and emit event", async () => {
    const addEmployee = await librarian.addEmployee(userA, { from: owner});
    const employee = await librarian.employee.call(userA);
    assert.equal(employee, 1);
    truffleAssert.eventEmitted(addEmployee, 'NewEmployee', (event) => {
      return event.employee == userA;
    });
  });

  it("should save admin and emit event", async () => {
    await librarian.addEmployee(userA, { from: owner});
    const addAdmin = await librarian.addAdmin(userA, { from: owner});
    const admin = await librarian.employee.call(userA);
    assert.equal(admin, 2);
    truffleAssert.eventEmitted(addAdmin, 'NewAdmin', (event) => {
      return event.admin == userA;
    });
  });

  it("should delete a librarian and emit an event", async () => {
    await librarian.addEmployee(userA, { from: owner});
    const deleted = await librarian.deleteEmployee(userA);
    const employee = await librarian.employee.call(userA);
    assert.equal(employee, 0);
    truffleAssert.eventEmitted(deleted, 'DeletedEmployee', (event) => {
      return event.employee == userA;
    });
  });

  it("should fail without admin credential", async () => {
    await truffleAssert.reverts(librarian.addEmployee(userB, { from: userA}));
  });

  it("should not add existing employee and admin to addEmployee function", async () => {
    await librarian.addEmployee(userA, { from: owner});
    await truffleAssert.reverts(librarian.addEmployee(userA, { from: owner}));
    await truffleAssert.reverts(librarian.addEmployee(owner, { from: owner}));
  });

  it("should not add existing admin to addAdmin function", async () => {
    await truffleAssert.reverts(librarian.addAdmin(owner, { from: owner}));
  });

  it("should not delete an employee with the same sender address", async () => {
    await truffleAssert.reverts(librarian.deleteEmployee(owner, { from: owner}));
  });

});
