const ApprovalContract = artifacts.require("../contracts/ApprovalContract.sol");

contract('ApprovalContract', accounts =>{
    it('initiates contract', async () =>{
        const contract = await ApprovalContract.deployed()
        const approver = await contract.approver.call()
        assert.equal(approver, '0xc5fdf4076b8f3a5357c5e395ab970b5b54098fef', 'approver account does not match ')

    })
})

