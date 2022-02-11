from brownie import SecureStorage;
from scripts.helpful_scripts import get_account;

def deploy():
    account = get_account()
    contract = SecureStorage.deploy({'from': account})
    print(f"Deployed SecureStorage contract to {contract.address}")

def main():
    deploy()
