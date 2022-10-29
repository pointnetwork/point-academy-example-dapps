// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;
pragma experimental ABIEncoderV2;

contract ImageStore {
  bytes32 public storageImage;

  function setStorageImage(bytes32 newStorageImage) external {
    storageImage = newStorageImage;
  }
}